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

function generateKey(str, key) {
  key = key.split("");
  if (str.length == key.length)
      return key.join("");
  else {
      let temp = key.length;
      for (let i = 0; i < str.length - temp; i++) {
          key.push(key[i % key.length]);
      }
  }
  return key.join("");
}

function cipherText(str, key) {
  let cipher_text = "";

  for (let i = 0; i < str.length; i++) {
      let x = (str[i].charCodeAt(0) + key[i].charCodeAt(0) - 2 * 'a'.charCodeAt(0)) % 26;
      x += 'a'.charCodeAt(0);
      cipher_text += String.fromCharCode(x);
  }
  return cipher_text;
}

function originalText(cipher_text, key) {
  let orig_text = "";

  for (let i = 0; i < cipher_text.length; i++) {
      let x = (cipher_text[i].charCodeAt(0) - key[i].charCodeAt(0) + 26) % 26;
      x += 'a'.charCodeAt(0);
      orig_text += String.fromCharCode(x);
  }
  return orig_text;
}

function encryptPassword() {
  let str = document.getElementById('passwordInput').value;
  let keyword = document.getElementById('keyInput').value;

  let key = generateKey(str, keyword);

  let cipher_text = cipherText(str, key);

  document.getElementById('encryptedPassword').textContent = cipher_text;
}

function decryptPassword() {
  let encryptedText = document.getElementById('encryptedPasswordInput').value;
  let decryptionKey = document.getElementById('decryptionKeyInput').value;

  let key = generateKey(encryptedText, decryptionKey);

  let decryptedText = originalText(encryptedText, key);

  document.getElementById('decryptedPassword').textContent = decryptedText;
}
