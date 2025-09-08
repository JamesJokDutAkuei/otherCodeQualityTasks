// function calculateMatrixSum(matrix) {
//   var sum = 0;
//   for (var i = 0; i < matrix.length; i++)
//     for (var j = 0; j < matrix[i].length; j++)
//       sum += matrix[i][j];
//   return sum;
// }

const calculateMatrixSum = (matrix) => {
  return matrix
  .flat().reduce((sum, value) => sum + value)
}

let matrix = [
  [1, 2, 3],
  [4, 5, 6]
];

console.log(calculateMatrixSum(matrix));