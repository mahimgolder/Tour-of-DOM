console.log('Secound file');

const secoundList = document.getElementById('secound-list');
const li = document.createElement('li');
li.innerText = 'My dynamic item';

secoundList.appendChild(li);