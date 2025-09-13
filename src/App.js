import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useEffect, useRef, useState } from 'react';
import './styles.css';
import { UndoRedo } from './lib/history';
import { W, H, blank, clone, download, copyToClipboard, toBlob, loadPNGFromFile, makeDefaultSteve } from './lib/skin';
import Sidebar from './components/Sidebar';
import CanvasPro from './components/CanvasPro';
import Preview3D from './components/Preview3D';
export default function App() {
    const [tool, setTool] = useState('brush');
    const [color, setColor] = useState('#8A4DFF');
    const [size, setSize] = useState(2);
    const [mirror, setMirror] = useState(true);
    const [grid, setGrid] = useState(true);
    const [layer, setLayer] = useState('base');
    const [baseImg, setBaseImg] = useState(blank());
    const [overlayImg, setOverlayImg] = useState(blank());
    const hist = useRef(new UndoRedo());
    // hotkeys
    useEffect(() => {
        const onKey = (e) => {
            if (e.target && e.target.tagName === 'INPUT')
                return;
            if (e.key === 'b' || e.key === 'B')
                setTool('brush');
            if (e.key === 'e' || e.key === 'E')
                setTool('eraser');
            if (e.key === 'f' || e.key === 'F')
                setTool('fill');
            if (e.key === 'p' || e.key === 'P')
                setTool('picker');
            if (e.key === 'g' || e.key === 'G')
                setGrid(g => !g);
            if (e.key === 'm' || e.key === 'M')
                setMirror(m => !m);
            if (e.ctrlKey && e.key === 'z')
                undo();
            if (e.ctrlKey && e.key === 'y')
                redo();
        };
        window.addEventListener('keydown', onKey);
        return () => window.removeEventListener('keydown', onKey);
    }, []);
    // load default Steve-like on first mount
    useEffect(() => {
        const steve = makeDefaultSteve();
        setBaseImg(steve);
        snapshot(steve, overlayImg);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    function snapshot(b = baseImg, o = overlayImg) {
        hist.current.push({ base: clone(b), overlay: clone(o) });
    }
    function undo() { const s = hist.current.undo(); if (s) {
        setBaseImg(clone(s.base));
        setOverlayImg(clone(s.overlay));
    } }
    function redo() { const s = hist.current.redo(); if (s) {
        setBaseImg(clone(s.base));
        setOverlayImg(clone(s.overlay));
    } }
    // merge current layers onto a canvas and return blob
    async function getPNG() {
        const c = document.createElement('canvas');
        c.width = W;
        c.height = H;
        const ctx = c.getContext('2d');
        ctx.putImageData(baseImg, 0, 0);
        ctx.putImageData(overlayImg, 0, 0);
        return await toBlob(c);
    }
    async function importPNG(e) {
        const f = e.target.files?.[0];
        if (!f)
            return;
        const img = await loadPNGFromFile(f);
        snapshot();
        setBaseImg(img);
        e.currentTarget.value = '';
    }
    function exportPNG() { const c = document.createElement('canvas'); c.width = W; c.height = H; const ctx = c.getContext('2d'); ctx.putImageData(baseImg, 0, 0); ctx.putImageData(overlayImg, 0, 0); download(c, 'skin.png'); }
    async function copyPNG() { const c = document.createElement('canvas'); c.width = W; c.height = H; const ctx = c.getContext('2d'); ctx.putImageData(baseImg, 0, 0); ctx.putImageData(overlayImg, 0, 0); await copyToClipboard(c); }
    return (_jsxs("div", { className: "min-h-screen p-5", children: [_jsxs("header", { className: "mb-4", children: [_jsx("h1", { className: "text-2xl font-bold", style: { textShadow: '0 0 10px var(--glow)' }, children: "Minecraft Skin Maker \u2014 Pro" }), _jsx("p", { className: "text-neon-100", children: "Pixel-Editor \u00B7 Base/Overlay-Layer \u00B7 Mirror \u00B7 Grid \u00B7 3D Preview \u00B7 Import/Export" })] }), _jsxs("div", { className: "grid grid-cols-1 lg:grid-cols-12 gap-5", children: [_jsx("div", { className: "lg:col-span-3", children: _jsx(Sidebar, { tool: tool, setTool: setTool, color: color, setColor: setColor, size: size, setSize: setSize, mirror: mirror, setMirror: setMirror, grid: grid, setGrid: setGrid, layer: layer, setLayer: setLayer, onUndo: undo, onRedo: redo, canUndo: hist.current.canUndo(), canRedo: hist.current.canRedo() }) }), _jsxs("div", { className: "lg:col-span-6 flex flex-col gap-4", children: [_jsx(CanvasPro, { tool: tool, color: color, size: size, mirror: mirror, grid: grid, layer: layer, baseImg: baseImg, overlayImg: overlayImg, setBaseImg: setBaseImg, setOverlayImg: setOverlayImg, onSnapshot: snapshot }), _jsxs("div", { className: "neon-card p-3 flex flex-wrap gap-3 items-center", children: [_jsx("input", { id: "import", type: "file", accept: "image/png", className: "hidden", onChange: importPNG }), _jsx("label", { htmlFor: "import", className: "btn cursor-pointer", children: "Import PNG" }), _jsx("button", { className: "btn", onClick: exportPNG, children: "Download PNG" }), _jsx("button", { className: "btn-ghost", onClick: copyPNG, children: "Copy als Bild" }), _jsx("span", { className: "text-neon-100 text-xs", children: "Format: 64\u00D764" })] })] }), _jsx("div", { className: "lg:col-span-3", children: _jsx(Preview3D, { getPNG: getPNG }) })] }), _jsx("footer", { className: "text-center text-neon-100 text-xs mt-6", children: "Made for levikubatzki \u00B7 React + TS + skinview3d" })] }));
}
