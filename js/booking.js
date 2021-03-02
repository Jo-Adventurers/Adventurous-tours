`use strict`;
let arrayOfObject = [];

function showlocalStorage(){
  if (namePrice[0]){
    let locationName=document.getElementById('locationName');
    locationName.value= namePrice[0]; 
  }
}
getLocation();
showlocalStorage();
const form = document.getElementById("form");

const infoBox =document.getElementById("infoBox");

form.addEventListener("submit", booking);
let meals = [];

let maxClick=1;

function booking(event) {
  console.log(event);

  event.preventDefault();

// take the value from the form 
while(maxClick<2){

  let locationName = event.target.locationName.value;
  let yourname = event.target.yourname.value;
  let phonenumber = parseInt(event.target.phonenumber.value);
  let email = event.target.email.value;
  let numberofvisitors = parseInt(event.target.numberofvisitors.value);
  totalPrice();
  



  if (event.target.Mansaf.checked) {
    meals.push("Mansaf");
  }
  if (event.target.Makmora.checked) {
    meals.push("Makmora");
  }
  if (event.target.Barbecue.checked) {
    meals.push("Barbecue");
  }
  if (event.target.Seafood.checked) {
    meals.push("Seafood");
  }

  console.log(meals);

  // create new object and assign parameter
  new AdventureBooking(locationName,yourname,phonenumber,email,numberofvisitors,meals);
 // saveToLocalStorage();
  createInfoBox();
  maxClick++;
}

//   form.removeEventListener("submit", booking);

}

// create constroctor function 
function AdventureBooking(locationName,yourname,phonenumber,numberofvisitors,meal) {
  this.locationName = locationName;
  this.yourname = yourname;
  this.phonenumber = phonenumber;
  this.numberofvisitors = numberofvisitors;
  this.meal = meal;

  //push object in the array
  arrayOfObject.push(this);
}

// function saveToLocalStorage() {
//     let object=JSON.stringify(arrayOfObject);
//     console.log(object);
//   localStorage.setItem("trip", object);
// }
getLocation();
function createInfoBox(){
  let image=document.createElement('img')
   image.src="https://www.flaticon.com/svg/vstatic/svg/678/678307.svg?token=exp=1614588131~hmac=4872293fec7a4df70fcc61bbbe27f66d";
    infoBox.appendChild(image);
    let ulEl=document.createElement('ul');
    infoBox.appendChild(ulEl);

    let liEl=document.createElement('li');
    ulEl.appendChild(liEl);
    liEl.textContent=`your trip is to  ${event.target.locationName.value}`;

    let liEl2=document.createElement('li');
    ulEl.appendChild(liEl2);
    liEl2.textContent=`your name is  ${event.target.yourname.value}`;

    let liEl3=document.createElement('li');
    ulEl.appendChild(liEl3);
    liEl3.textContent=`your phone number is  ${event.target.phonenumber.value}`;

    let liEl4=document.createElement('li');
    ulEl.appendChild(liEl4);
    liEl4.textContent=`your Email is  ${event.target.email.value}`;

    let liEl5=document.createElement('li');
    ulEl.appendChild(liEl5);
    liEl5.textContent=`the number of adventures  ${event.target.numberofvisitors.value}`;
    let liEl8=document.createElement('li');
    ulEl.appendChild(liEl8);
    liEl8.textContent=`The total price of you trip is ${price}`

    let liEl7=document.createElement('li');
    ulEl.appendChild(liEl7);
    liEl7.textContent=`you will eat  ${meals[0]}`;

    let liEl6;
    for(let i=1;i<meals.length;i++){
        liEl6=document.createElement('li');
        ulEl.appendChild(liEl6);
        liEl6.textContent=`and   ${meals[i]}`
    }

}
 
// link the buttons in home page to this page.
function getLocation(){
let locationPrice=localStorage.getItem('namePrice');
let getLocationPrice=JSON.parse(locationPrice);
if(getLocationPrice){
namePrice=getLocationPrice;
}
}

let price=1;

function totalPrice(){
  
  if(namePrice[1]){
   price=parseInt(event.target.numberofvisitors.value)*parseInt(namePrice[1]);
    
  }
 return price;
}


