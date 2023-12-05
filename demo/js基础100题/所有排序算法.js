//冒泡排序
let arr = [2, 3, 1, 4, 5, 7, 6]
function bubbleSort () {
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] > arr[j]) {
        [arr[i], arr[j]] = [arr[j], arr[i]]
      }
    }
  }
  console.log(arr);
}
// bubbleSort()
//选择排序
function selectionSort () {
  for (let i = 0; i < arr.length; i++) {
    let min = i
    for (let j = i + 1; j < arr.length; j++) {
      min = arr[j] < arr[min] ? j : min
    }
    [arr[i], arr[min]] = [arr[min], arr[i]]
  }
  console.log(arr);
}
// selectionSort()
//插入排序 失败一次
function insertionSort () {
  for (let i = 1; i < arr.length; ++i) {
    let value = arr[i];
    let position = i;
    while (position > 0 && value < arr[position - 1]) {
      arr[position] = arr[position - 1];
      position--;
    }
    arr[position] = value;
  }
  console.log(arr);
}
// insertionSort()
//归并排序
