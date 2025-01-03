
let secondCircle = document.getElementsByClassName('secondcircle')[0];
let firstSection = document.getElementById('FirstSection');
let i = 270;
let j = 0;

function dragHandler(e) {  e.dataTransfer.setData('text/plain', e.target.id); }

function dragoverHandler(e) {
    e.preventDefault();
    e.dataTransfer.dropEffect = "move";
}

function dropHandler(e) {
    e.preventDefault()
    const data = e.dataTransfer.getData('text/plain');
    document.getElementById(data).style.width = `${i}px`;
    document.getElementById(data).setAttribute('draggable', 'false');
    i -= 30;
    if (i < 0) return
    e.target.appendChild(document.getElementById(data));
    
    firstSection.innerHTML += `<div  ondragstart="dragHandler(event)" style="background: rgb(${Number(Math.random()*255)},${Number(Math.random()*255)},${Number(Math.random()*255)});"  draggable="true" id="firstcircle${j++}" class="firstcircle"></div>`;
    
}