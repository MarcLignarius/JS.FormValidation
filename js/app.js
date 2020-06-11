// Form Blur Event Listeners
document.getElementById('name').addEventListener('blur', validateName);
document.getElementById('email').addEventListener('blur', validateEmail);
document.getElementById('phone').addEventListener('blur', validatePhone);

function validateName() {
  const name = document.getElementById('name');
  const re = /^[\w'\-,.][^0-9_!¡?÷?¿/\\+=@#$%ˆ&*(){}|~<>;:[\]]{2,}$/;
  if (!re.test(name.value)) {
    name.classList.add('is-invalid');
    return false;
  } else {
    name.classList.remove('is-invalid');
    return true;
  }
}

function validateEmail() {
  const email = document.getElementById('email');
  const re = /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/;
  if (!re.test(email.value)) {
    email.classList.add('is-invalid');
    return false;
  } else {
    email.classList.remove('is-invalid');
    return true;
  }
}

function validatePhone() {
  const phone = document.getElementById('phone');
  const re = /^\(?\d{3}\)?[-. ]?\d{3}[-. ]?\d{4}$/;
  if (!re.test(phone.value)) {
    phone.classList.add('is-invalid');
    return false;
  } else {
    phone.classList.remove('is-invalid');
    return true;
  }
}

const form = document.querySelector('form');
form.addEventListener('submit', (e) => {
  const isNameValid = validateName();
  const isEmailValid = validateEmail();
  const isPhoneValid = validatePhone();
  if (!isNameValid || !isEmailValid || !isPhoneValid) {
    document.getElementById('output').innerHTML = 'Please check all fields.';
    e.preventDefault();
  }
});
