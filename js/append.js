// ****create a li under ul:
//1. where to add
const placesList = document.getElementById('places-list');

//2. what to be added
const li = document.createElement('li');
li.innerText = 'pahartoli bon';

// 3.add the child
placesList.appendChild(li);
// _______________******______________
// create a section under main section;
// 1.where t add
const mainContainer = document.getElementById('main-container')

//4. what to be added
const section = document.createElement('section');
const h1 = document.createElement('h1');
h1.innerText = 'My Food List';
section.appendChild(h1);

const ul = document.createElement('ul');
const li1 = document.createElement('li');
li1.innerText = 'biriyani';
ul.appendChild(li1);

const li2 = document.createElement('li');
li2.innerText = 'borhani';
ul.appendChild(li2);

const li3 = document.createElement('li');
li3.innerText = 'salat';
ul.appendChild(li3);

section.appendChild(ul)

mainContainer.appendChild(section)



// set innerHTML derectly
const sectionDress = document.createElement('section');
sectionDress.innerHTML = `
<h1>My Dress section</h1>
<ul>
   <li>T-shart</li>
   <li>Lungi</li>
   <li>Sandu genji</li>
</ul>
`
mainContainer.appendChild(sectionDress);


