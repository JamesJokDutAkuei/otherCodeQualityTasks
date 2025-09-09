export default function recursiveSum(arr, index = 0) {
  if (index === arr.length) return 0;     // base case: end of array
  return arr[index] + recursiveSum(arr, index + 1);
}
