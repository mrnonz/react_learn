"use strict";

var _math = require("./math");

var _math2 = _interopRequireDefault(_math);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

console.log("Hello, React!");

console.log((0, _math.add)(2, 4));
console.log((0, _math.decrease)(99));

var numbers = [1, 2, 3, 4, 5];
var x2 = numbers.map(function (number) {
  return number * 2;
});
console.log(x2);

var even = numbers.filter(function (number) {
  return number % 2 == 0;
});
console.log(even);

var sum = numbers.reduce(function (total, number) {
  return total + number;
});
console.log(sum);