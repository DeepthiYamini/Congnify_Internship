const form = document.getElementById('mainForm');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const successMsg = document.getElementById('formSuccess');

form.addEventListener('submit', (e) => {
  e.preventDefault(); // Prevent standard submission
  
  if (validateInputs()) {
    successMsg.classList.remove('hidden');
    form.reset();
    // In production, you would send data to a server here
  } else {
    successMsg.classList.add('hidden');
  }
});

function validateInputs() {
  const nameValue = username.value.trim();
  const emailValue = email.value.trim();
  const passwordValue = password.value.trim();
  let isValid = true;

  // Name Validation
  if (nameValue === '') {
    setError(username, 'Full name is required');
    isValid = false;
  } else {
    setSuccess(username);
  }

  // Email Validation (Regex)
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (emailValue === '') {
    setError(email, 'Email is required');
    isValid = false;
  } else if (!emailRegex.test(emailValue)) {
    setError(email, 'Enter a valid email address');
    isValid = false;
  } else {
    setSuccess(email);
  }

  // Password Validation
  if (passwordValue.length < 8) {
    setError(password, 'Password must be at least 8 characters');
    isValid = false;
  } else {
    setSuccess(password);
  }

  return isValid;
}

// UI Helper: Set Error State
function setError(input, message) {
  const container = input.parentElement;
  const small = container.querySelector('.error-msg');
  container.className = 'input-container error';
  small.innerText = message;
}

// UI Helper: Set Success State
function setSuccess(input) {
  const container = input.parentElement;
  container.className = 'input-container success';
}