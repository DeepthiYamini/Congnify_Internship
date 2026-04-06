const display = document.getElementById("display");

function appendToDisplay(value) {
  if (display.innerText === "0") {
    display.innerText = value;
  } else {
    display.innerText += value;
  }
}

function clearDisplay() {
  display.innerText = "0";
}

function deleteLast() {
  if (display.innerText.length > 1) {
    display.innerText = display.innerText.slice(0, -1);
  } else {
    display.innerText = "0";
  }
}

function calculate() {
  try {
    // Safely evaluate the expression
    let result = Function('"use strict"; return (' + display.innerText + ')')();
    display.innerText = Number.isFinite(result)
      ? result.toString()
      : "Error";
  } catch (e) {
    display.innerText = "Error";
  }
}