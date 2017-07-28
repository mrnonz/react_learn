"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var area = function area(r) {
  var PI = 3.14;
  return PI * r * r;
};
var add = exports.add = function add(a, b) {
  return a + b;
};
var decrease = exports.decrease = function decrease(a) {
  return a - 1;
};
exports.default = area;