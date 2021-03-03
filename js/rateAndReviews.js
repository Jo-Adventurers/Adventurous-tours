'use strict';
//let ButtonEl = document.getElementById('submit');
//let userName = document.getElementById('name').value;
//document.getElementById('results').textContent = userName;
//let userDescription = document.getElementById('description').value;
//document.getElementById('results').textContent = userDescription;
function radioValue() {
  let val = document.getElementsByName('star');
  for (let i = 0; i < val.length; i++) {
    if (val[i].checked) {
      //document.getElementById('rateResult').textContent = val[i].value + '/5'
      return val[i].value+'/5'
    }
  }
}
//let divResults = document.getElementById('main')
function submitResults() {
  let userName = document.getElementById("name").value;
  let userDescription = document.getElementById('description').value;
  document.getElementById('rateResult').textContent
  console.log(userDescription)
  let current = JSON.parse(ratings);
  current.push({
    name: userName,
    description: userDescription,
    rateResult: radioValue()
  });
  console.log(radioValue())
  localStorage.setItem('ratings', JSON.stringify(current));
  let pName;
  let pEl;
  let pResultEl;
  let divE;
  let getNew = JSON.parse(localStorage.getItem('ratings'));
  for (let i = 0; i < getNew.length; i++) {
    divE = document.createElement("div");
    divE.id="main"
    pName = document.createElement('p')
    divE.appendChild(pName)
    pName.textContent = getNew[i].name
    console.log(getNew[i].name)
    pEl = document.createElement('p')
    divE.appendChild(pEl)
    pEl.textContent = getNew[i].description;
    console.log(getNew[i].description)
    pResultEl = document.createElement('p')
    divE.appendChild(pResultEl)
    pResultEl.textContent = getNew[i].rateResult
    console.log(getNew[i].rateResult)
    document.body.appendChild(divE);
    document.getElementById("Box").reset();
  }
}
let ratings = localStorage.getItem('ratings')
if (!ratings) {
  localStorage.setItem('ratings', JSON.stringify([]));
}



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
