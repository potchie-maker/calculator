let numA = null;
let numB = null;
let opp = null
let currValue = "";
let isGettingNumB = false;
let error = false;

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
  if (b === 0) {
    error = true;
    return "BOO THIS MAN";
  }
  screen.style.fontSize = "";
  return a / b;
}

function operate(a, op, b) {
  if (op === '+') return add(a, b);
  if (op === '-') return subtract(a, b);
  if (op === '*') return multiply(a, b);
  if (op === '/') return divide(a, b);
}

function formatResult(result) {
  if (typeof result === "number") {
    if (Number.isInteger(result)) {
      return result.toString();
    }
    return Math.round(result * 100) / 100;;
  }
  return result;
}

const screen = document.querySelector("#screen");

const numPad = document.querySelectorAll(".num");
numPad.forEach((num) => {
  num.addEventListener("click", () => {
    if (error) return;
  
    if (currValue.includes(".") && num.textContent === ".") return;

    if (screen.textContent === "0" && num.textContent === ".") {
      screen.textContent = "0.";
      currValue = "0.";
    } else if (screen.textContent === "0" || isGettingNumB) {
      screen.textContent = num.textContent;
      currValue = num.textContent;
      isGettingNumB = false;
    } else {
      screen.textContent += num.textContent;
      currValue += num.textContent;
    }
    screen.scrollLeft = screen.scrollWidth;
  });
});

const signs = document.querySelectorAll(".sign");
signs.forEach((sign) => {
  sign.addEventListener("click", () => {
    if (currValue) {
      if (numA === null) {
        numA = Number(currValue);
      } else if (opp) {
        numB = Number(currValue);
        let result = operate(numA, opp, numB);
        if (error) {
          screen.textContent = result;
          screen.style.fontSize = "55px";
          return;
        }
        screen.textContent = formatResult(result);
        numA = result;
      }
    }
    opp = sign.textContent;
    currValue = "";
    isGettingNumB = true;
  })
})

const equalsBtn = document.querySelector("#equals");
equalsBtn.addEventListener("click", () => {
  if (numA !== null && currValue && opp) {
    numB = Number(currValue);
    let result = operate(numA, opp, numB);
    if (error) {
      screen.textContent = result;
      screen.style.fontSize = "55px";
      return;
    }
    screen.textContent = formatResult(result);
    numA = result;
    currValue = "";
    opp = null;
  }
})

const invertBtn = document.querySelector("#invert");
invertBtn.addEventListener("click", () => {
  if (error) return;
  currValue = String(Number(screen.textContent) * (-1));
  numA = Number(currValue);
  screen.textContent = currValue
});

const percentBtn = document.querySelector("#percent");
percentBtn.addEventListener("click", () => {
  if (error) return;
  currValue = String(Number(screen.textContent) * 0.01);
  numA = Number(currValue);
  screen.textContent = currValue;
});

const clearBtn = document.querySelector("#clear");
clearBtn.addEventListener("click", () => {
  screen.style.fontSize = "";
  screen.textContent = "0"
  currValue = "";
  numA = null;
  numB = null;
  opp = null;
  isGettingNumB = false;
  error = false;
});