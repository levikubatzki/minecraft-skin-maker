import { useEffect, useRef, useState } from "react";
import "./styles.css";
import Toolbar from "./components/Toolbar";
import GradientPanel from "./components/GradientPanel";
import CanvasEditor from "./components/CanvasEditor";
import Preview3D from "./components/Preview3D";
import Toast from "./components/Toast";
import ImageToSkin from "./components/ImageToSkin";

import { Tool, GradientOptions } from "./types";
import { UndoRedo } from "./lib/history";
import { SKIN_W, SKIN_H, createEmptySkin, downloadCanvasPNG, loadSkinFromFile, copyCanvasToClipboard, imageDataFromCanvas, putImageDataToCanvas } from "./lib/skin";
import { applyGradientToImageData } from "./lib/gradient";

export default function App() {
  const [tool, setTool] = useState<Tool>('brush');
  const [color, setColor] = useState('#8A4DFF');
  const [size, setSize] = useState(4);
  const [toast, setToast] = useState<string|null>(null);

  const [gopt, setGopt] = useState<GradientOptions>({ start:'#6F2BFF', end:'#C5A3FF', angleDeg: 315, dither:true });

  const baseCanvasRef = useRef<HTMLCanvasElement>(null);
  const hist = useRef(new UndoRedo());

  useEffect(()=> {
    const c = baseCanvasRef.current!;
    c.width = SKIN_W; c.height = SKIN_H;
    const ctx = c.getContext('2d')!;
    const img = createEmptySkin();
    ctx.putImageData(img,0,0);
    snapshot();
  }, []);

  useEffect(()=> {
    const onPick = (e: Event) => {
      // @ts-ignore
      setColor(e.detail as string);
      setTool('brush');
      setToast('Farbe übernommen');
    };
    window.addEventListener('skin-picker', onPick as any);
    return ()=>window.removeEventListener('skin-picker', onPick as any);
  },[]);

  function getImageData() { return imageDataFromCanvas(baseCanvasRef.current!); }
  function setImageData(img: ImageData) { putImageDataToCanvas(baseCanvasRef.current!, img); }
  function snapshot() {
    const img = getImageData();
    const clone = new ImageData(new Uint8ClampedArray(img.data), img.width, img.height);
    hist.current.push(clone);
  }

  function undo() { const prev = hist.current.undo(); if (prev) { setImageData(prev); setToast('Undo'); } }
  function redo() { const nxt = hist.current.redo(); if (nxt) { setImageData(nxt); setToast('Redo'); } }

  function applyGradient() {
    snapshot();
    const img = getImageData();
    applyGradientToImageData(img, gopt);
    setImageData(img);
    setToast('Gradient angewendet');
  }
  function randomGradient() {
    const randHex = ()=> '#'+Math.floor(Math.random()*0xffffff).toString(16).padStart(6,'0');
    setGopt(g=>({ ...g, start: randHex(), end: randHex(), angleDeg: Math.floor(Math.random()*360)}));
  }

  async function handleImport(e: React.ChangeEvent<HTMLInputElement>) {
    const f = e.target.files?.[0]; if (!f) return;
    const img = await loadSkinFromFile(f);
    snapshot();
    const c = baseCanvasRef.current!;
    const ctx = c.getContext('2d')!;
    const off = document.createElement('canvas');
    off.width = SKIN_W; off.height = SKIN_H;
    const octx = off.getContext('2d')!;
    octx.clearRect(0,0,SKIN_W,SKIN_H);
    octx.drawImage(img, 0,0, SKIN_W, SKIN_H);
    const data = octx.getImageData(0,0,SKIN_W,SKIN_H);
    ctx.putImageData(data,0,0);
    setToast('Skin importiert');
    e.currentTarget.value = '';
  }

  function download() { downloadCanvasPNG(baseCanvasRef.current!, 'skin.png'); }
  async function copyToClipboard() { await copyCanvasToClipboard(baseCanvasRef.current!); setToast('Als Bild in Zwischenablage kopiert'); }
  async function getPNGBlob(): Promise<Blob> {
    const canvas = baseCanvasRef.current!;
    return await new Promise<Blob|null>(r => canvas.toBlob(b=>r(b), 'image/png')).then(b => b!);
  }

  function applyImageData(img: ImageData){
    snapshot();
    setImageData(img);
    setToast('Bild auf Canvas angewendet');
  }

  return (
    <div className="min-h-screen p-6">
      <header className="mb-6">
        <h1 className="text-3xl font-bold tracking-wide" style={{textShadow:'0 0 10px var(--glow)'}}>Minecraft Skin Maker — Neon</h1>
        <p className="text-neon-100">Gradient · Malen · Undo/Redo · 3D-Vorschau · Import/Export · Bild→Skin</p>
      </header>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 flex flex-col gap-4">
          <div className="neon-card p-4">
            <Toolbar
              tool={tool} setTool={setTool}
              color={color} setColor={setColor}
              size={size} setSize={setSize}
              onUndo={undo} onRedo={redo}
              canUndo={hist.current.canUndo()} canRedo={hist.current.canRedo()}
            />
          </div>

          <CanvasEditor
            tool={tool}
            color={color}
            size={size}
            onSnapshot={snapshot}
            getImageData={getImageData}
            setImageData={setImageData}
          />

          <div className="neon-card p-4 flex flex-wrap gap-3 items-center">
            <input id="import" type="file" accept="image/png" className="hidden" onChange={handleImport}/>
            <label htmlFor="import" className="btn cursor-pointer">Import PNG</label>
            <button className="btn" onClick={download}>Download PNG</button>
            <button className="btn-ghost" onClick={copyToClipboard}>Copy als Bild</button>
            <span className="text-neon-100 text-sm">Format: 64×64 PNG</span>
          </div>
        </div>

        <div className="flex flex-col gap-4">
          <GradientPanel opt={gopt} setOpt={setGopt} onApply={applyGradient} onRandom={randomGradient}/>
          <ImageToSkin apply={applyImageData} />
          <Preview3D getPNG={getPNGBlob}/>
          <div className="neon-card p-3">
            <canvas ref={baseCanvasRef} className="w-full rounded-xl2 border border-cyber-edge" style={{imageRendering:'pixelated'}}/>
            <p className="text-xs text-neon-100 mt-2">Basis-Canvas (64×64). Wird live in 3D übernommen.</p>
          </div>
        </div>
      </div>

      {toast && <Toast text={toast} onDone={()=>setToast(null)}/>}
      <footer className="mt-8 text-center text-neon-100 text-xs">
        Made for <span className="text-neon-300 font-semibold">levikubatzki</span> · React + TS · skinview3d
      </footer>
    </div>
  );
}
