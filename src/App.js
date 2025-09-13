import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useEffect, useRef, useState } from "react";
import "./styles.css";
import Toolbar from "./components/Toolbar";
import GradientPanel from "./components/GradientPanel";
import CanvasEditor from "./components/CanvasEditor";
import Preview3D from "./components/Preview3D";
import Toast from "./components/Toast";
import ImageToSkin from "./components/ImageToSkin";
import { UndoRedo } from "./lib/history";
import { SKIN_W, SKIN_H, createEmptySkin, downloadCanvasPNG, loadSkinFromFile, copyCanvasToClipboard, imageDataFromCanvas, putImageDataToCanvas } from "./lib/skin";
import { applyGradientToImageData } from "./lib/gradient";
export default function App() {
    const [tool, setTool] = useState('brush');
    const [color, setColor] = useState('#8A4DFF');
    const [size, setSize] = useState(4);
    const [toast, setToast] = useState(null);
    const [gopt, setGopt] = useState({ start: '#6F2BFF', end: '#C5A3FF', angleDeg: 315, dither: true });
    const baseCanvasRef = useRef(null);
    const hist = useRef(new UndoRedo());
    useEffect(() => {
        const c = baseCanvasRef.current;
        c.width = SKIN_W;
        c.height = SKIN_H;
        const ctx = c.getContext('2d');
        const img = createEmptySkin();
        ctx.putImageData(img, 0, 0);
        snapshot();
    }, []);
    useEffect(() => {
        const onPick = (e) => {
            // @ts-ignore
            setColor(e.detail);
            setTool('brush');
            setToast('Farbe übernommen');
        };
        window.addEventListener('skin-picker', onPick);
        return () => window.removeEventListener('skin-picker', onPick);
    }, []);
    function getImageData() { return imageDataFromCanvas(baseCanvasRef.current); }
    function setImageData(img) { putImageDataToCanvas(baseCanvasRef.current, img); }
    function snapshot() {
        const img = getImageData();
        const clone = new ImageData(new Uint8ClampedArray(img.data), img.width, img.height);
        hist.current.push(clone);
    }
    function undo() { const prev = hist.current.undo(); if (prev) {
        setImageData(prev);
        setToast('Undo');
    } }
    function redo() { const nxt = hist.current.redo(); if (nxt) {
        setImageData(nxt);
        setToast('Redo');
    } }
    function applyGradient() {
        snapshot();
        const img = getImageData();
        applyGradientToImageData(img, gopt);
        setImageData(img);
        setToast('Gradient angewendet');
    }
    function randomGradient() {
        const randHex = () => '#' + Math.floor(Math.random() * 0xffffff).toString(16).padStart(6, '0');
        setGopt(g => ({ ...g, start: randHex(), end: randHex(), angleDeg: Math.floor(Math.random() * 360) }));
    }
    async function handleImport(e) {
        const f = e.target.files?.[0];
        if (!f)
            return;
        const img = await loadSkinFromFile(f);
        snapshot();
        const c = baseCanvasRef.current;
        const ctx = c.getContext('2d');
        const off = document.createElement('canvas');
        off.width = SKIN_W;
        off.height = SKIN_H;
        const octx = off.getContext('2d');
        octx.clearRect(0, 0, SKIN_W, SKIN_H);
        octx.drawImage(img, 0, 0, SKIN_W, SKIN_H);
        const data = octx.getImageData(0, 0, SKIN_W, SKIN_H);
        ctx.putImageData(data, 0, 0);
        setToast('Skin importiert');
        e.currentTarget.value = '';
    }
    function download() { downloadCanvasPNG(baseCanvasRef.current, 'skin.png'); }
    async function copyToClipboard() { await copyCanvasToClipboard(baseCanvasRef.current); setToast('Als Bild in Zwischenablage kopiert'); }
    async function getPNGBlob() {
        const canvas = baseCanvasRef.current;
        return await new Promise(r => canvas.toBlob(b => r(b), 'image/png')).then(b => b);
    }
    function applyImageData(img) {
        snapshot();
        setImageData(img);
        setToast('Bild auf Canvas angewendet');
    }
    return (_jsxs("div", { className: "min-h-screen p-6", children: [_jsxs("header", { className: "mb-6", children: [_jsx("h1", { className: "text-3xl font-bold tracking-wide", style: { textShadow: '0 0 10px var(--glow)' }, children: "Minecraft Skin Maker \u2014 Neon" }), _jsx("p", { className: "text-neon-100", children: "Gradient \u00B7 Malen \u00B7 Undo/Redo \u00B7 3D-Vorschau \u00B7 Import/Export \u00B7 Bild\u2192Skin" })] }), _jsxs("div", { className: "grid grid-cols-1 lg:grid-cols-3 gap-6", children: [_jsxs("div", { className: "lg:col-span-2 flex flex-col gap-4", children: [_jsx("div", { className: "neon-card p-4", children: _jsx(Toolbar, { tool: tool, setTool: setTool, color: color, setColor: setColor, size: size, setSize: setSize, onUndo: undo, onRedo: redo, canUndo: hist.current.canUndo(), canRedo: hist.current.canRedo() }) }), _jsx(CanvasEditor, { tool: tool, color: color, size: size, onSnapshot: snapshot, getImageData: getImageData, setImageData: setImageData }), _jsxs("div", { className: "neon-card p-4 flex flex-wrap gap-3 items-center", children: [_jsx("input", { id: "import", type: "file", accept: "image/png", className: "hidden", onChange: handleImport }), _jsx("label", { htmlFor: "import", className: "btn cursor-pointer", children: "Import PNG" }), _jsx("button", { className: "btn", onClick: download, children: "Download PNG" }), _jsx("button", { className: "btn-ghost", onClick: copyToClipboard, children: "Copy als Bild" }), _jsx("span", { className: "text-neon-100 text-sm", children: "Format: 64\u00D764 PNG" })] })] }), _jsxs("div", { className: "flex flex-col gap-4", children: [_jsx(GradientPanel, { opt: gopt, setOpt: setGopt, onApply: applyGradient, onRandom: randomGradient }), _jsx(ImageToSkin, { apply: applyImageData }), _jsx(Preview3D, { getPNG: getPNGBlob }), _jsxs("div", { className: "neon-card p-3", children: [_jsx("canvas", { ref: baseCanvasRef, className: "w-full rounded-xl2 border border-cyber-edge", style: { imageRendering: 'pixelated' } }), _jsx("p", { className: "text-xs text-neon-100 mt-2", children: "Basis-Canvas (64\u00D764). Wird live in 3D \u00FCbernommen." })] })] })] }), toast && _jsx(Toast, { text: toast, onDone: () => setToast(null) }), _jsxs("footer", { className: "mt-8 text-center text-neon-100 text-xs", children: ["Made for ", _jsx("span", { className: "text-neon-300 font-semibold", children: "levikubatzki" }), " \u00B7 React + TS \u00B7 skinview3d"] })] }));
}
