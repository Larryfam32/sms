let myform = document.querySelector('#myform');
let expedi = document.querySelector('#expe');
let numdest = document.querySelector('#tele');
let messag = document.querySelector('#msg');


myform.addEventListener("submit", ()=>{
    alert(expedi.value);
});