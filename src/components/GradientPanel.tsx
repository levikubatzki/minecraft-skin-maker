import { GradientOptions } from "../types";

export default function GradientPanel({
  opt, setOpt, onApply, onRandom
}:{
  opt: GradientOptions,
  setOpt: (o: GradientOptions)=>void,
  onApply: ()=>void,
  onRandom: ()=>void
}) {
  return (
    <div className="neon-card p-4">
      <div className="text-lg font-semibold mb-2">Gradient</div>
      <div className="grid grid-cols-2 gap-3">
        <div>
          <label className="label">Start</label>
          <input className="input w-full" type="color" value={opt.start} onChange={e=>setOpt({...opt, start:e.target.value})}/>
        </div>
        <div>
          <label className="label">Ende</label>
          <input className="input w-full" type="color" value={opt.end} onChange={e=>setOpt({...opt, end:e.target.value})}/>
        </div>
        <div className="col-span-2">
          <label className="label">Winkel ({opt.angleDeg}°)</label>
          <input className="range w-full" type="range" min="0" max="359" value={opt.angleDeg} onChange={e=>setOpt({...opt, angleDeg:parseInt(e.target.value)})}/>
        </div>
        <div className="col-span-2 flex items-center gap-2">
          <input id="dither" type="checkbox" checked={opt.dither} onChange={e=>setOpt({...opt, dither:e.target.checked})}/>
          <label htmlFor="dither" className="label">Dithering</label>
        </div>
      </div>
      <div className="flex gap-2 mt-3">
        <button className="btn" onClick={onApply}>Auf Canvas anwenden</button>
        <button className="btn-ghost" onClick={onRandom}>Zufällig</button>
      </div>
    </div>
  )
}