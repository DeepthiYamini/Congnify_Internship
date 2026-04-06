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
const toggleBtn = document.getElementById('theme-toggle');
const currentTheme = localStorage.getItem('theme');

// Apply stored theme on load
if (currentTheme) {
  document.documentElement.setAttribute('data-theme', currentTheme);
}

toggleBtn.addEventListener('click', () => {
  let theme = document.documentElement.getAttribute('data-theme');
  
  if (theme === 'dark') {
    document.documentElement.setAttribute('data-theme', 'light');
    localStorage.setItem('theme', 'light');
  } else {
    document.documentElement.setAttribute('data-theme', 'dark');
    localStorage.setItem('theme', 'dark');
  }
});
