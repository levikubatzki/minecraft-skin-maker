import { Tool } from "../types";

interface Props {
  tool: Tool;
  setTool: (t: Tool)=>void;
  color: string;
  setColor: (c: string)=>void;
  size: number;
  setSize: (n: number)=>void;
  onUndo: ()=>void;
  onRedo: ()=>void;
  canUndo: boolean;
  canRedo: boolean;
}

export default function Toolbar(p: Props) {
  const Btn = ({name, active, onClick}:{name:string, active:boolean, onClick:()=>void}) => (
    <button className={`btn-ghost ${active ? 'ring-2 ring-neon-400' : ''}`} onClick={onClick} title={name}>{name}</button>
  );
  return (
    <div className="flex items-center gap-2 flex-wrap">
      <Btn name="Brush" active={p.tool==='brush'} onClick={()=>p.setTool('brush')} />
      <Btn name="Eraser" active={p.tool==='eraser'} onClick={()=>p.setTool('eraser')} />
      <Btn name="Fill" active={p.tool==='fill'} onClick={()=>p.setTool('fill')} />
      <Btn name="Picker" active={p.tool==='picker'} onClick={()=>p.setTool('picker')} />
      <div className="flex items-center gap-2 ml-2">
        <label className="label">Farbe</label>
        <input className="input" type="color" value={p.color} onChange={e=>p.setColor(e.target.value)} />
      </div>
      <div className="flex items-center gap-2 ml-2">
        <label className="label">Größe</label>
        <input className="range" type="range" min={1} max={16} value={p.size} onChange={e=>p.setSize(parseInt(e.target.value))}/>
        <span className="text-neon-100 w-8 text-center">{p.size}</span>
      </div>
      <button className="btn ml-2" onClick={p.onUndo} disabled={!p.canUndo}>Undo</button>
      <button className="btn" onClick={p.onRedo} disabled={!p.canRedo}>Redo</button>
    </div>
  )
}