
'use strict'
/*let ButtonEl = document.getElementById('submit')

ButtonEl.addEventListener('click', descriptionShowing);


function descriptionShowing() {

let testDiv = document.getElementById('test');

}*/
/*
function getInputValue(){
  let inputVal= document.getElementById('description').value;
  document.getElementById('test').textContent=inputVal;
  let inputVal1= document.getElementById('name').value;
  document.getElementById('test1').textContent=inputVal1;
  console.log(inputVal)
  console.log(inputVal)
}*/

let ButtonEl=document.getElementById('submit')
ButtonEl.addEventListener('click',showdescription)
//let divEl = document.getElementById('test')

function showdescription(){
  
 
  let inputVal= document.getElementById('description').value;
  document.getElementById('test').textContent=inputVal;
  let inputVal1= document.getElementById('name').value;
  document.getElementById('test1').textContent=inputVal1;
  console.log(inputVal);
  console.log(inputVal);
}
ButtonEl.removeEventListener('click',showdescription);

let name=document.getElementById('name');
name.textContent=``;
