import ColorWheel from './ColorWheel';

export default function RightPanel({
  color, setColor, size, setSize, mirror, setMirror, grid, setGrid,
  onImport, onExport, onCopy
}:{
  color:string; setColor:(c:string)=>void;
  size:number; setSize:(n:number)=>void;
  mirror:boolean; setMirror:(b:boolean)=>void;
  grid:boolean; setGrid:(b:boolean)=>void;
  onImport:(f:File)=>void; onExport:()=>void; onCopy:()=>void;
}){
  function handleFile(e: React.ChangeEvent<HTMLInputElement>){
    const f=e.target.files?.[0]; if(f) onImport(f); e.currentTarget.value='';
  }
  return (
    <div className="fixed right-4 top-20 w-[280px] flex flex-col gap-3">
      <div className="neon-card p-3">
        <div className="font-semibold mb-2">Farbe</div>
        <ColorWheel color={color} onChange={setColor} />
        <div className="flex items-center gap-2 mt-3">
          <span className="label">Aktuell</span>
          <input className="input" type="color" value={color} onChange={e=>setColor(e.target.value)} />
          <span className="text-xs">{color}</span>
        </div>
        <div className="mt-3">
          <label className="label">Pinselgröße: {size}px</label>
          <input className="w-full" type="range" min={1} max={12} value={size} onChange={e=>setSize(parseInt(e.target.value))}/>
        </div>
        <div className="flex items-center gap-3 mt-2">
          <label className="label flex items-center gap-2"><input type="checkbox" checked={mirror} onChange={e=>setMirror(e.target.checked)}/> Mirror</label>
          <label className="label flex items-center gap-2"><input type="checkbox" checked={grid} onChange={e=>setGrid(e.target.checked)}/> Grid</label>
        </div>
      </div>

      <div className="neon-card p-3">
        <div className="font-semibold mb-2">Import / Export</div>
        <input id="file" type="file" accept="image/png" className="hidden" onChange={handleFile}/>
        <label htmlFor="file" className="btn cursor-pointer">Import PNG</label>
        <div className="flex gap-2 mt-2">
          <button className="btn" onClick={onExport}>Download</button>
          <button className="btn-ghost" onClick={onCopy}>Copy</button>
        </div>
      </div>
    </div>
  );
}