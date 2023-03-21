//ex1
function sumNumbers() {
  for (let i = 3; i <= 13; i++) {
    console.log(i);
  }
}
sumNumbers();

//ex2

function numbers() {
  for (let i = 0; i < 10; i++) {
    console.log(10);
  }
}

numbers();

//ex3

function printNum(n1, n2) {
  if (n1 > n2) {
    console.log(n1);
  } else if (n1 < n2) {
    console.log(n2);
  } else {
    console.log("числа рівні");
  }
}

printNum(prompt(), prompt());
