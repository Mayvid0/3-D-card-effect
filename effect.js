const card = document.querySelector('.card');
const container = document.querySelector('.container');
const info = document.querySelector('.info')
const img = document.querySelector('.headphone')

container.addEventListener('mousemove',(e)=>{
    let xAxis= (window.innerWidth/2 - e.pageX/15);
    let yAxis= (window.innerHeight/2 - e.pageY/15);
    card.style.transform= `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`;
});
container.addEventListener('mouseenter',(e)=>{
    card.style.transition='none';
    info.style.transform='translateZ(100px)'
    img.style.transform='translateZ(150px) '
})
container.addEventListener('mouseleave',(e)=>{
    card.style.transition='all 0.5 ease';
})

container.addEventListener('mouseleave',(e)=>{
    card.style.transform=`rotateY(0deg) rotateX(0deg)`;
})