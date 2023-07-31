let output = document.getElementById('value');
let toggle = document.querySelector('.toggle-btn');
let body = document.querySelector('body');

toggle.onclick = function(){
    body.classList.toggle('dark');
}

function show(num){
    output.value += num;
}
function clr(){
    output.value = "";
}
function calc(){
    try{
        output.value = eval(output.value);
    }
    catch(err){
        alert("Invalid !!!")
    }
}
function del(){
    output.value = output.value.slice(0,-1);
}