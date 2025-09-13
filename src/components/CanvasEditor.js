import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useEffect, useRef } from "react";
import { floodFill } from "../lib/floodFill";
export default function CanvasEditor({ tool, color, size, onSnapshot, getImageData, setImageData }) {
    const canvasRef = useRef(null);
    useEffect(() => {
        const c = canvasRef.current;
        c.width = 64;
        c.height = 64;
    }, []);
    function handleMouse(e) {
        if (e.buttons !== 1)
            return;
        const c = canvasRef.current;
        const rect = c.getBoundingClientRect();
        const x = Math.floor(((e.clientX - rect.left) / rect.width) * c.width);
        const y = Math.floor(((e.clientY - rect.top) / rect.height) * c.height);
        const img = getImageData();
        if (tool === "brush") {
            drawCircle(img, x, y, size, hexToRgba(color));
        }
        else if (tool === "eraser") {
            drawCircle(img, x, y, size, [0, 0, 0, 0]);
        }
        else if (tool === "fill") {
            floodFill(img, x, y, hexToRgba(color));
        }
        else if (tool === "picker") {
            const i = (y * img.width + x) * 4;
            const r = img.data[i], g = img.data[i + 1], b = img.data[i + 2], a = img.data[i + 3];
            if (a > 0) {
                const hex = rgbToHex(r, g, b);
                window.dispatchEvent(new CustomEvent("skin-picker", { detail: hex }));
            }
        }
        setImageData(img);
    }
    return (_jsxs("div", { className: "neon-card p-2", children: [_jsx("canvas", { ref: canvasRef, className: "w-full h-auto border border-cyber-edge rounded-xl2 grid-bg", style: { imageRendering: "pixelated", cursor: tool === "picker" ? "crosshair" : "default" }, onMouseDown: (e) => { onSnapshot(); handleMouse(e); }, onMouseMove: handleMouse }), _jsx("p", { className: "text-neon-100 text-xs mt-2", children: "Editor-Canvas (64\u00D764 Pixel, zoombar im Browser vergr\u00F6\u00DFern)" })] }));
}
function hexToRgba(hex) {
    const s = hex.replace("#", "");
    const v = s.length === 3 ? s.split("").map(c => c + c).join("") : s;
    const n = parseInt(v, 16);
    return [(n >> 16) & 255, (n >> 8) & 255, n & 255, 255];
}
function rgbToHex(r, g, b) {
    return "#" + [r, g, b].map(x => x.toString(16).padStart(2, "0")).join("");
}
function drawCircle(img, cx, cy, radius, color) {
    for (let y = -radius; y <= radius; y++) {
        for (let x = -radius; x <= radius; x++) {
            if (x * x + y * y <= radius * radius) {
                const px = cx + x, py = cy + y;
                if (px >= 0 && px < img.width && py >= 0 && py < img.height) {
                    const i = (py * img.width + px) * 4;
                    img.data[i] = color[0];
                    img.data[i + 1] = color[1];
                    img.data[i + 2] = color[2];
                    img.data[i + 3] = color[3];
                }
            }
        }
    }
}
