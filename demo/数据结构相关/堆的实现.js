class Heap {
  constructor({
    list = [],
    compare = (a, b) => a - b,
  }) {
    this.compare = compare;
    this.list = list;
    for (let i = Math.floor((this.list.length / 2) - 1); i >= 0; --i) {
      this.siftDown(i);
    }
  }
  size () {
    return this.list.length;
  }
  peek () {
    return this.list[0];
  }
  left (i) {
    return 2 * i + 1;
  }
  right (i) {
    return 2 * i + 2;
  }
  parent (i) {
    return Math.floor((i - 1) / 2)
  }
  checkIndex (i) {
    return i >= 0 && i < this.list.length;
  }
  swap (i, j) {
    const temp = this.list[i];
    this.list[i] = this.list[j];
    this.list[j] = temp;
  }
  siftUp (i) {
    const parentIndex = this.parent(i);
    if (this.checkIndex(parentIndex) && this.compare(this.list[i], this.list[parentIndex]) < 0) {
      this.swap(i, parentIndex);
      this.siftUp(parentIndex);
    }
  }
  siftDown (i) {
    let tempIndex = i, leftIndex = this.left(i), rightIndex = this.right(i);
    if (this.checkIndex(leftIndex) && this.compare(this.list[leftIndex], this.list[tempIndex]) < 0) {
      tempIndex = leftIndex;
    }
    if (this.checkIndex(rightIndex) && this.compare(this.list[rightIndex], this.list[tempIndex]) < 0) {
      tempIndex = rightIndex;
    }
    if (tempIndex !== i) {
      this.swap(tempIndex, i);
      this.siftDown(tempIndex);
    }
  }
  push (value) {
    this.list.push(value);
    this.siftUp(this.list.length - 1);
  }
  pop () {
    if (this.list.length > 1) {
      this.swap(0, this.list.length - 1);
    }
    if (this.list.length) {
      const res = this.list.pop();
      this.siftDown(0);
      return res;
    }
  }
}

// 创建一个堆实例
let heap = new Heap({ list: [3, 2, 1], compare: (a, b) => a - b });

// 测试size方法
console.log(heap.size()); // 输出：3
debugger
console.log(heap.list);

// 测试peek方法
console.log(heap.peek()); // 输出：1
console.log(heap.list);

// 测试push方法
heap.push(0);
console.log(heap.list);
console.log(heap.peek()); // 输出：0
console.log(heap.list);

debugger
// 测试pop方法
console.log(heap.pop()); // 输出：0
console.log(heap.list);
console.log(heap.peek()); // 输出：1
console.log(heap.list);
