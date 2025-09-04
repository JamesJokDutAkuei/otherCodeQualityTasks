// function calculateAverage(numbers) {
//   var sum = 0;
//   var count = 0;
//   for (var i = 0; i < numbers.length; i++) {
//     sum += numbers[i];
//     count++;
//   }
//   var average = sum / count;
//   return average;
// }

function calculateAverage(numbers){
  let count = numbers.length;
  return numbers
  .reduce((num, accummulator)=> num + accummulator, 0)/count;
}

console.log(calculateAverage([1,2,3,4,5,8]))