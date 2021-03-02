// 'use strict';



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
let firstimg=document.getElementById('img1');
let secoundimg=document.getElementById('img2');
let therdimg=document.getElementById('img3');
let imges=document.getElementById('imges');
let results=document.getElementById('resultsList');
 let imgarr=[];
 let imagname=[];
 let maxclick=6;
 function randomTrip (name,source){
     this.name=name;
     this.source=source;
     this.clickCounter=0;
     imgarr.push(this)
     imagname.push(this.name);
    }
 new randomTrip ('SeaAdventure','img/seaAdevnture.png');
 new randomTrip ('SkyAdventure','img/skyAdventure.jpeg');
 new randomTrip ('Natural','img/naturalAdventure.jpg');
 new randomTrip ( 'Dead Sea','img/Dead sea.jpg');
 new randomTrip ('Camping','img/camping.jpg');
 new randomTrip ('HistoryAdventure','img/historyAdventure.jpg');

 function generateRandomIndex(){   
  let randomIndex = Math.floor(Math.random() *imgarr.length); 
  return randomIndex;
  }
let firstImgIndex;
let secImgIndex;
let trdImgIndex;
let previousShownImg=[];
function renderRandomImages(){
  firstImgIndex = generateRandomIndex(); 
  secImgIndex=generateRandomIndex();
  trdImgIndex = generateRandomIndex(); 
    
    while(firstImgIndex=== secImgIndex || secImgIndex === trdImgIndex ||trdImgIndex===firstImgIndex||previousShownImg.includes(firstImgIndex)||previousShownImg.includes(secImgIndex)||previousShownImg.includes(trdImgIndex)){
       firstImgIndex= generateRandomIndex(); 
        secImgIndex=generateRandomIndex();
        trdImgIndex=generateRandomIndex();

    }
    previousShownImg[0]=firstImgIndex;
    previousShownImg[1]=secImgIndex;
    previousShownImg[2]=trdImgIndex;
    firstimg.setAttribute('src', imgarr[firstImgIndex].source); 
   secoundimg.setAttribute('src',imgarr[secImgIndex].source);
   therdimg.setAttribute('src', imgarr[trdImgIndex].source);

}
renderRandomImages();


firstimg.addEventListener('click', handleClick);
secoundimg.addEventListener('click', handleClick)
therdimg.addEventListener('click', handleClick);
let calclicks=0;
function handleClick(event){
    event.preventDefault();   
    calclicks ++;
    if(calclicks<=maxclick){
        if(event.target.id === 'img1'){
            imgarr[firstImgIndex].clickCounter++;
        }else if (event.target.id ==='img2'){
            imgarr[secImgIndex].clickCounter++;
        } else if(event.target.id ==='img3'){
            imgarr[trdImgIndex].clickCounter++;
        }
      
        renderRandomImages();  
        }
    }
    let button =document.getElementById('button');
    button.addEventListener('click',tripAdviser);
    let monthArr=['2021-01','2021-02','2021-03','2021-04','2021-05','2021-06','2021-07','2021-08','2021-09','2021-10','2021-11','2021-12']
    function tripAdviser (event){
        event.preventDefault();
        let month = document.getElementById("date").value;
        let index = monthArr.indexOf(month);
        console.log(index);
        console.log(imgarr[0].clickCounter);
        console.log(imgarr[1].clickCounter);
        console.log(imgarr[2].clickCounter);
        console.log(imgarr[3].clickCounter);
        console.log(imgarr[4].clickCounter);
        console.log(imgarr[5].clickCounter);
        //month 1-3
          if (imgarr[0].clickCounter>=1 && (index>=0&&index<=2)){
            // console.log('you can go to Aqaba ');
            let paragraph=document.createElement('p');
            results.appendChild(paragraph);
            paragraph.textContent='It\'s the best time for you to go on an adventure in Aqaba';

          }
          //month 4-5
          if((index>=3&&index<=4)&&imgarr[1].clickCounter>=1){
         // console.log("you can go to wadi rum");
         let paragraph=document.createElement('p');
         results.appendChild(paragraph);
         paragraph.textContent='It\'s the best time for you to go on an adventure in Wadi Rum';
          }
          // month6-9
          if((index>=5&&index<=8)&&(imgarr[2].clickCounter>=1||imgarr[5].clickCounter>=1)){
            let paragraph=document.createElement('p');
           results.appendChild(paragraph);
           paragraph.textContent='It\'s the best time for you to go on an adventure in Jerash';

           //console.log('you can go jearsh');
          }
          if(index ==9  && imgarr[4].clickCounter>=1){
           //console.log('you can go to petra or wadi rim');
           let paragraph=document.createElement('p');
           results.appendChild(paragraph);
           paragraph.textContent='It\'s the best time for you to go on an adventure in Amman';
          }
          //month 11-12
          if((index>=10&&index<=11)&&imgarr[3].clickCounter>=1){
         //console.log('its time to visit the dead sea')
         let paragraph=document.createElement('p');
         results.appendChild(paragraph);
         paragraph.textContent='It\'s the best time for you to go on an adventure in the Deadsea';
          }
        
        firstimg.removeEventListener('click', handleClick);
       secoundimg.removeEventListener('click',handleClick);
      therdimg.removeEventListener('click', handleClick); 

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

