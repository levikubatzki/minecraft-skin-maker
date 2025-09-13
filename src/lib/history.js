export class UndoRedo {
    constructor() {
        this.stack = [];
        this.index = -1;
        this.limit = 200;
    }
    push(state) {
        if (this.index < this.stack.length - 1) {
            this.stack = this.stack.slice(0, this.index + 1);
        }
        this.stack.push(state);
        if (this.stack.length > this.limit)
            this.stack.shift();
        this.index = this.stack.length - 1;
    }
    canUndo() { return this.index > 0; }
    canRedo() { return this.index < this.stack.length - 1; }
    undo() { if (!this.canUndo())
        return null; this.index--; return this.stack[this.index]; }
    redo() { if (!this.canRedo())
        return null; this.index++; return this.stack[this.index]; }
}
