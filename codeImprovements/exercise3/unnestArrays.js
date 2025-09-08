// Write a function(s) that checks the level of nesting of an array. Then, use that function to flatten the array into a single-dimensional array.

// const unnestArrays = (anArray) => {
//     return anArray.flat(Infinity);
// }

const nestArrays = (arrays) => {
    return arrays.toString().split(',');
}
console.log(nestArrays([1,2,[3,4,5],[6,[7,8,9]]]));