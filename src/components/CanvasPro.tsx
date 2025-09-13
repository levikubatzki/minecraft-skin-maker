import { useEffect, useRef, useState } from 'react';
import { Tool, Layer } from '../types';
import { floodFill } from '../lib/floodFill';
import { W, H, clone } from '../lib/skin';

export default function CanvasPro({
  tool, color, size, mirror, grid, layer,
  baseImg, overlayImg,
  setBaseImg, setOverlayImg,
  onSnapshot
}:{
  tool:Tool; color:string; size:number; mirror:boolean; grid:boolean; layer:Layer;
  baseImg: ImageData; overlayImg: ImageData;
  setBaseImg:(img:ImageData)=>void; setOverlayImg:(img:ImageData)=>void;
  onSnapshot:()=>void;
}){
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [zoom, setZoom] = useState(8); // each pixel is 8x8 by default
  const [hover, setHover] = useState<{x:number,y:number}|null>(null);

  function activeImg(){ return layer==='base' ? baseImg : overlayImg; }
  function setActive(img: ImageData){ layer==='base' ? setBaseImg(img) : setOverlayImg(img); }

  function rgba(c:string):[number,number,number,number]{ const s=c.replace('#',''); const v=s.length===3?s.split('').map(c=>c+c).join(''):s; const n=parseInt(v,16); return [(n>>16)&255,(n>>8)&255,n&255,255]; }

  function drawPoint(img: ImageData, x:number,y:number, rgbaVal:[number,number,number,number]){
    if (x<0||y<0||x>=W||y>=H) return;
    const r = Math.max(1, Math.floor(size));
    for (let yy=-r+1; yy<=r-1; yy++){
      for (let xx=-r+1; xx<=r-1; xx++){
        const px=x+xx, py=y+yy; if (px<0||py<0||px>=W||py>=H) continue;
        const i=(py*W+px)*4; const d=img.data;
        d[i]=rgbaVal[0]; d[i+1]=rgbaVal[1]; d[i+2]=rgbaVal[2]; d[i+3]=rgbaVal[3];
      }
    }
  }

  function handle(e: React.MouseEvent){
    const c = canvasRef.current!; const rect=c.getBoundingClientRect();
    const x = Math.floor((e.clientX-rect.left) / zoom);
    const y = Math.floor((e.clientY-rect.top) / zoom);
    setHover({x,y});
    if (e.buttons!==1) return;

    const img = clone(activeImg());
    if (tool==='brush') {
      drawPoint(img, x,y, rgba(color));
      if (mirror) drawPoint(img, W-1-x, y, rgba(color));
    } else if (tool==='eraser') {
      drawPoint(img, x,y, [0,0,0,0]);
      if (mirror) drawPoint(img, W-1-x, y, [0,0,0,0]);
    } else if (tool==='fill') {
      floodFill(img, x,y, rgba(color));
      if (mirror) floodFill(img, W-1-x, y, rgba(color));
    } else if (tool==='picker') {
      const i=(y*W+x)*4; const d=img.data; if (d[i+3]>0){
        const hex = '#' + [d[i],d[i+1],d[i+2]].map(n=>n.toString(16).padStart(2,'0')).join('');
        window.dispatchEvent(new CustomEvent('skin-picker', { detail: hex }));
      }
      return;
    }
    setActive(img);
  }

  // draw
  useEffect(()=>{
    const c = canvasRef.current!; c.width=W*zoom; c.height=H*zoom;
    const ctx = c.getContext('2d')!; ctx.imageSmoothingEnabled=false;
    // composite base + overlay
    const off=document.createElement('canvas'); off.width=W; off.height=H; const octx=off.getContext('2d')!;
    const tmp = new ImageData(new Uint8ClampedArray(baseImg.data), W, H);
    octx.putImageData(tmp,0,0);
    const o2 = new ImageData(new Uint8ClampedArray(overlayImg.data), W, H);
    octx.putImageData(o2,0,0);
    ctx.clearRect(0,0,c.width,c.height);
    ctx.drawImage(off,0,0,c.width,c.height);

    if (grid){
      ctx.strokeStyle='rgba(255,255,255,0.07)';
      ctx.lineWidth=1;
      for (let x=0; x<=W; x++){ ctx.beginPath(); ctx.moveTo(x*zoom+0.5,0); ctx.lineTo(x*zoom+0.5,H*zoom); ctx.stroke(); }
      for (let y=0; y<=H; y++){ ctx.beginPath(); ctx.moveTo(0,y*zoom+0.5); ctx.lineTo(W*zoom,y*zoom+0.5); ctx.stroke(); }
    }

    // body guides overlay (simple rectangles)
    ctx.strokeStyle='rgba(115,40,255,.6)';
    ctx.lineWidth=2;
    // head front (8x8 at 8,8)
    ctx.strokeRect(8*zoom,8*zoom,8*zoom,8*zoom);
    // body front (8x12 at 20,20? Actually 20,20 typical; use highlight boxes for reference)
    ctx.strokeRect(20*zoom,20*zoom,8*zoom,12*zoom);
    ctx.strokeRect(44*zoom,20*zoom,4*zoom,12*zoom); // arms area rough
    ctx.strokeRect(4*zoom,20*zoom,4*zoom,12*zoom);
    ctx.strokeRect(20*zoom,36*zoom,4*zoom,12*zoom); // legs rough
    ctx.strokeRect(28*zoom,36*zoom,4*zoom,12*zoom);

    if (hover){
      ctx.fillStyle='rgba(255,255,255,0.15)';
      ctx.fillRect(hover.x*zoom, hover.y*zoom, zoom, zoom);
    }
  }, [baseImg, overlayImg, zoom, grid, hover]);

  useEffect(()=>{
    const onKey=(e: KeyboardEvent)=>{
      if (e.key==='+') setZoom(z=>Math.min(32,z+1));
      if (e.key==='-') setZoom(z=>Math.max(4,z-1));
    };
    window.addEventListener('keydown', onKey);
    return ()=>window.removeEventListener('keydown', onKey);
  },[]);

  return (
    <div className="neon-card p-3">
      <div className="flex items-center justify-between mb-2">
        <div className="font-semibold">Canvas ({W}×{H})</div>
        <div className="flex items-center gap-2">
          <span className="label">Zoom</span>
          <input className="range" type="range" min={4} max={32} value={zoom} onChange={e=>setZoom(parseInt(e.target.value))}/>
          {hover && <span className="badge">x:{hover.x} y:{hover.y}</span>}
        </div>
      </div>
      <div className="overflow-auto">
        <canvas ref={canvasRef}
          onMouseDown={(e)=>{ onSnapshot(); handle(e); }}
          onMouseMove={handle}
          style={{ imageRendering:'pixelated', cursor: tool==='picker'?'crosshair':'default', background:'#0b0b17', borderRadius:12 }}
        />
      </div>
      <p className="text-neon-100 text-xs mt-1">Tipp: + / - für Zoom, G = Grid, M = Mirror</p>
    </div>
  );
}