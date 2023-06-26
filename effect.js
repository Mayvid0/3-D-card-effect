const card = document.querySelector('.card');
const container = document.querySelector('.container');
const info = document.querySelector('.info')
const img = document.querySelector('.headphone')
const title= document.querySelector('.title')
const cost = document.querySelector('.cost')

container.addEventListener('mousemove',(e)=>{
    let xAxis= (window.innerWidth/2 - e.pageX)/15;
    let yAxis= (window.innerHeight/2 - e.pageY)/15;
    card.style.transform= `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`;
});
container.addEventListener('mouseenter',(e)=>{
    card.style.transition='none';
    info.style.transform='translateZ(100px)'
    img.style.transform='translateZ(150px) '
})
container.addEventListener('mouseleave',(e)=>{
    card.style.transition='all 0.1 ease-in-out';
})

container.addEventListener('mouseleave',(e)=>{
    card.style.transform=`rotateY(0deg) rotateX(0deg)`;
})



const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
const imageUrl = urlParams.get('imageUrl');
const name = urlParams.get('name');
const cos= urlParams.get('cost')

// Display the clicked image on the page
const displayedImage = document.getElementById('displayed-image');
displayedImage.src = imageUrl;
title.textContent= name;
cost.textContent= cos;