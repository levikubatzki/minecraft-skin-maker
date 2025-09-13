import React, { useEffect, useRef, useImperativeHandle, forwardRef } from "react";

const TextureCanvas = forwardRef<HTMLCanvasElement>((props, ref) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  // Externe Ref auf unser Canvas legen
  useImperativeHandle(ref, () => canvasRef.current as HTMLCanvasElement);

  useEffect(() => {
    const ctx = canvasRef.current?.getContext("2d");
    if (ctx) {
      ctx.fillStyle = "#aaa";
      ctx.fillRect(0, 0, 64, 64); // Default leeres Skin-Bild
    }
  }, []);

  return <canvas ref={canvasRef} width={64} height={64} className="border border-purple-500" />;
});

export default TextureCanvas;
