abstract class MinHeap<T> {
  abstract push(value: T): void;
  abstract pop(): T | undefined;
  abstract peek(): T | undefined;
  abstract size(): number;
  abstract isEmpty(): boolean;
}

class MinHeapImpl<T> implements MinHeap<T> {
  private heap: T[];

  constructor() {
    this.heap = [];
  }

  private getParentIndex(index: number): number {
    return Math.floor((index - 1) / 2);
  }

  private getLeftChildIndex(index: number): number {
    return 2 * index + 1;
  }

  private getRightChildIndex(index: number): number {
    return 2 * index + 2;
  }

  private swap(index1: number, index2: number): void {
    [this.heap[index1], this.heap[index2]] = [this.heap[index2], this.heap[index1]];
  }

  private bubbleUp(index: number): void {
    while (index > 0) {
      const parentIndex = this.getParentIndex(index);

      if (this.heap[parentIndex] <= this.heap[index]) break;
      this.swap(index, parentIndex);
      index = parentIndex;
    }
  }

  private bubbleDown(index: number): void {
    while (true) {
      let smallestIndex = index;
      const leftChild = this.getLeftChildIndex(index);
      const rightChild = this.getRightChildIndex(index);

      if (leftChild < this.heap.length && this.heap[leftChild] < this.heap[smallestIndex]) {
        smallestIndex = leftChild;
      }

      if (rightChild < this.heap.length && this.heap[rightChild] < this.heap[smallestIndex]) {
        smallestIndex = rightChild;
      }

      if (smallestIndex === index) break;

      this.swap(index, smallestIndex);
      index = smallestIndex;
    }
  }

  public push(value: T): void {
    this.heap.push(value);
    this.bubbleUp(this.heap.length - 1);
  }

  public pop(): T | undefined {
    if (this.heap.length === 0) return undefined;
    if (this.heap.length === 1) return this.heap.pop();

    const min = this.heap[0];
    this.heap[0] = this.heap.pop()!;
    this.bubbleDown(0);

    return min;
  }

  public peek(): T | undefined {
    return this.heap[0];
  }

  public size(): number {
    return this.heap.length;
  }

  public isEmpty(): boolean {
    return this.heap.length === 0;
  }
}

const minHeap = new MinHeapImpl<number>();
minHeap.push(5);
minHeap.push(3);
minHeap.push(7);
minHeap.push(1);

console.log(minHeap.pop()); // 1
console.log(minHeap.peek()); // 3
