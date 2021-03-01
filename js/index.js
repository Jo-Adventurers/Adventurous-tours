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
