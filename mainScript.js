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
let justCalculated = false;

const operate = function (a, b, op) {
  if (op == "+") return add(a, b);
  else if (op == "-") return subtract(a, b);
  else if (op == "×") return multiply(a, b);
  else if (op == "÷") return divide(a, b);
  else return alert("Error: Operator not recognised");
};

const roundResult = function (num) {
  return Math.round(num * 1000000) / 1000000;
};

const buttons = document.querySelectorAll(".btn");
const display = document.querySelector("#input");

buttons.forEach((button) => {
  button.addEventListener("click", (event) => {
    if (button.value === "delete") {
      display.textContent = display.textContent.slice(0, -1);
      if (a && !operator) {
        a = a.slice(0, -1);
      } else if (b && operator) {
        b = b.slice(0, -1);
      }
    } else if (button.value === "=") {
      let total = roundResult(operate(Number(a), Number(b), operator));
      justCalculated = true;
      a = total.toString();
      b = "";
      operator = "";
      display.textContent = `${a}`;
    } else if (event.target.classList.contains("op")) {
      if (a && b && operator) {
        let answer = roundResult(operate(Number(a), Number(b), operator));
        a = answer;
        b = "";
      }
      operator = event.target.value;
      display.textContent += event.target.value;
    } else if (event.target.value === ".") {
      if (!operator && !a.includes(".")) {
        a += ".";
        display.textContent += event.target.value;
      } else if (operator && !b.includes(".")) {
        b += ".";
        display.textContent += event.target.value;
      }
    } else if (button.classList.contains("num") && !operator) {
      if (justCalculated) {
        a = event.target.value;
        display.textContent = a;
        justCalculated = false;
      } else {
        a += event.target.value;
        display.textContent += event.target.value;
      }
    } else if (button.classList.contains("num") && operator) {
      b += event.target.value;
      if ((operator === "÷" && b === "0") || (operator === "÷" && b === "00")) {
        display.textContent = "shut up smart arse";
        a = "";
        b = "";
        operator = "";
        justCalculated = true;
      } else display.textContent += event.target.value;
    } else if (button.value === "clear") {
      a = "";
      b = "";
      operator = "";
      display.textContent = ``;
    }
  });
});

document.addEventListener("keydown", (e) => {
  let value;
  switch (e.key) {
    case "*":
      value = "×";
      break;
    case "/":
      value = "÷";
      break;
    case "Enter":
      value = "=";
      break;
    case "Backspace":
      value = "delete";
      break;
    default:
      value = e.key;
  }
  let button = document.querySelector(`[value = "${value}"]`);
  if (button) {
    button.click();
  }
});
