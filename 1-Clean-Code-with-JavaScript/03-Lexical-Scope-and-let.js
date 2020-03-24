var test = true;

if (test) {
  let a = 42;
}

// console.log(a); // Uncaught ReferenceError: a is not defined

for (var i = 0; i < 3; i++) {
  console.log(i);
}

console.log(i);

/*
var d = 4;

function f1() {
  var a = 1;

  function f2() {
    var b = 2;

    function f3() {
      var c = 3;
      console.log(a);
      console.log(b);
      console.log(c);
      d = 42;
      console.log(d);
    }
    return f3;
  }
  return f2;
}

const f2 = f1();
// console.log(f2);

const f3 = f2();
// console.log(f3);
f3();
*/
