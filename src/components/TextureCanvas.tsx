import { useEffect, useRef, useState } from 'react';
import { floodFill } from '../lib/floodFill';
import { W,H, clone } from '../lib/skin';
import { Tool } from '../types';

export default function TextureCanvas({
  tool,color,size,mirror,grid,
  img, setImg, onSnapshot
}:{
  tool:Tool; color:string; size:number; mirror:boolean; grid:boolean;
  img:ImageData; setImg:(d:ImageData)=>void; onSnapshot:()=>void;
}){
  const ref = useRef<HTMLCanvasElement>(null);
  const [zoom,setZoom]=useState(8);
  const [hover,setHover]=useState<{x:number,y:number}|null>(null);

  function rgba(c:string):[number,number,number,number]{ const s=c.replace('#',''); const v=s.length===3?s.split('').map(c=>c+c).join(''):s; const n=parseInt(v,16); return [(n>>16)&255,(n>>8)&255,n&255,255]; }
  function draw(px:number,py:number,c:[number,number,number,number]){
    const d=img.data; const r=Math.max(1,Math.floor(size));
    for(let y=-r+1;y<=r-1;y++) for(let x=-r+1;x<=r-1;x++){
      const xx=px+x, yy=py+y; if(xx<0||yy<0||xx>=W||yy>=H) continue;
      const i=(yy*W+xx)*4; d[i]=c[0]; d[i+1]=c[1]; d[i+2]=c[2]; d[i+3]=c[3];
    }
  }
  function handle(e: React.MouseEvent){
    const c=ref.current!; const r=c.getBoundingClientRect();
    const x=Math.floor((e.clientX-r.left)/zoom), y=Math.floor((e.clientY-r.top)/zoom); setHover({x,y});
    if(e.buttons!==1) return;
    const next = clone(img);
    if(tool==='brush'){ draw(x,y,rgba(color)); if(mirror) draw(W-1-x,y,rgba(color)); }
    else if(tool==='eraser'){ draw(x,y,[0,0,0,0]); if(mirror) draw(W-1-x,y,[0,0,0,0]); }
    else if(tool==='fill'){ floodFill(next,x,y,rgba(color)); if(mirror) floodFill(next,W-1-x,y,rgba(color)); }
    else if(tool==='picker'){
      const i=(y*W+x)*4; const d=img.data; if(d[i+3]>0){ const hex='#'+[d[i],d[i+1],d[i+2]].map(n=>n.toString(16).padStart(2,'0')).join(''); window.dispatchEvent(new CustomEvent('skin-picker',{detail:hex})); }
      return;
    }
    setImg(next);
  }

  useEffect(()=>{
    const c=ref.current!; c.width=W*zoom; c.height=H*zoom;
    const ctx=c.getContext('2d')!; ctx.imageSmoothingEnabled=false;
    const off=document.createElement('canvas'); off.width=W; off.height=H; off.getContext('2d')!.putImageData(img,0,0);
    ctx.clearRect(0,0,c.width,c.height); ctx.drawImage(off,0,0,c.width,c.height);
    if(grid){
      ctx.strokeStyle='rgba(255,255,255,.08)'; ctx.lineWidth=1;
      for(let x=0;x<=W;x++){ ctx.beginPath(); ctx.moveTo(x*zoom+0.5,0); ctx.lineTo(x*zoom+0.5,H*zoom); ctx.stroke(); }
      for(let y=0;y<=H;y++){ ctx.beginPath(); ctx.moveTo(0,y*zoom+0.5); ctx.lineTo(W*zoom,y*zoom+0.5); ctx.stroke(); }
    }
    if(hover){ ctx.fillStyle='rgba(255,255,255,.12)'; ctx.fillRect(hover.x*zoom,hover.y*zoom,zoom,zoom); }
  },[img,zoom,grid,hover]);

  return (
    <div className="neon-card p-2">
      <div className="flex items-center justify-between mb-1">
        <div className="font-semibold">Texture (64×64)</div>
        <div className="flex items-center gap-2">
          <span className="label">Zoom</span>
          <input type="range" min={4} max={32} value={zoom} onChange={e=>setZoom(parseInt(e.target.value))}/>
          {hover && <span className="text-neon-100 text-xs">x:{hover.x} y:{hover.y}</span>}
        </div>
      </div>
      <canvas ref={ref} onMouseDown={(e)=>{ onSnapshot(); handle(e); }} onMouseMove={handle} style={{imageRendering:'pixelated', cursor: tool==='picker'?'crosshair':'default'}} />
    </div>
  );
}