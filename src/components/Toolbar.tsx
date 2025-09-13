import React from "react";
import { Undo2, Redo2, Brush, Eraser, Droplet, Square } from "lucide-react";

interface ToolbarProps {
  tool: string;
  setTool: (t: string) => void;
  undo: () => void;
  redo: () => void;
  color: string;
  setColor: (c: string) => void;
}

const Toolbar: React.FC<ToolbarProps> = ({ tool, setTool, undo, redo, color, setColor }) => {
  return (
    <div className="flex items-center gap-3 p-3 bg-neutral-900 text-white rounded-2xl shadow-lg border border-purple-500/40">
      
      {/* Tools */}
      <button
        onClick={() => setTool("brush")}
        className={`p-2 rounded-xl ${tool === "brush" ? "bg-purple-600" : "bg-neutral-800 hover:bg-neutral-700"}`}
      >
        <Brush size={18} />
      </button>

      <button
        onClick={() => setTool("eraser")}
        className={`p-2 rounded-xl ${tool === "eraser" ? "bg-purple-600" : "bg-neutral-800 hover:bg-neutral-700"}`}
      >
        <Eraser size={18} />
      </button>

      <button
        onClick={() => setTool("fill")}
        className={`p-2 rounded-xl ${tool === "fill" ? "bg-purple-600" : "bg-neutral-800 hover:bg-neutral-700"}`}
      >
        <Square size={18} />
      </button>

      <button
        onClick={() => setTool("picker")}
        className={`p-2 rounded-xl ${tool === "picker" ? "bg-purple-600" : "bg-neutral-800 hover:bg-neutral-700"}`}
      >
        <Droplet size={18} />
      </button>

      {/* Farbe */}
      <input
        type="color"
        value={color}
        onChange={(e) => setColor(e.target.value)}
        className="ml-3 w-8 h-8 rounded-full border-none cursor-pointer"
      />

      {/* Undo / Redo */}
      <div className="flex gap-2 ml-auto">
        <button
          onClick={undo}
          className="p-2 rounded-xl bg-neutral-800 hover:bg-neutral-700"
        >
          <Undo2 size={18} />
        </button>
        <button
          onClick={redo}
          className="p-2 rounded-xl bg-neutral-800 hover:bg-neutral-700"
        >
          <Redo2 size={18} />
        </button>
      </div>
    </div>
  );
};

export default Toolbar;
