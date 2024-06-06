const scriptURL = 'https://script.google.com/macros/s/AKfycbxEgFQLi5gP2jbh-snwzErAtg56UZshgVOybCvTamC2GeOLTwijZeWWr6GWC0oV5uuu/exec';
const form = document.forms['Form-Comment'];
const Name = document.getElementById('Name');
const Comment = document.getElementById('Comment');

form.addEventListener('submit', (e) => {
  e.preventDefault();
  fetch(scriptURL, { method: 'POST', body: new FormData(form) })
    .then((response) => {
      form.reset();
      alert('Succes!');
    })
    .catch((error) => {
      form.reset();
      alert('Failed!');
    });
});
