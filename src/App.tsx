import { useEffect, useRef, useState } from 'react';
import './styles.css';
import { Tool, Layer } from './types';
import { UndoRedo } from './lib/history';
import { W, H, blank, clone, download, copyToClipboard, toBlob, loadPNGFromFile, makeDefaultSteve } from './lib/skin';
import Sidebar from './components/Sidebar';
import CanvasPro from './components/CanvasPro';
import Preview3D from './components/Preview3D';

export default function App(){
  const [tool, setTool] = useState<Tool>('brush');
  const [color, setColor] = useState('#8A4DFF');
  const [size, setSize] = useState(2);
  const [mirror, setMirror] = useState(true);
  const [grid, setGrid] = useState(true);
  const [layer, setLayer] = useState<Layer>('base');

  const [baseImg, setBaseImg] = useState<ImageData>(blank());
  const [overlayImg, setOverlayImg] = useState<ImageData>(blank());

  const hist = useRef(new UndoRedo<{base:ImageData, overlay:ImageData}>());

  // hotkeys
  useEffect(()=>{
    const onKey=(e:KeyboardEvent)=>{
      if (e.target && (e.target as HTMLElement).tagName === 'INPUT') return;
      if (e.key==='b' || e.key==='B') setTool('brush');
      if (e.key==='e' || e.key==='E') setTool('eraser');
      if (e.key==='f' || e.key==='F') setTool('fill');
      if (e.key==='p' || e.key==='P') setTool('picker');
      if (e.key==='g' || e.key==='G') setGrid(g=>!g);
      if (e.key==='m' || e.key==='M') setMirror(m=>!m);
      if (e.ctrlKey && e.key==='z') undo();
      if (e.ctrlKey && e.key==='y') redo();
    };
    window.addEventListener('keydown', onKey);
    return ()=>window.removeEventListener('keydown', onKey);
  },[]);

  // load default Steve-like on first mount
  useEffect(()=>{
    const steve = makeDefaultSteve();
    setBaseImg(steve);
    snapshot(steve, overlayImg);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  function snapshot(b=baseImg, o=overlayImg){
    hist.current.push({ base: clone(b), overlay: clone(o) });
  }
  function undo(){ const s = hist.current.undo(); if (s){ setBaseImg(clone(s.base)); setOverlayImg(clone(s.overlay)); } }
  function redo(){ const s = hist.current.redo(); if (s){ setBaseImg(clone(s.base)); setOverlayImg(clone(s.overlay)); } }

  // merge current layers onto a canvas and return blob
  async function getPNG(): Promise<Blob>{
    const c=document.createElement('canvas'); c.width=W; c.height=H; const ctx=c.getContext('2d')!;
    ctx.putImageData(baseImg,0,0); ctx.putImageData(overlayImg,0,0);
    return await toBlob(c);
  }

  async function importPNG(e: React.ChangeEvent<HTMLInputElement>){
    const f=e.target.files?.[0]; if(!f) return;
    const img = await loadPNGFromFile(f);
    snapshot();
    setBaseImg(img);
    e.currentTarget.value='';
  }

  function exportPNG(){ const c=document.createElement('canvas'); c.width=W; c.height=H; const ctx=c.getContext('2d')!; ctx.putImageData(baseImg,0,0); ctx.putImageData(overlayImg,0,0); download(c,'skin.png'); }
  async function copyPNG(){ const c=document.createElement('canvas'); c.width=W; c.height=H; const ctx=c.getContext('2d')!; ctx.putImageData(baseImg,0,0); ctx.putImageData(overlayImg,0,0); await copyToClipboard(c); }

  return (
    <div className="min-h-screen p-5">
      <header className="mb-4">
        <h1 className="text-2xl font-bold" style={{textShadow:'0 0 10px var(--glow)'}}>Minecraft Skin Maker — Pro</h1>
        <p className="text-neon-100">Pixel-Editor · Base/Overlay-Layer · Mirror · Grid · 3D Preview · Import/Export</p>
      </header>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-5">
        <div className="lg:col-span-3">
          <Sidebar
            tool={tool} setTool={setTool}
            color={color} setColor={setColor}
            size={size} setSize={setSize}
            mirror={mirror} setMirror={setMirror}
            grid={grid} setGrid={setGrid}
            layer={layer} setLayer={setLayer}
            onUndo={undo} onRedo={redo}
            canUndo={hist.current.canUndo()} canRedo={hist.current.canRedo()}
          />
        </div>

        <div className="lg:col-span-6 flex flex-col gap-4">
          <CanvasPro
            tool={tool} color={color} size={size}
            mirror={mirror} grid={grid} layer={layer}
            baseImg={baseImg} overlayImg={overlayImg}
            setBaseImg={setBaseImg} setOverlayImg={setOverlayImg}
            onSnapshot={snapshot}
          />

          <div className="neon-card p-3 flex flex-wrap gap-3 items-center">
            <input id="import" type="file" accept="image/png" className="hidden" onChange={importPNG} />
            <label htmlFor="import" className="btn cursor-pointer">Import PNG</label>
            <button className="btn" onClick={exportPNG}>Download PNG</button>
            <button className="btn-ghost" onClick={copyPNG}>Copy als Bild</button>
            <span className="text-neon-100 text-xs">Format: 64×64</span>
          </div>
        </div>

        <div className="lg:col-span-3">
          <Preview3D getPNG={getPNG} />
        </div>
      </div>

      <footer className="text-center text-neon-100 text-xs mt-6">Made for levikubatzki · React + TS + skinview3d</footer>
    </div>
  );
}
