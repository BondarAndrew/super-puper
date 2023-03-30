let car = {
  speed: 240,
  color: "red",

  drive: function () {
    console.log("Driving");
  },

  transfer: function () {
    console.log("tramsfering people");
  },
};

car.drive();
car.transfer();

//-----------------------

let stu = {
  name: "Ivan",
  age: 15,
  grades: [12, 24, 53],

  listen: function () {
    console.log("Listening");
  },

  write: function () {
    console.log("Writing");
  },
};

stu.listen();
stu.write();
