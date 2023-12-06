function shuffle (arr) {
  let n, _array = [...arr]
  do {
    n = arr.length
    while (n) {
      let random = Math.floor(Math.random() * n)
      n--
      [_array[n], _array[random]] = [_array[random], _array[n]]
    }
  } while (_array.toString() === arr.toString())
  return _array
}
const arr = [1, 2, 3]
console.log(shuffle(arr));
// debugger