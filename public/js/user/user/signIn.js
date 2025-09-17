import axios from 'axios';

document.addEventListener('DOMContentLoaded', function () {
  alert('tets cek js is active');

  const loginForm = document.getElementById('login-form');
  const loginButton = document.getElementById('login-button');
  const loginError = document.getElementById('login-error');
  const loginSucces = document.getElementById('login-success');
  const boxMessage = document.getElementById('message');

  loginButton.addEventListener('click', function (e) {
    e.preventDefault(); //agar tidak mereload halaman

    const name = loginForm.name.value;
    const email = loginForm.email.value;
    const password = loginForm.password.value;

    if (!email || !password) {
      loginError.textContent = 'Please fill in all fields.';
      return;
    }
    axios
      .post('/user/login', {
        name: name,
        password: password,
        email: email,
      })
      .then((res) => {
        if (res.status === 200) {
          loginSucces.textContent = 'Login successful.';
          // buat element untuk menampung tombol arah ke HOme
          let tombol = (boxMessage.document.createElement(
            'button',
          ).textContent = 'Go to Home');
          tombol.document.setAttribute('id', 'go-home');
          tombol.addEventListener('click', function () {
            window.location.href = '/home';
          });
        } else {
          loginError.textContent = 'Incorrect email or password.';
        }
      })
      .catch(() => {
        loginError.textContent = 'An error occurred.';
      });

    // fetch('/login', {
    //   method: 'POST',
    //   headers: {
    //     'Content-Type': 'application/json',
    //   },
    //   body: JSON.stringify({
    //     name: name,
    //     email: email,
    //     password: password,
    //   }),
    // })
    //   .then(function (response) {
    //     if (response.status === 200) {
    //       loginSucces.textContent = 'Login successful.';
    //       // buat element untuk menampung tombol arah ke HOme
    //       let tombol = (boxMessage.document.createElement(
    //         'button',
    //       ).textContent = 'Go to Home');
    //       tombol.document.setAttribute('id', 'go-home');
    //       tombol.addEventListener('click', function () {
    //         window.location.href = '/home';
    //       });
    //     } else {
    //       loginError.textContent = 'Incorrect email or password.';
    //     }
    //   })
    //   .catch(function () {
    //     loginError.textContent = 'An error occurred.';
    //   });
  });
});
