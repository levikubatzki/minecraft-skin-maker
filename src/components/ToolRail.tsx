import { Tool } from '../types';

export default function ToolRail({ tool, setTool, onUndo, onRedo }:{ tool:Tool, setTool:(t:Tool)=>void, onUndo:()=>void, onRedo:()=>void }){
  const Btn=({t, icon}:{t:Tool| 'undo'|'redo', icon:string})=>(
    <button className={`tool ${tool===t?'ring-2 ring-neon-400':''}`} title={t as string}
      onClick={()=>{ if(t==='undo') onUndo(); else if(t==='redo') onRedo(); else setTool(t as Tool); }}>
      <span className="material">{icon}</span>
    </button>
  );
  return (
    <div className="tool-rail">
      <Btn t="brush" icon="🖌️" />
      <Btn t="eraser" icon="🩹" />
      <Btn t="fill" icon="🪣" />
      <Btn t="picker" icon="🎯" />
      <Btn t="hand" icon="✋" />
      <div className="h-px bg-cyber-edge my-1"></div>
      <Btn t="undo" icon="↶" />
      <Btn t="redo" icon="↷" />
    </div>
  );
}