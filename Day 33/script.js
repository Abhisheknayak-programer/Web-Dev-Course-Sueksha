// OOPS [Object Oriented Programming]
class vehicle {
  constructor(speed) {
    this.speed = speed;
  }

  accelerateHandler() {
    this.speed = this.speed + 5;
    console.log("Speed of Your Vehicle is ", this.speed);
  }

  brakeHandler() {
    this.speed = this.speed - 5;
    console.log("Speed of Your Vehicle is ", this.speed);
  }

  printHandler() {
    console.log("Speed of Your Vehicle is ", this.speed);
  }
}

const v1 = new vehicle(560);
v1.accelerateHandler();
v1.accelerateHandler();
v1.accelerateHandler();
v1.accelerateHandler();
v1.accelerateHandler();
v1.brakeHandler();

class bike extends vehicle {
  constructor(speed) {
    super(speed);
  }

  bikeDetailsHandler() {
    console.log("Bike Name : BMW X24");
  }
}

const bike1 = new bike(200);
bike1.printHandler();
bike1.accelerateHandler();
bike1.brakeHandler();
bike1.bikeDetailsHandler();

// setTimeout
const box = document.querySelector(".hide");
setTimeout(() => {
  box.style.display = "block";
  box.style.color = "crimson";
}, 3000);

// setInterval
let count = 0;
const num = document.querySelector(".num");
setInterval(() => {
  count = count + 1;
  num.textContent = count;
}, 1000);
