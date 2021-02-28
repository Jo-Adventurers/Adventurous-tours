`use strict`;

let container=document.getElementById("form");
let submit =document.getElementById("submit");
submit.addEventListener("click",booking);

function booking(event){
    console.log(event);
    event.preventDefault();
    let locationName=event.target.locationName.value;
    let yourname=event.target.yourname.value;
    let phonenumber= event.target.phonenumber.value;
    let email=event.target.email.value;
    let numberofvisitors=event.target.numberofvisitors.value;

    let Mansaf=event.target.Mansaf.checked;
    let Makmora=event.target.Makmora.checked;
    let Barbecue=event.target.Barbecue.checked;
    let Seafood=event.target.Seafood.checked;
    
    console.log(Mansaf);
    console.log(event);
    console.log(locationName);
}


    function AdventureBooking(locationName,yourname,phonenumber,numberofvisitors,meal){
         this.locationName=locationName;
         this.yourname=yourname;
         this.phonenumber=phonenumber;
         this.numberofvisitors=numberofvisitors;
         this.meal=meal;

}