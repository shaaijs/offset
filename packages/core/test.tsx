import { Editor } from './lib';

const editor = new Editor({});

document.getElementById('output').appendChild(editor.root.node);
let button = document.createElement('button');
button.textContent = 'Output'
button.addEventListener('click', () => {
    console.log(editor.root);
})
document.body.appendChild(button);