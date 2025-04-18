
const form = document.getElementById('registration-form');

form.addEventListener('submit', function (e) {
  e.preventDefault();

  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;

  if (!email || !password) {
    alert('Please fill in both fields!');
  } else {
    alert(`Registration Successful!\nEmail: ${email}\nPassword: ${password}`);
  }
});
