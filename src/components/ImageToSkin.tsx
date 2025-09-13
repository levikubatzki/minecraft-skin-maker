import { useRef, useState } from "react";
import { SKIN_W, SKIN_H } from "../lib/skin";

export default function ImageToSkin({ apply }: { apply: (img: ImageData)=>void }){
  const [mode, setMode] = useState<'cover'|'contain'>('cover');
  const [status, setStatus] = useState<string>('');
  const fileRef = useRef<HTMLInputElement>(null);

  async function handleFile(file: File){
    setStatus('Bild laden ...');
    const url = URL.createObjectURL(file);
    const img = new Image();
    await new Promise<void>((res,rej)=>{ img.onload=()=>res(); img.onerror=rej; img.src=url; });
    URL.revokeObjectURL(url);

    const c = document.createElement('canvas');
    c.width = SKIN_W; c.height = SKIN_H;
    const ctx = c.getContext('2d')!;
    ctx.clearRect(0,0,SKIN_W,SKIN_H);

    const ir = img.width / img.height;
    const tr = SKIN_W / SKIN_H;
    let dw = SKIN_W, dh = SKIN_H, dx = 0, dy = 0;
    if (mode==='cover'){
      if (ir > tr) { dh = SKIN_H; dw = dh * ir; dx = (SKIN_W - dw)/2; }
      else { dw = SKIN_W; dh = dw / ir; dy = (SKIN_H - dh)/2; }
    } else {
      if (ir > tr) { dw = SKIN_W; dh = dw / ir; dy=(SKIN_H-dh)/2; }
      else { dh = SKIN_H; dw = dh * ir; dx=(SKIN_W-dw)/2; }
    }
    ctx.imageSmoothingEnabled = true;
    ctx.drawImage(img, dx, dy, dw, dh);

    const data = ctx.getImageData(0,0,SKIN_W,SKIN_H);
    apply(data);
    setStatus('Bild angewendet.');
  }

  return (
    <div className="neon-card p-4">
      <div className="text-lg font-semibold mb-2">Bild → Skin</div>
      <div className="flex items-center gap-2 mb-3">
        <label className="label">Modus</label>
        <select className="input" value={mode} onChange={e=>setMode(e.target.value as any)}>
          <option value="cover">Cover (füllend, ggf. Beschnitt)</option>
          <option value="contain">Contain (alles sichtbar, ggf. Ränder)</option>
        </select>
      </div>
      <input ref={fileRef} type="file" accept="image/*" className="hidden" onChange={e=>{ const f=e.target.files?.[0]; if(f) handleFile(f); e.currentTarget.value=''; }}/>
      <button className="btn" onClick={()=>fileRef.current?.click()}>Bild auswählen</button>
      {status && <p className="text-neon-100 text-xs mt-2">{status}</p>}
      <p className="text-neon-100 text-xs mt-2">Hinweis: Bild wird auf 64×64 skaliert.</p>
    </div>
  )
}