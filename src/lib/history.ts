export class UndoRedo<T> {
  private stack: T[] = []; private i = -1; private limit = 200;
  push(s: T) { if (this.i < this.stack.length-1) this.stack = this.stack.slice(0, this.i+1); this.stack.push(s); if (this.stack.length>this.limit) this.stack.shift(); this.i = this.stack.length-1; }
  canUndo(){ return this.i>0 } canRedo(){ return this.i < this.stack.length-1 }
  undo(): T | null { if (!this.canUndo()) return null; this.i--; return this.stack[this.i]; }
  redo(): T | null { if (!this.canRedo()) return null; this.i++; return this.stack[this.i]; }
}