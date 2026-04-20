const add = function (a, b) {
  return a + b;
};

const subtract = function (a, b) {
  return a - b;
};

const multiply = function (a, b) {
  return a * b;
};

const divide = function (a, b) {
  return a / b;
};

let a = "";
let b = "";
let operator;

const operate = function (a, b, op) {
  if (op == "+") return add(a, b);
  else if (op == "-") return subtract(a, b);
  else if (op == "*") return multiply(a, b);
  else if (op == "/") return divide(a, b);
  else return alert("Error: Operator not recognised");
};

const buttons = document.querySelectorAll(".btn");

buttons.forEach((button) => {
  button.addEventListener("click", (event) => {
    if (event.target.classList.contains("op")) {
      if (operator) {
        let answer = operate(a, b, operator);
        console.log(answer);
      }
      operator = event.target.value;
      console.log(operator);
    } else if (button.classList.contains("num") && !operator) {
      a += event.target.value;
    } else if (button.classList.contains("num") && operator) {
      b += event.target.value;
    } else if (button.value === "clear") {
      a = "";
      b = "";
      operator = "";
    }

    console.log(`a: ${a}, b: ${b}, operator: ${operator}`);
  });
});
