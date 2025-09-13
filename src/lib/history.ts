import { HistoryEntry } from '../types';

export class UndoRedo {
  private stack: HistoryEntry[] = [];
  private index = -1;
  private limit = 200;

  push(state: HistoryEntry) {
    if (this.index < this.stack.length - 1) {
      this.stack = this.stack.slice(0, this.index + 1);
    }
    this.stack.push(state);
    if (this.stack.length > this.limit) this.stack.shift();
    this.index = this.stack.length - 1;
  }
  canUndo() { return this.index > 0; }
  canRedo() { return this.index < this.stack.length - 1; }
  undo(): HistoryEntry | null { if (!this.canUndo()) return null; this.index--; return this.stack[this.index]; }
  redo(): HistoryEntry | null { if (!this.canRedo()) return null; this.index++; return this.stack[this.index]; }
}