import React, { useRef, useState } from "react";
import TextureCanvas from "./components/TextureCanvas";
import Viewer3D from "./components/Viewer3D";
import Toolbar from "./components/Toolbar";
import { applyGradient } from "./lib/gradient";
import { clone } from "./lib/skin";

function App() {
  const textureRef = useRef<HTMLCanvasElement>(null);

  // States
  const [tool, setTool] = useState("brush");
  const [color, setColor] = useState("#6b46c1"); // Standardfarbe: Lila/Neon
  const [history, setHistory] = useState<ImageData[]>([]);
  const [redoStack, setRedoStack] = useState<ImageData[]>([]);

  // Undo
  const undo = () => {
    if (!textureRef.current) return;
    if (history.length > 0) {
      const last = history[history.length - 1];
      const ctx = textureRef.current.getContext("2d");
      if (ctx) {
        ctx.putImageData(last, 0, 0);
        setRedoStack([clone(textureRef.current.getContext("2d")!.getImageData(0, 0, 64, 64)), ...redoStack]);
        setHistory(history.slice(0, -1));
      }
    }
  };

  // Redo
  const redo = () => {
    if (!textureRef.current) return;
    if (redoStack.length > 0) {
      const next = redoStack[0];
      const ctx = textureRef.current.getContext("2d");
      if (ctx) {
        ctx.putImageData(next, 0, 0);
        setHistory([...history, clone(next)]);
        setRedoStack(redoStack.slice(1));
      }
    }
  };

  // Gradient Beispiel
  const applyGradientToCanvas = () => {
    if (!textureRef.current) return;
    const ctx = textureRef.current.getContext("2d");
    if (!ctx) return;

    const img = ctx.getImageData(0, 0, 64, 64);
    const grad = applyGradient(img, {
      start: "#6b46c1",
      end: "#00f0ff",
      angleDeg: 45,
      dither: true,
    });
    ctx.putImageData(grad, 0, 0);
  };

  return (
    <div className="flex gap-4 p-4 bg-neutral-950 text-white min-h-screen">
      {/* Linke Seite: Toolbar + Canvas */}
      <div className="flex-1 flex flex-col gap-4">
        <Toolbar
          tool={tool}
          setTool={setTool}
          undo={undo}
          redo={redo}
          color={color}
          setColor={setColor}
        />

        <TextureCanvas
          ref={textureRef}
          tool={tool}
          color={color}
          onDraw={(img) => setHistory([...history, clone(img)])}
        />

        <button
          onClick={applyGradientToCanvas}
          className="mt-2 px-4 py-2 rounded-xl bg-purple-600 hover:bg-purple-700 transition"
        >
          🎨 Gradient anwenden
        </button>
      </div>

      {/* Rechte Seite: 3D-Vorschau */}
      <div className="w-[400px]">
        <Viewer3D canvas={textureRef.current || undefined} model="default" />
      </div>
    </div>
  );
}

export default App;
