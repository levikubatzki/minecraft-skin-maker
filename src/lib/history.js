export class UndoRedo {
    constructor() {
        this.stack = [];
        this.i = -1;
        this.limit = 200;
    }
    push(s) { if (this.i < this.stack.length - 1)
        this.stack = this.stack.slice(0, this.i + 1); this.stack.push(s); if (this.stack.length > this.limit)
        this.stack.shift(); this.i = this.stack.length - 1; }
    canUndo() { return this.i > 0; }
    canRedo() { return this.i < this.stack.length - 1; }
    undo() { if (!this.canUndo())
        return null; this.i--; return this.stack[this.i]; }
    redo() { if (!this.canRedo())
        return null; this.i++; return this.stack[this.i]; }
}
