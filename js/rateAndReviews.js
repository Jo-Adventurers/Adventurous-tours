
'use strict';

//let testDiv = document.getElementById('test');

//let spanEl=document.getElementsById('test1');
/*
let spanEl=document.createElement('span')
function createEl(){
  
  let imgEl = document.createElement('img');
  testDiv.appendChild(imgEl);
  imgEl.src='img/profile.jpg';

  let li=document.createElementbyId('li');
  li.appendChild(spanEl);
  spanEl.textContent= li;
  
  let descriptionEl=document.createElementbyId('p');
  spanEl.appendChild(descriptionEl);
  document.getElementById('test1').textContent=descriptionEl;

  let resultEl=document.createElementbyId('p');
  spanEl.appendChild(resultEl)
  document.getElementsById('test1').textContent=radioValue();
}*/

let ButtonEl = document.getElementById('submit');
//ButtonEl.addEventListener('click',showdescription);





/*
  function showdescription(){

     inputVal= document.getElementById('description').value;
    document.getElementById('test').textContent=inputVal;
     inputVal1= document.getElementById('name').value;
    document.getElementById('test1').textContent=inputVal1;
    console.log(inputVal);
    console.log(inputVal);
 
  radioValue();
  setResult()

  
  
}/* */



let userName = document.getElementById('name').value;
document.getElementById('results').textContent = userName;

let userDescription = document.getElementById('description').value;
document.getElementById('results').textContent = userDescription;

function radioValue() {
  let val = document.getElementsByName('star');
  for (let i = 0; i < val.length; i++) {
    if (val[i].checked) {
      document.getElementById('results').textContent = val[i].value + '/5';

    }
  }
}

let divResults = document.getElementById('results')


function submitResults() {
  let current = JSON.parse(ratings);
  current.push({
    name: userName,
    description: userDescription,
    results: radioValue()
  });
  console.log(userName)
  console.log(userDescription)
  localStorage.setItem('ratings', JSON.stringify(current));
  let pName;
  let pEl;
  let pResultEl;
  let getNew = JSON.parse(localStorage.getItem('ratings'));
  for (let i = 0; i < getNew.length; i++) {
/*
    pName = document.createElement('span')
    divResults.appendChild(pName)
    pName.textContent = getNew[i].name

    pEl = document.createElement('p')
    divResults.appendChild(pEl)
    pEl.textContent = getNew[i].description;

    pResultEl = document.createElement('p')
    divResults.appendChild(pResultEl)
    pResultEl.textContent = getNew[i].results;
*/
  }
}
let ratings = localStorage.getItem('ratings')

if (!ratings) {
  localStorage.setItem('ratings', JSON.stringify([]));
}