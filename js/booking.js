`use strict`;

let dt = new Date();
document.getElementById("datetime").innerHTML = dt.toLocaleString();

const form = document.getElementById("form");
const infoBox =document.getElementById("infoBox");
form.addEventListener("submit", booking);
let numofvisitors=document.getElementById('numberofvisitors');
// numofvisitors.addEventListener('input',capacityOfAdventure());

let arrayOfObject = [];
let meals = [];

const maximumClick=20;
let maxClick=1;

let capacity=0;
let maximumCapacity=20;


getLocation();
showlocalStorage();

function booking(event) {
  event.preventDefault();
  // console.log(event);
 let boolean =checkCapacityOfAdventure();
 if(boolean)
 {createAlert()}
 else{

// take the value from the form 
while(maxClick<2){

  let locationName = event.target.locationName.value;
  let yourname = event.target.yourname.value;
  let phonenumber = parseInt(event.target.phonenumber.value);
  let email = event.target.email.value;
  let numberofvisitors = parseInt(event.target.numberofvisitors.value);
  totalPrice();
  let numberOfMealsMansaf=1;
  let numberOfMealsMakmora=1;
  let numberOfMealsBarbecue=1;
  let numberOfMealsSeafood=1;

if(event.target.numberOfMealsMansaf.value){
  numberOfMealsMansaf=event.target.numberOfMealsMansaf.value}
  if (event.target.Mansaf.checked) {
    meals.push("Mansaf");
    price+=5*numberOfMealsMansaf;
  }

  if(event.target.numberOfMealsMakmora.value){
    numberOfMealsMakmora=event.target.numberOfMealsMakmora.value}
  if (event.target.Makmora.checked) {
    meals.push("Makmora");

    price+=8*numberOfMealsMakmora;
  }

  if(event.target.numberOfMealsBarbecue.value){
    numberOfMealsBarbecue=event.target.numberOfMealsBarbecue.value}
  if (event.target.Barbecue.checked) {
    meals.push("Barbecue");
    price+=10*numberOfMealsBarbecue;
  }

  if(event.target.numberOfMealsSeafood.value){
    numberOfMealsSeafood=event.target.numberOfMealsSeafood.value}
  if (event.target.Seafood.checked) {
    meals.push("Seafood");
    price+=15*numberOfMealsSeafood;
  }

  // console.log(meals);

  // create new object and assign parameter
  new AdventureBooking(locationName,yourname,phonenumber,email,numberofvisitors,meals);
 // saveToLocalStorage();
  createInfoBox();
  maxClick++;
}
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


getLocation();

// create info box in the page
function createInfoBox(){
  let image=document.createElement('img')
   image.src="https://www.flaticon.com/svg/vstatic/svg/678/678307.svg?token=exp=1614588131~hmac=4872293fec7a4df70fcc61bbbe27f66d";
    infoBox.appendChild(image);
    let ulEl=document.createElement('ul');
    infoBox.appendChild(ulEl);

    let liE=document.createElement('li');
    ulEl.appendChild(liE);
    liE.textContent=`your trip in  ${setTimeOfTrip()}`;

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

// get information from local storage
function getLocation(){
let locationPrice=localStorage.getItem('namePrice');
let getLocationPrice=JSON.parse(locationPrice);
if(getLocationPrice){
namePrice=getLocationPrice;
}
}

// price of the adventure
let price=0;
function totalPrice(){
  
  if(namePrice[1]){
   price+=parseInt(event.target.numberofvisitors.value)*parseInt(namePrice[1]);
    
  }
 return price;
}

// set the name of location from home page in the location input
function showlocalStorage(){
  if (namePrice[0]){
    let locationName=document.getElementById('locationName');
    locationName.value= namePrice[0]; 
  }
}

// check the capacity of number of visitors
function checkCapacityOfAdventure(){

  capacity+=parseInt( numofvisitors.value);

  if(capacity>maximumCapacity){
    return true;
  }
  console.log(capacity);
return false;
  
}

// tell the user can't go to this trip
function createAlert(){
  let paragraphEl=document.createElement('p');
  infoBox.appendChild(paragraphEl);
  paragraphEl.textContent=`not allowed to going to this trip because the maximum capacity is 20`;
}

// date of adventure
function setTimeOfTrip(){
  let timeOFTrip= dt;
  timeOFTrip.setDate(15);
  timeOFTrip.setHours(8,0,0)
  return timeOFTrip.toLocaleString();
}

