// -------------------------- (1)
var a = 1;
function outer() {      // outer함수 실행.
  function inner() {
    console.log(a); // undefined
    var a = 3;
  }
  inner(); // ------------ (2) inner 선언.
  console.log(a); // 1
}
outer(); // ---------------- (3)
console.log(a); // 1