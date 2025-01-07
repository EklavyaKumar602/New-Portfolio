const left=document.querySelector('.left');
const right=document.querySelector('.right');
const slider=document.querySelector('.slider');

const images=document.querySelectorAll('.image')
let slideNumber= 1;
const length=images.length;
const nextSlide=()=>{
    slider.style.transform = `translateX(-${slideNumber*800}px)`;
    slideNumber++;
}
const preSlide=()=>{
    slider.style.transform = `translateX(-${(slideNumber-2)*800}px)`;
    slideNumber--;
}

right.addEventListener('click',()=>{
    if(slideNumber<length){
        nextSlide();
    }else{
        slider.style.transform = `translateX(0px)`;
    slideNumber=1;
    }
    
});

left.addEventListener('click',()=>{
    if(slideNumber>1){
        preSlide();
    }else{
        slider.style.transform = `translateX(-${(length-1)*800}px)`;
    slideNumber=length;
    }
    
});
btnclk=document.querySelector('.btnclk')
menu=document.querySelector('.menu')
unli=document.querySelector('.unli')

btnclk.addEventListener('click',()=>{
    menu.classList.toggle('mnu')
    unli.classList.toggle('li')
});
