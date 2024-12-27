function dragHandler(e) {

    console.log('hello')
    e.dataTransfer.setData('text/plain', e.target.id);

}


let firstCircle = document.getElementsByClassName('firstcircle')[0];
let secondCircle = document.getElementsByClassName('secondcircle')[0];
let firstSection = document.getElementById('FirstSection');
let i = 270;
let j = 0;
const doneThing = () => {
    const element = document.getElementById('firstcircle' + j);
    element.draggable = "true"
    j++;
    element.addEventListener('dragstart', dragHandler);

}

window.addEventListener('DOMContentLoaded', () => {
    doneThing()
})




function dragoverHandler(e) {
    e.preventDefault();
    e.dataTransfer.dropEffect = "move";

}

function dropHandler(e) {
    e.preventDefault()
    let newColor = Math.floor(Math.random() * 9) + "" + Math.floor(Math.random() * 9) + "" + Math.floor(Math.random() * 9) + "" + Math.floor(Math.random() * 9) + "" + Math.floor(Math.random() * 9) + "" + Math.floor(Math.random() * 9)
    const data = e.dataTransfer.getData('text/plain');
    document.getElementById(data).style.width = `${i}px`;
    document.getElementById(data).style.height = `${i}px`;
    i -= 30;
    if (i < 0) {
        return
    }
    firstSection.innerHTML += `<div style="background: #${newColor};"  draggable="true" id="firstcircle${j}" class="firstcircle"></div>`;

    document.getElementById(data).draggable = 'false';
    e.target.appendChild(document.getElementById(data));
    doneThing()

}