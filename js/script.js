const scriptURL = 'https://script.google.com/macros/s/AKfycbxEgFQLi5gP2jbh-snwzErAtg56UZshgVOybCvTamC2GeOLTwijZeWWr6GWC0oV5uuu/exec';
const form = document.forms['Form-Comment'];
const Name = document.getElementById('Name');
const Comment = document.getElementById('Comment');
const button = document.querySelector('.btn-send');

form.addEventListener('submit', (e) => {
  e.preventDefault();
  button.innerHTML = `Wait...`;
  button.classList.add('disabled');
  fetch(scriptURL, { method: 'POST', body: new FormData(form) })
    .then((response) => {
      form.reset();
      button.classList.remove('disabled');
      button.innerHTML = `<i class="bi bi-send-fill"></i>Send`;
      alert('Sending Success!');
    })
    .catch((error) => {
      form.reset();
      button.classList.remove('disabled');
      button.innerHTML = `<i class="bi bi-send-fill"></i>Send`;
      alert('Sending Failed');
    });
});
