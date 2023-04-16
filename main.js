const btn = document.querySelector('.btn');
const title = document.querySelector('.title');
const colors = ['orange', 'blue', 'purple', 'red', 'pink', 'green']

let i = 0;
function changeColor(){
    i++;
    if(i == colors.length) i = 0;
    title.style.color = colors[i];
}

function BringOut(){
    alert('Hello World!');
}
