console.log(sum(1, 2));
console.log(c);

function sum(a, b) {                // 함수 선언문 sum
  return a + b;
}

var multiply = function(a, b) {     // 함수 표현식 multiply
  return a * b;
};
var c = multiply(3,4);