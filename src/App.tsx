import { useEffect, useRef, useState } from 'react';
import './styles.css';
import { Tool } from './types';
import { UndoRedo } from './lib/history';
import { W,H, blank, clone, download, copyToClipboard, toBlob, loadPNGFromFile, makeDefaultSteve } from './lib/skin';
import ToolRail from './components/ToolRail';
import RightPanel from './components/RightPanel';
import Viewer3D from './components/Viewer3D';
import TextureCanvas from './components/TextureCanvas';

export default function App(){
  const [tool,setTool]=useState<Tool>('brush');
  const [color,setColor]=useState('#8A4DFF');
  const [size,setSize]=useState(2);
  const [mirror,setMirror]=useState(true);
  const [grid,setGrid]=useState(true);

  const [img,setImg]=useState<ImageData>(blank());
  const hist=useRef(new UndoRedo<ImageData>());

  useEffect(()=>{
    setImg(makeDefaultSteve());
    hist.current.push(makeDefaultSteve());
  },[]);

  useEffect(()=>{
    const onPick=(e:any)=>{ setColor(e.detail); setTool('brush'); };
    window.addEventListener('skin-picker', onPick);
    return ()=>window.removeEventListener('skin-picker', onPick);
  },[]);

  function snapshot(){ hist.current.push(clone(img)); }
  function undo(){ const s=hist.current.undo(); if(s) setImg(clone(s)); }
  function redo(){ const s=hist.current.redo(); if(s) setImg(clone(s)); }

  async function getPNG(): Promise<Blob>{
    const c=document.createElement('canvas'); c.width=W; c.height=H; const ctx=c.getContext('2d')!; ctx.putImageData(img,0,0); return await toBlob(c);
  }
  async function importFile(f: File){ const data=await loadPNGFromFile(f); snapshot(); setImg(data); }
  function exportPNG(){ const c=document.createElement('canvas'); c.width=W; c.height=H; const ctx=c.getContext('2d')!; ctx.putImageData(img,0,0); download(c,'skin.png'); }
  async function copyPNG(){ const c=document.createElement('canvas'); c.width=W; c.height=H; const ctx=c.getContext('2d')!; ctx.putImageData(img,0,0); await copyToClipboard(c); }

  return (
    <div className="min-h-screen">
      {/* Tools left */}
      <ToolRail tool={tool} setTool={setTool} onUndo={undo} onRedo={redo} />

      {/* Right panel */}
      <RightPanel
        color={color} setColor={setColor}
        size={size} setSize={setSize}
        mirror={mirror} setMirror={setMirror}
        grid={grid} setGrid={setGrid}
        onImport={importFile} onExport={exportPNG} onCopy={copyPNG}
      />

      {/* Center area */}
      <div className="pt-16 px-4 lg:px-16">
        <div className="relative w-full h-[60vh]">
          <Viewer3D getPNG={getPNG} />
        </div>
        <div className="mt-4">
          <TextureCanvas tool={tool} color={color} size={size} mirror={mirror} grid={grid} img={img} setImg={setImg} onSnapshot={snapshot} />
        </div>
      </div>
    </div>
  );
}
