console.log('thard file');

const main = document.getElementById('main-container');
const section = document.createElement(section);
section.innerHTML = `
    <h1>My Dynamic Section</h1>
    <p>Extrta text added inside paragraph</p>
    <ul>
        <li>first-item</li>
        <li>first-item</li>
        <li>first-item</li>
        <li>first-item</li>
        <li>first-item</li>
    
    </ul>
`
main.appendChild(section);