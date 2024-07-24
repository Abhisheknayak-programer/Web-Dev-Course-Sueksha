let strArr = ["Abhishek", "Rahul", "Sueksha", "Testing"];
let nestedArr = [123, 46, 78, [45, 67, 3, 99]];
let simple = [];
console.log(simple);
simple.push(234);
simple.push("Abhishek");
simple.unshift("Sueksha");
console.log(simple);

let arr = [6, 8, 98, 345, 2, 3, 5];
console.log(arr);
arr.pop();
console.log(arr);
arr.shift();
console.log(arr);

let combinedArr = [12345, 456, "Sueksha"];
console.log(combinedArr.length);

console.log(combinedArr[0]);
console.log(combinedArr[1]);
console.log(combinedArr[2]);

let arr2 = [1, 2, 3];
for (let i = 0; i < arr2.length; i++) {
  console.log(arr2[i] * 2);
}
