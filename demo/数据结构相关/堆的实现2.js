class Heap {
  constructor(n) {
    this.a = new Array(n); // 存储堆的数组，从下标 1 开始存储数据
    this.n = n; // 堆可以存储的最大数据个数
    this.count = 0; // 堆中已经存储的数据个数
  }

  insert(data) {
    // 堆满直接返回
    if (this.count >= this.n) return;
    // 为了最大性能的存储堆，并保证堆中节点与数组下标的关系，我们从下标 1 开始存储数据，所以这里是 ++count
    ++this.count;
    // 从数组末尾插入，然后开始堆化（heapify），这里是最大堆，我们从下往上堆化
    // 堆化的过程就是：用当前节点与父节点做比较，大于父节点就交换，直到小于父节点为止
    this.a[this.count] = data;
    var i = this.count;
    while (i / 2 > 0 && this.a[i] > this.a[Math.floor(i / 2)]) {
      swap(this.a, i, Math.floor(i / 2));
      i = Math.floor(i / 2);
    }
  }
}

// 交换数组 a 中下标为 i 和 j 的元素
function swap(a, i, j) {
  var temp = a[i];
  a[i] = a[j];
  a[j] = temp;
}

const heap = new Heap(20)
heap.insert(1)
console.log(heap.a);
debugger
heap.insert(2)
console.log(heap.a);

heap.insert(3)
console.log(heap.a);