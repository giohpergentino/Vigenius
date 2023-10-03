const navbar = document.querySelector('.navbar');
const mobileNavbar = document.querySelector('.navbar__mobile');
const button = document.querySelector('.burguer');

button.addEventListener('click', function () {
  mobileNavbar.classList.toggle('active');
});

window.addEventListener('scroll', function () {
  if (this.window.pageYOffset > 0) return navbar.classList.add('active');
  return navbar.classList.remove('active');
});

//criptografia e descriptografia

function encryptPassword() {
  const passwordInput = document.getElementById('passwordInput').value;
  const encryptedPassword = CryptoJS.AES.encrypt(passwordInput, 'chave-secreta').toString();
  document.getElementById('encryptedPassword').textContent = encryptedPassword;
}

function decryptPassword() {
  const encryptedPasswordInput = document.getElementById('encryptedPasswordInput').value;
  try {
      const decryptedPassword = CryptoJS.AES.decrypt(encryptedPasswordInput, 'chave-secreta').toString(CryptoJS.enc.Utf8);
      document.getElementById('decryptedPassword').textContent = decryptedPassword;
  } catch (error) {
      document.getElementById('decryptedPassword').textContent = 'Erro ao descriptografar a senha';
  }
}
