import { Layer, Tool } from '../types';

export default function Sidebar({
  tool, setTool,
  color, setColor,
  size, setSize,
  mirror, setMirror,
  grid, setGrid,
  layer, setLayer,
  onUndo, onRedo,
  canUndo, canRedo
}:{
  tool: Tool; setTool:(t:Tool)=>void;
  color:string; setColor:(c:string)=>void;
  size:number; setSize:(n:number)=>void;
  mirror:boolean; setMirror:(b:boolean)=>void;
  grid:boolean; setGrid:(b:boolean)=>void;
  layer: Layer; setLayer:(l:Layer)=>void;
  onUndo:()=>void; onRedo:()=>void; canUndo:boolean; canRedo:boolean;
}){
  const Btn = ({name, active, onClick}:{name:string,active:boolean,onClick:()=>void}) => (
    <button className={`btn-ghost ${active ? 'ring-2 ring-neon-400' : ''}`} onClick={onClick}>{name}</button>
  );
  const swatches = ['#000000','#FFFFFF','#C58C5A','#8A4DFF','#6F2BFF','#3AA3A3','#7AA1FF','#FF5555','#FFD166','#06D6A0','#118AB2'];
  return (
    <div className="toolbar">
      <div>
        <div className="font-semibold mb-2">Werkzeuge</div>
        <div className="flex flex-wrap gap-2">
          <Btn name="Brush (B)" active={tool==='brush'} onClick={()=>setTool('brush')} />
          <Btn name="Eraser (E)" active={tool==='eraser'} onClick={()=>setTool('eraser')} />
          <Btn name="Fill (F)" active={tool==='fill'} onClick={()=>setTool('fill')} />
          <Btn name="Picker (P)" active={tool==='picker'} onClick={()=>setTool('picker')} />
        </div>
      </div>

      <div className="flex items-center gap-2">
        <label className="label">Farbe</label>
        <input className="input" type="color" value={color} onChange={e=>setColor(e.target.value)} />
        <div className="flex gap-1">{swatches.map(s=>(
          <button key={s} className="w-6 h-6 rounded-xl2 border border-cyber-edge" style={{background:s}} onClick={()=>setColor(s)}></button>
        ))}</div>
      </div>

      <div>
        <label className="label">Pinselgröße: {size}px</label>
        <input className="range" type="range" min={1} max={12} value={size} onChange={e=>setSize(parseInt(e.target.value))}/>
      </div>

      <div className="flex items-center gap-2">
        <input id="mirror" type="checkbox" checked={mirror} onChange={e=>setMirror(e.target.checked)} />
        <label htmlFor="mirror" className="label">Spiegeln L↔R (M)</label>
      </div>
      <div className="flex items-center gap-2">
        <input id="grid" type="checkbox" checked={grid} onChange={e=>setGrid(e.target.checked)} />
        <label htmlFor="grid" className="label">Grid (G)</label>
      </div>

      <div className="flex items-center gap-2">
        <span className="label">Layer</span>
        <button className={`btn-ghost ${layer==='base'?'ring-2 ring-neon-400':''}`} onClick={()=>setLayer('base')}>Base</button>
        <button className={`btn-ghost ${layer==='overlay'?'ring-2 ring-neon-400':''}`} onClick={()=>setLayer('overlay')}>Overlay</button>
      </div>

      <div className="flex gap-2">
        <button className="btn" onClick={onUndo} disabled={!canUndo}>Undo (Ctrl+Z)</button>
        <button className="btn" onClick={onRedo} disabled={!canRedo}>Redo (Ctrl+Y)</button>
      </div>

      <div className="text-neon-100 text-xs">
        Hotkeys: <span className="hotkey">B</span> <span className="hotkey">E</span> <span className="hotkey">F</span> <span className="hotkey">P</span> ·
        <span className="hotkey">G</span> Grid · <span className="hotkey">M</span> Mirror · <span className="hotkey">+</span>/<span className="hotkey">-</span> Zoom
      </div>
    </div>
  );
}