const scriptURL = 'https://script.google.com/macros/s/AKfycbxEgFQLi5gP2jbh-snwzErAtg56UZshgVOybCvTamC2GeOLTwijZeWWr6GWC0oV5uuu/exec';
const form = document.forms['Form-Comment'];
const Name = document.getElementById('Name');
const Comment = document.getElementById('Comment');
const button = document.querySelector('.btn-send');
const buttonDis = document.querySelector('.disabled');

form.addEventListener('submit', (e) => {
  e.preventDefault();
  button.style.display = 'none';
  buttonDis.style.display = 'block';
  fetch(scriptURL, { method: 'POST', body: new FormData(form) })
    .then((response) => {
      form.reset();
      button.style.display = 'block';
      buttonDis.style.display = 'none';
      alert('Sending Success!');
    })
    .catch((error) => {
      form.reset();
      button.style.display = 'block';
      buttonDis.style.display = 'none';
      alert('Sending Failed');
    });
});
