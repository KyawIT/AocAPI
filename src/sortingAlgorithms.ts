/*QuickSort
/*QuickSort is often a good choice for general-purpose sorting. 
It has an average-case time complexity of O(n log n) and is often faster in practice than other O(n log n) algorithms like MergeSort.*/

export function QuickSort(arr: number[]): number[] {
  if (arr.length <= 1) {
    return arr;
  }

  const pivot = arr[Math.floor(arr.length / 2)];
  const left = arr.filter((el) => el < pivot);
  const middle = arr.filter((el) => el === pivot);
  const right = arr.filter((el) => el > pivot);

  return QuickSort(left).concat(middle, QuickSort(right));
}

/*MergeSort
MergeSort is a stable sorting algorithm with a time complexity of O(n log n). 
It is good for situations where stability is important or when you need a consistent worst-case time complexity.*/

export function MergeSort(arr: number[]): number[] {
  if (arr.length <= 1) {
    return arr;
  }

  const middle = Math.floor(arr.length / 2);
  const left = arr.slice(0, middle);
  const right = arr.slice(middle);

  return Merge(MergeSort(left), MergeSort(right));
}

function Merge(left: number[], right: number[]): number[] {
  let result: number[] = [];
  let leftIndex = 0;
  let rightIndex = 0;

  while (leftIndex < left.length && rightIndex < right.length) {
    if (left[leftIndex] < right[rightIndex]) {
      result.push(left[leftIndex]);
      leftIndex++;
    } else {
      result.push(right[rightIndex]);
      rightIndex++;
    }
  }

  return result.concat(left.slice(leftIndex), right.slice(rightIndex));
}

/*HeapSort
HeapSort has a worst-case time complexity of O(n log n) and is an in-place sorting algorithm.
It can be useful when you have limited additional memory available for sorting.*/

export function HeapSort(arr: number[]): number[] {
  const n = arr.length;

  for (let i = Math.floor(n / 2) - 1; i >= 0; i--) {
    Heapify(arr, n, i);
  }

  for (let i = n - 1; i > 0; i--) {
    [arr[0], arr[i]] = [arr[i], arr[0]];
    Heapify(arr, i, 0);
  }

  return arr;
}

function Heapify(arr: number[], n: number, i: number): void {
  let largest = i;
  const left = 2 * i + 1;
  const right = 2 * i + 2;

  if (left < n && arr[left] > arr[largest]) {
    largest = left;
  }

  if (right < n && arr[right] > arr[largest]) {
    largest = right;
  }

  if (largest !== i) {
    [arr[i], arr[largest]] = [arr[largest], arr[i]];
    Heapify(arr, n, largest);
  }
}

/*Radix Sort
Radix Sort is a non-comparative sorting algorithm that works well for integers or strings with fixed lengths. 
It has a linear time complexity but is often not the most practical choice for general-purpose sorting.*/

export function RadixSort(arr: number[]): number[] {
  const max = Math.max(...arr);

  for (let exp = 1; Math.floor(max / exp) > 0; exp *= 10) {
    countingSort(arr, exp);
  }

  return arr;
}

function countingSort(arr: number[], exp: number): void {
  const n = arr.length;
  const output: number[] = Array(n).fill(0);
  const count: number[] = Array(10).fill(0);

  for (let i = 0; i < n; i++) {
    count[Math.floor(arr[i] / exp) % 10]++;
  }

  for (let i = 1; i < 10; i++) {
    count[i] += count[i - 1];
  }

  for (let i = n - 1; i >= 0; i--) {
    output[count[Math.floor(arr[i] / exp) % 10] - 1] = arr[i];
    count[Math.floor(arr[i] / exp) % 10]--;
  }

  for (let i = 0; i < n; i++) {
    arr[i] = output[i];
  }
}

/*Counting Sort
Counting Sort is efficient for sorting integers within a specific range. 
It has a linear time complexity but requires additional memory proportional to the range of input values.*/

export function CountingSort(arr: number[]): number[] {
  const max = Math.max(...arr);
  const count: number[] = Array(max + 1).fill(0);
  const n = arr.length;

  for (let i = 0; i < n; i++) {
    count[arr[i]]++;
  }

  let index = 0;
  for (let i = 0; i <= max; i++) {
    while (count[i] > 0) {
      arr[index] = i;
      index++;
      count[i]--;
    }
  }

  return arr;
}
