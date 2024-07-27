// Push - add one element to back
// Unshift - add one element to front
// Pop - remove one element from back
// Shift - remove one element from front
// length - to find how many elements are present inside the array

// Sort - sort the array in ascending or descending order
let arr = [24, 56, 7, 456, 754, 67, 43, 3];
console.log(arr.sort((a, b) => a - b)); // sort in ascending
console.log(arr.sort((a, b) => b - a)); // sort in descending
let strArr = ["Abhishek", "Nayak", "Sueksha", "Gupta", "Rahul", "Tripathi"];
console.log(strArr.sort()); // sort method can works fine with strings

// join - used to join the elements of the array
let test = ["Sueksha", "Adhrit", "Vinata"];
console.log(test.join(" Gupta, "));

// split - split is used to split the string into multiple array elements
let str =
  "I am Abhishek Nayak, I am a Senior Software Developer, Works with DEBEL & Co.";
console.log(str.split(","));

// splice - Used to delete a single/multiple element from the array based on index
let numArr = [123, 57, 8, 93, 7, 3, 1, 4, 7, 9];
// numArr.splice(index, num of Element you want to delete);
numArr.splice(3, 5);
console.log(numArr);

// forEach - Used to Loop the array
let testing = ["Abhishek", "Nayak", "Sahil"];
testing.forEach((el, ind) => {
  console.log(ind, el);
});

// map - Used to do a operation with the array and return the array as output
let nums = [1, 2, 3, 4, 5];
const ans = nums.map((el, ind) => {
  return el * 2;
});
console.log(ans);

// filter - Used to do filter the element from the array
let searches = ["shirts", "shoes", "mobiles", "grocery"];
const results = searches.filter((el, ind) => {
  return el === "shoes";
});

console.log(results);
