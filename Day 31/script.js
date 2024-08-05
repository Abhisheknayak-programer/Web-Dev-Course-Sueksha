// Map Function
const arr = [1, 2, 3, 4, 5];
const ans = arr.map((el) => el * 3);
console.log(ans);

// ForEach Loops
const sum = (num) => {
  console.log(num + 2);
};

const arr2 = [1, 2, 3, 4, 5];
arr2.forEach((el) => sum(el));

// Objects in JavaScript
const person = {
  name: "Abhishek",
  age: 26,
  profession: "software developer",
  marks: [134, 567, 7, 8, 9, 9, 9],
  location: {
    landmark: "Banjara Hills",
    pincode: 500035,
  },
};

console.log(person);
console.log(person.name);
console.log(person.profession);
console.log(person.location);
console.log(person.marks);
console.log(person.location.pincode);

// Array Destructuring
const [test1, test2] = [23, 34];
// const arr = [23, 34]
// const test1 = arr[0];
// const test2 = arr[1];
console.log(test1, test2);

// Object Destructuring
const { name, age } = {
  name: "Abhishek Nayak",
  age: 26,
};

console.log(name, age);

// Strings
const str = "Abhishek Nayak";
console.log(str[0]);
console.log(str[1]);
console.log(str[2]);
console.log(str[3]);

console.log(str.toUpperCase());
console.log(str.toLowerCase());
console.log(str.length);
console.log(str.indexOf("a"));
console.log(str.lastIndexOf("a"));
console.log(str.split(" "));

const [firstname, lastname] = str.split(" "); // ["Abhishek", "Nayak"]
console.log(firstname, lastname);
