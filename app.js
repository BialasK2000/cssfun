const hamburger = document.querySelector('.header .nav-bar .nav-list .hamburger');
const mobile_menu = document.querySelector('.header .nav-bar .nav-list ul');
const menu_item = document.querySelectorAll('.header .nav-bar .nav-list ul li a');
const header = document.querySelector('.header.container');

hamburger.addEventListener('click', ()=>{
    hamburger.classList.toggle('active');
    mobile_menu.classList.toggle('active');
});

document.addEventListener('scroll', ()=>{
    var scroll_position = window.scrollY;
    if(scroll_position > 230){
        header.style.backgroundColor = "#29323c";
    }else{
        header.style.backgroundColor = "transparent";
    }
});

menu_item.forEach((item)=> {
    item.addEventListener('click',()=>{
        hamburger.classList.toggle('active');
        mobile_menu.classList.toggle('active');
    });
});

let more = document.querySelector('.more');
let more1 = document.querySelector('.more1');
let more2 = document.querySelector('.more2');
let more3 = document.querySelector('.more3');
let more4 = document.querySelector('.more4');
let audioArr = document.getElementsByTagName('audio');
console.log(audioArr);
let audioArr1 = document.getElementsByTagName('audio');
console.log(audioArr1);
let audioArr2 = document.getElementsByTagName('audio');
console.log(audioArr2);
let audioArr3 = document.getElementsByTagName('audio');
console.log(audioArr3);
let audioArr4 = document.getElementsByTagName('audio');
console.log(audioArr4);
more.addEventListener('mouseenter', ()=>{
    audioArr[0].play()
});
more1.addEventListener('mouseenter', ()=>{
    audioArr1[0].play()
});
more2.addEventListener('mouseenter', ()=>{
    audioArr1[0].play()
});
more3.addEventListener('mouseenter', ()=>{
    audioArr1[0].play()
});
more4.addEventListener('mouseenter', ()=>{
    audioArr1[0].play()
});