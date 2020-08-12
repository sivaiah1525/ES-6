var a = 10;

//global scope
// function my() {
//   if (true) {
//     var a = 20;
//     console.log(a);
//   }
//   console.log(a);
// }

// my();

//block scope
// let b = 30;
// function my1() {
//   if (true) {
//     let b = 50;
//     console.log(b);
//   }
//   console.log(b);
// }

// my1();

// for (var i = 0; i < 10; ++i) {
//   console.log(i);
// }
// console.log(i);
for (let i = 0; i < 10; ++i) {
  console.log(i);
}
// console.log(i);

const arr = [1, 2, 3, 4];
// arr = "str"; error can't reassign the values
arr.push("string");
console.log(arr);

// class
class User {
  constructor(name, age, place) {
    this.name = name;
    this.age = age;
    this.place = place;
  }
  static count() {
    return `the count of user is 1000`;
  }
  getUser() {
    return `The User Name Is ${this.name}`;
  }
}
class Newuser extends User {
  constructor(name, age, place, position) {
    super(name, age, place);
    this.position = position;
  }
  getUserPos() {
    return `${this.name} Is A ${this.position}`;
  }
}
let go = new User("Govardhan Aaleswara", "23", "Chennai");
let go1 = new Newuser("Govardhan", "23", "chennai", "Full Stack Developer");
console.log(go);
console.log(go.getUser());
console.log(User.count());
console.log(go1);
console.log(go1.getUserPos());

let arr1 = [1, 2, 3, 4];
let arr2 = [5, 6, 7, 8];

function test() {
  return `${arr1 + " " + arr2}`;
}
var arr3 = test(...arr1, ...arr2);
console.log(arr3);
// set
let book = new Set();
book.add("1");
book.add("2");
book.add("str");
book.delete("1");
book.clear();
book.add("Jai Sri Ram");
console.log(book.size);

// map
let bo = new Map([
  ["a1", "Govardhan"],
  ["b1", "Aaleswara"]
]);
bo.set(["c1", "Govardhan Aaleswara"]);
console.log(bo);

// weakSet
let abc = new WeakSet();
let car = {
  name: "Govardhan Aaleswara",
  position: "Full Stack Developer"
};
abc.add(car);
console.log(abc);
