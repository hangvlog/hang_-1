class Heap {
  // 默认最小堆
  constructor(list = [], compare = (a, b) => a - b) {
    this.list = list
    this.compare = compare
    // 进行堆化
  }
  getSize () {
    return this.list.length
  }
  checkIndex (i) {
    return i >= 0 && i < this.list.length
  }
  swap (i, j) {
    [this.list[i], this.list[j]] = [this.list[j], this.list[i]]
  }
  getParentIndex (i) {
    return Math.floor(i / 2)
  }
  getLeftIndex (i) {
    return 2 * i + 1;
  }
  getRightIndex (i) {
    return 2 * i + 2;
  }
  push (value) {
    this.list.push(value)
    this.siftUp(this.list.length - 1)
  }
  pop () {
    if (this.list.length <= 1) {
      return this.list.pop()
    }
    this.swap(0, this.list.length - 1)
    let ans = this.list.pop()
    this.siftDown(0)
    return ans
  }
  siftUp (i) {
    let parentIndex = this.getParentIndex(i)
    if (parentIndex !== i && this.compare(this.list[parentIndex], this.list[i]) > 0) {
      this.swap(i, parentIndex)
      this.siftUp(parentIndex)
    }
  }
  siftDown (i) {
    let tempIndex = i, leftIndex = this.getLeftIndex(i), rightIndex = this.getRightIndex(i)
    const temp = this.compare(this.list[tempIndex], this.list[leftIndex])
    let tmp1 = this.checkIndex(leftIndex)
    if (this.checkIndex(leftIndex) && (this.compare(this.list[tempIndex], this.list[leftIndex]) > 0)) {
      tempIndex = leftIndex
    }
    if (this.checkIndex(rightIndex) && this.compare(this.list[tempIndex], this.list[rightIndex]) > 0) {
      tempIndex = rightIndex
    }
    if (tempIndex !== i){
      this.swap(i,tempIndex)
      this.siftDown(tempIndex)
    }
  }

}
// 测试push()
function test01 () {
  let heap = new Heap()
  heap.push(3)
  console.log(heap.list);

  heap.push(2)
  console.log(heap.list);

  heap.push(4)
  console.log(heap.list);

  heap.push(1)
  console.log(heap.list);
}
// test01()

// 测试pop()
function test02 () {
  let heap = new Heap()
  heap.push(3)

  heap.push(2)

  heap.push(4)

  heap.push(1)
  console.log(heap.list);

  heap.pop()
  console.log(heap.list);
}
test02()