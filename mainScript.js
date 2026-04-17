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

let a, b, operator;

const operate = function (a, b, op) {
  if (op == "+") return add(a, b);
  else if (op == "-") return subtract(a, b);
  else if (op == "*") return multiply(a, b);
  else if (op == "/") return divide(a, b);
  else return alert("Error: Operator not recognised");
};

let result = operate(
  Number(prompt("Give any number")),
  Number(prompt("Give a second number")),
  prompt("Give an operator: +, -, * or /"),
);

console.log(result);
