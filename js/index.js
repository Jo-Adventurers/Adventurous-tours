'use strict';



// to make the slide apper?

let slideshow1 = document.getElementById("slideshow1");
slideshow1.currentSlideIndex = 1;
showSlides(slideshow1.currentSlideIndex, slideshow1);

let  slideshow2 = document.getElementById("slideshow2");
slideshow2.currentSlideIndex = 1;
showSlides(slideshow2.currentSlideIndex, slideshow2);

let slideshow3=document.getElementById('slideshow3');
slideshow3.currentSlideIndex= 1;
showSlides(slideshow3.currentSlideIndex,slideshow3)

let slideshow4=document.getElementById('slideshow4');
slideshow4.currentSlideIndex= 1;
showSlides(slideshow4.currentSlideIndex,slideshow4)



let slideshow5=document.getElementById('slideshow5');
slideshow5.currentSlideIndex= 1;
showSlides(slideshow5.currentSlideIndex,slideshow5)

function plusSlides(n, slideshow) {
  showSlides(slideshow.currentSlideIndex += n, slideshow);
}

function currentSlide(n, slideshow) {
  showSlides(slideshow.currentSlideIndex = n, slideshow);
}

function showSlides(n, slideshow) {
  


 let i;
  let  slides = slideshow.getElementsByClassName("mySlides");
 
  if (n > slides.length) {slideshow.currentSlideIndex = 1}    
  if (n < 1) {slideshow.currentSlideIndex = slides.length}
  if (n < 2 ){slideshow.currentSlideIndex= slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";  
  }

  slides[slideshow.currentSlideIndex-1].style.display = "block";  

}
 
//  trip genretar
let firstimg=document.getElementById('img1')
let secoundimg=document.getElementById('img2')
let therdimg=document.getElementById('img3')
let imges=document.getElementById('imges')
let firstImgIndex;
let SecImgIndex;
let TrdImgIndex;
let imgarr=[];
let inlinearr=[];
let maxclick=0


 function RandomTrip (name,source){
   this.name=name
   this.source=source
   this.click=0;
   imgarr.push(this)
 }
 
 new RandomTrip ('diving','img/diving rand.jpg')
 new RandomTrip ('hiking','img/hiking rand.jpg')
 new RandomTrip ('skydiving','img/skydiving rand.jpg')
 new RandomTrip ( 'wadi','img/wadi ran.jpg')
 new RandomTrip ('petra','img/jordan-top-attractions-petra.jpg')
 new RandomTrip ('rum','img/jordan-top-attractions-wadi-rum.jpg')


 function genretarRandomImg(){
   let randomindex = Math.floor(Math.random()*imgarr.length )
   inlinearr[0]=firstImgIndex
   inlinearr[1]=SecImgIndex
   inlinearr[2]=TrdImgIndex

   while(inlinearr.includes(randomindex)){
    randomindex = Math.floor(Math.random()*imgarr.length )
   }
   return randomindex
 }
 console.log(genretarRandomImg)

 function renderImgs(){
   firstImgIndex=genretarRandomImg();
   SecImgIndex=genretarRandomImg();
   TrdImgIndex=genretarRandomImg();
   while (firstImgIndex === SecImgIndex || firstImgIndex === TrdImgIndex || SecImgIndex === TrdImgIndex){
      
   

firstImgIndex=genretarRandomImg();
SecImgIndex=genretarRandomImg();

}
firstimg.setAttribute('src', imgarr[firstImgIndex].source); 
secoundimg.setAttribute('src', imgarr[SecImgIndex].source);
therdimg.setAttribute('src',imgarr[TrdImgIndex].source);
 }

genretarRandomImg();
renderImgs();
imges.addEventListener('click', handleClicking)

function handleClicking(event){
  console.log(imgarr);
  while(maxclick<2){
  if(event.target.id==img1){imgarr[firstImgIndex].click++;}
  else if(event.target.id==img2){imgarr[SecImgIndex].click++;}
  else{imgarr[TrdImgIndex].click++;}
  
renderImgs();
imgarr[firstImgIndex].click=0
imgarr[SecImgIndex].click=0
imgarr[TrdImgIndex].click=0
 maxclick++ }
imges.removeEventListener('click', handleClicking)
}


let button =document.getElementById('button');
button.addEventListener('click',tripAdviser);
let monthArr=['2021-01','2021-02','2021-03','2021-04','2021-05','2021-06','2021-07','2021-08','2021-09','2021-10','2021-11','2021-12']





// console.log(date12)

function tripAdviser(event){

  let month = document.getElementById("date").value;
  let index = monthArr.indexOf(month) + 1;
  if (((index >= 1 && index <= 4 )|| (index>=11 &&index<=12))&& (imgarr[3].click >=1 ||imgarr[4].click >=1 ||imgarr[5].click >=1)) {
    console.log("cold");
  } else if ((index >=5 && index <= 10) && (imgarr[0].click >=1 ||imgarr[1].click >=1 ||imgarr[2].click >=1)) {
    console.log("hot");
  } else {
    console.log("whatever");
  }

}




//Work to link the buttons to the book now page

let buttonOne=document.getElementById('buttonOne');
buttonOne.addEventListener('click',southJordan);

function southJordan(event){
  event.preventDefault();

  let namePrice=["South Jordan",50];
  localStorage.setItem('namePrice',JSON.stringify(namePrice));
  buttonOne.removeEventListener('click',southJordan);

}

let buttonTwo=document.getElementById('buttonTwo');
buttonTwo.addEventListener('click',amman);

function amman(event){
  event.preventDefault();

  let namePrice=["Amman",40];
  localStorage.setItem('namePrice',JSON.stringify(namePrice));
  buttonTwo.removeEventListener('click',amman);
}
let buttonThree=document.getElementById('buttonThree');
buttonThree.addEventListener('click',northJordan);

function northJordan(event){
  event.preventDefault();

  let namePrice=["north Jordan",50];
  localStorage.setItem('namePrice',JSON.stringify(namePrice));
  buttonThree.removeEventListener('click',northJordan);
}

