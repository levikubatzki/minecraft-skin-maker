export class UndoRedo {
    constructor() {
        this.s = [];
        this.i = -1;
        this.limit = 250;
    }
    push(x) { if (this.i < this.s.length - 1)
        this.s = this.s.slice(0, this.i + 1); this.s.push(x); if (this.s.length > this.limit)
        this.s.shift(); this.i = this.s.length - 1; }
    canUndo() { return this.i > 0; }
    canRedo() { return this.i < this.s.length - 1; }
    undo() { if (!this.canUndo())
        return null; this.i--; return this.s[this.i]; }
    redo() { if (!this.canRedo())
        return null; this.i++; return this.s[this.i]; }
}
