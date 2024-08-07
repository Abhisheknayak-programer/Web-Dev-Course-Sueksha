// console.log(new Date());
const months = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sept",
  "Oct",
  "Nov",
  "Dec",
];

const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

const x = new Date();
console.log(x);
console.log(x.getFullYear());
console.log(months[x.getMonth()]); // months[7]
console.log(days[x.getDay()]);
console.log(x.getDate());
console.log(x.getHours());
console.log(x.getMinutes());
console.log(x.getSeconds());
console.log(x.getTime()); // Gives you the timestamp
console.log(x.toLocaleString());
console.log(x.toLocaleTimeString());
console.log(x.toLocaleDateString());

// Scoping
let test = "Testing";

if (7 < 8) {
  let test = "Yes";
  console.log(test);
}

console.log(test);

// Events
// click, load, mouseover, keypress etc.

// On load Event
function loadedHandler() {
  console.log("The Web Page is Loaded...");
}
window.addEventListener("load", loadedHandler);

// On keypress Event
const keyPressedHandler = (e) => {
  console.log(e.key);
};
window.addEventListener("keypress", keyPressedHandler);

// On Click Event
const btn = document.getElementById("redirect_btn_1");
const clickHandler = () => {
  console.log("I Am Clicked");
};
// window.addEventListener("click", clickHandler);
btn.addEventListener("click", clickHandler);

// On Click Event
const box = document.querySelector(".box");
const mouseHandler = () => {
  console.log("You are putting mouse over box");
};
box.addEventListener("mouseover", mouseHandler);
