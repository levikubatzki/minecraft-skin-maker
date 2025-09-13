import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useRef, useState } from "react";
import { SKIN_W, SKIN_H } from "../lib/skin";
export default function ImageToSkin({ apply }) {
    const [mode, setMode] = useState('cover');
    const [status, setStatus] = useState('');
    const fileRef = useRef(null);
    async function handleFile(file) {
        setStatus('Bild laden ...');
        const url = URL.createObjectURL(file);
        const img = new Image();
        await new Promise((res, rej) => { img.onload = () => res(); img.onerror = rej; img.src = url; });
        URL.revokeObjectURL(url);
        const c = document.createElement('canvas');
        c.width = SKIN_W;
        c.height = SKIN_H;
        const ctx = c.getContext('2d');
        ctx.clearRect(0, 0, SKIN_W, SKIN_H);
        const ir = img.width / img.height;
        const tr = SKIN_W / SKIN_H;
        let dw = SKIN_W, dh = SKIN_H, dx = 0, dy = 0;
        if (mode === 'cover') {
            if (ir > tr) {
                dh = SKIN_H;
                dw = dh * ir;
                dx = (SKIN_W - dw) / 2;
            }
            else {
                dw = SKIN_W;
                dh = dw / ir;
                dy = (SKIN_H - dh) / 2;
            }
        }
        else {
            if (ir > tr) {
                dw = SKIN_W;
                dh = dw / ir;
                dy = (SKIN_H - dh) / 2;
            }
            else {
                dh = SKIN_H;
                dw = dh * ir;
                dx = (SKIN_W - dw) / 2;
            }
        }
        ctx.imageSmoothingEnabled = true;
        ctx.drawImage(img, dx, dy, dw, dh);
        const data = ctx.getImageData(0, 0, SKIN_W, SKIN_H);
        apply(data);
        setStatus('Bild angewendet.');
    }
    return (_jsxs("div", { className: "neon-card p-4", children: [_jsx("div", { className: "text-lg font-semibold mb-2", children: "Bild \u2192 Skin" }), _jsxs("div", { className: "flex items-center gap-2 mb-3", children: [_jsx("label", { className: "label", children: "Modus" }), _jsxs("select", { className: "input", value: mode, onChange: e => setMode(e.target.value), children: [_jsx("option", { value: "cover", children: "Cover (f\u00FCllend, ggf. Beschnitt)" }), _jsx("option", { value: "contain", children: "Contain (alles sichtbar, ggf. R\u00E4nder)" })] })] }), _jsx("input", { ref: fileRef, type: "file", accept: "image/*", className: "hidden", onChange: e => { const f = e.target.files?.[0]; if (f)
                    handleFile(f); e.currentTarget.value = ''; } }), _jsx("button", { className: "btn", onClick: () => fileRef.current?.click(), children: "Bild ausw\u00E4hlen" }), status && _jsx("p", { className: "text-neon-100 text-xs mt-2", children: status }), _jsx("p", { className: "text-neon-100 text-xs mt-2", children: "Hinweis: Bild wird auf 64\u00D764 skaliert." })] }));
}
