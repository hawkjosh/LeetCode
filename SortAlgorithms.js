const sort = () => {
  const swap = (arr, idx1, idx2) => {
    [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]]
  }
  const bubbleSort = (arr) => {
    for (let i = 0; i < arr.length - 1; i++) {
      for (let j = i + 1; j < arr.length; j++) {
        arr[j] < arr[i] ? swap(arr, i, j) : null
      }
    }
    return arr
  }
  const selectionSort = (arr) => {
    for (let i = 0; i < arr.length - 1; i++) {
      let low = i, j = i + 1
      while (j < arr.length) {
        arr[low] > arr[j] ? low = j : null
        j++
      }
      i !== low ? [arr[i], arr[low]] = [arr[low], arr[i]] : null
    }
    return arr
  }
  const insertionSort = (arr) => {
    for (let i = 1; i < arr.length; i++) {
      let currVal = arr[i], j = i - 1
      while (arr[j] > currVal && j >= 0) {
        arr[j + 1] = arr[j]
        j--
      }
      arr[j + 1] = currVal
    }
    return arr
  }
  return {bubbleSort, selectionSort, insertionSort}
}

console.log(sort().bubbleSort([3, 6, 5, -6, 8])) // [-6, 3, 5, 6, 8]
console.log(sort().selectionSort([3, 6, 5, -6, 8])) // [-6, 3, 5, 6, 8]
console.log(sort().insertionSort([3, 6, 5, -6, 8])) // [-6, 3, 5, 6, 8]
console.log(sort().bubbleSort([10, -1, 7, -6, -7, 0, -9, 10, -17, 13])) // [-17, -9, -7, -6, -1, 0, 7, 10, 10, 13]
console.log(sort().selectionSort([10, -1, 7, -6, -7, 0, -9, 10, -17, 13])) // [-17, -9, -7, -6, -1, 0, 7, 10, 10, 13]
console.log(sort().insertionSort([10, -1, 7, -6, -7, 0, -9, 10, -17, 13])) // [-17, -9, -7, -6, -1, 0, 7, 10, 10, 13]
