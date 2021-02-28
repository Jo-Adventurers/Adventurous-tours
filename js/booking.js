`use strict`;

let container=document.getElementById("formBox");
let submit =document.getElementById("submit");
submit.addEventListener('submit',booking);

function booking(event){
    event.preventDefault();
    let locationName=event.target.locationName.value;
    let yourname=event.target.yourname.value;
    let phonenumber=event.target.phonenumber.value;
    let email=event.target.email.value;
    let numberofvisitors=event.target.numberofvisitors.value;

    let Mansaf=event.target.Mansaf.checked;
    let Makmora=event.target.Makmora.checked;
    let Barbecue=event.target.Barbecue.checked;
    let Seafood=event.target.Seafood.checked;
    
    console.log(Mansaf);
}


    function BookingAdventure(locationName,yourname,phonenumber,numberofvisitors,meal){
         this.locationName=locationName;
         this.yourname=yourname;
         this.phonenumber=phonenumber;
         this.numberofvisitors=numberofvisitors;
         this.meal=meal;

}