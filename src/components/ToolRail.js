import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
export default function ToolRail({ tool, setTool, onUndo, onRedo }) {
    const Btn = ({ t, icon }) => (_jsx("button", { className: `tool ${tool === t ? 'ring-2 ring-neon-400' : ''}`, title: t, onClick: () => { if (t === 'undo')
            onUndo();
        else if (t === 'redo')
            onRedo();
        else
            setTool(t); }, children: _jsx("span", { className: "material", children: icon }) }));
    return (_jsxs("div", { className: "tool-rail", children: [_jsx(Btn, { t: "brush", icon: "\uD83D\uDD8C\uFE0F" }), _jsx(Btn, { t: "eraser", icon: "\uD83E\uDE79" }), _jsx(Btn, { t: "fill", icon: "\uD83E\uDEA3" }), _jsx(Btn, { t: "picker", icon: "\uD83C\uDFAF" }), _jsx(Btn, { t: "hand", icon: "\u270B" }), _jsx("div", { className: "h-px bg-cyber-edge my-1" }), _jsx(Btn, { t: "undo", icon: "\u21B6" }), _jsx(Btn, { t: "redo", icon: "\u21B7" })] }));
}
