const scriptURL = 'https://script.google.com/macros/s/AKfycbxEgFQLi5gP2jbh-snwzErAtg56UZshgVOybCvTamC2GeOLTwijZeWWr6GWC0oV5uuu/exec';
const form = document.forms['Form-Comment'];
const Name = document.getElementById('Name');
const Comment = document.getElementById('Comment');
const button = document.querySelector('.btn-send');
const buttonDis = document.querySelector('.disabled');
const listProject = [
  {
    Names: 'Pokemon',
    Links: 'https://gerinnugroho.github.io/Pokemon/',
    Image: 'Pokemon.png',
  },
  {
    Names: 'ToDoList',
    Links: 'https://gerinnugroho.github.io/ToDoList/',
    Image: 'todolist.png',
  },
];

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

const loadElement = () => {
  const projectitems = document.getElementById('project-items');
  const fragment = document.createDocumentFragment();
  listProject.forEach((list) => {
    const projectitem = document.createElement('div');
    projectitem.className = 'project-item';

    const tooltipproject = document.createElement('div');
    tooltipproject.className = 'tooltip-project';
    const nameproject = document.createElement('span');
    nameproject.className = 'name-project';
    nameproject.textContent = list.Names;
    tooltipproject.appendChild(nameproject);

    const imagewrapper = document.createElement('div');
    imagewrapper.className = 'image-wrapper';
    const image = document.createElement('div');
    image.className = 'image';
    image.style.backgroundImage = `url('./assets/${list.Image}')`;
    const interact = document.createElement('div');
    interact.className = 'interact';
    const a = document.createElement('a');
    a.setAttribute('href', `${list.Links}`);
    a.setAttribute('target', '_blank');
    const i = document.createElement('i');
    i.className = 'bi bi-eye';
    imagewrapper.append(image, interact);
    interact.appendChild(a);
    a.appendChild(i);

    projectitem.append(tooltipproject, imagewrapper);
    fragment.appendChild(projectitem);
  });
  projectitems.appendChild(fragment);
};

window.addEventListener('load', loadElement);
