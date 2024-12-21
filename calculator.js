function add(a, b = 0) {
  return a + b;
}

function subtract(a, b = 0) {
  return a - b;
}

function multiply(a, b = 1) {
  return a * b;
}

function divide(a, b = 1) {
  return a / b;
}

let numA = 0;
let numB = 0;
let opp = "";

function operate(a, op, b) {
  if (op === '+') return add(a, b);
  if (op === '-') return subtract(a, b);
  if (op === '*') return multiply(a, b);
  if (op === '/') return divide(a, b);
}

const screen = document.querySelector("#screen");

const numPad = document.querySelectorAll(".num");
numPad.forEach((num) => {
  num.addEventListener("click", () => {
    if (screen.textContent === "0") {
      screen.textContent = num.textContent;
    } else {
      screen.textContent += num.textContent;
    }
    screen.scrollLeft = screen.scrollWidth;
  });
});

const addBtn = document.querySelector("#add");
addBtn.addEventListener("click", () => opp = "+");

const subBtn = document.querySelector("#subtract");
subBtn.addEventListener("click", () => opp = "-");

const multiBtn = document.querySelector("#multiply");
multiBtn.addEventListener("click", () => opp = "*");

const divBtn = document.querySelector("#divide");
divBtn.addEventListener("click", () => opp = "/");
