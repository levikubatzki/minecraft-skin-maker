import { jsx as _jsx } from "react/jsx-runtime";
import { useEffect, useState } from "react";
export default function Toast({ text, onDone }) {
    const [show, setShow] = useState(true);
    useEffect(() => { const t = setTimeout(() => { setShow(false); onDone?.(); }, 1500); return () => clearTimeout(t); }, []);
    if (!show)
        return null;
    return (_jsx("div", { className: "fixed bottom-4 left-1/2 -translate-x-1/2 bg-cyber-panel border border-cyber-edge rounded-xl2 px-4 py-2 shadow-neon fade-in", children: _jsx("span", { className: "text-neon-100", children: text }) }));
}
