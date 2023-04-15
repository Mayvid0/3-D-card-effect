const track = document.getElementById("image-track"); //to know the current position of mouse pointer
const trailer=document.getElementById("trailer");

//invisible slider
window.onmousedown = (e) => {
  track.dataset.mouseDownAt = e.clientX;
};

window.onmouseup = () => {
  track.dataset.mouseDownAt = "0";
  track.dataset.prevPercent = track.dataset.percent;
};

window.onmousemove = (e) => {

  //mouse movement effect
  const x= e.clientX -trailer.offsetWidth/2,
        y= e.clientY - trailer.offsetHeight/2;

  const keyframes ={
    transform :`translate(${x}px ,${y}px)`
  }
  trailer.animate(keyframes,{
      duration : 800 ,fill:"forwards" //retains the state after animation
  });


  

  if (track.dataset.mouseDownAt === "0") return;

  const mouseCurrDistance = parseFloat(track.dataset.mouseDownAt) - e.clientX,
    mouseMaxDistance = window.innerWidth / 2;

  const percent = -1 * (mouseCurrDistance / mouseMaxDistance) * 100;

  const nextPercent = parseFloat(track.dataset.prevPercent) + percent;

  for (const image of track.getElementsByClassName("image")) {
    image.style.objectPosition = `${nextPercent + 100}% 50%`;
  }

  track.dataset.percent = nextPercent;

  track.animate(
    {
      transform: `translate(${nextPercent}%,-50%)`,
    },
    { duration: 1200, fill: "forwards" }
  );

  image.animate(
    {
      objectPosition: `${nextPercent + 100}% center`,
    },
    { duration: 1200, fill: "forwards" }
  );
};




