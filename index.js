const track = document.getElementById("image-track"); //to know the current position of mouse pointer
const trailer=document.getElementById("trailer");

//invisible slider
window.addEventListener("mousedown", (e) => {
  track.dataset.mouseDownAt = e.clientX;
});

window.addEventListener("mouseup", () => {
  track.dataset.mouseDownAt = "0";
  track.dataset.prevPercent = track.dataset.percent;
});

const getTrailerClass= type =>{
    switch(type){
        default:
            return "fa fa-arrow-right center";

    }
}

const animateTrailer = (e,interacting) =>{
     let x= e.clientX -trailer.offsetWidth/2,
         y= e.clientY - trailer.offsetHeight/2;
    
    let keyframes ={
      transform :`translate(${x}px ,${y}px)  scale(${interacting ? 4 : 1})` 
    }
    trailer.animate(keyframes,{
        duration : 800 ,fill:"forwards" //retains the state after animation
    });
    
}

window.addEventListener("mousemove", (e) =>{

    const interactable = e.target.closest(".interactable"),
          interacting = interactable !==null;

    let icon = document.getElementById("trailer-icon");
     animateTrailer(e,interacting);

    trailer.dataset.type= interacting? interactable.dataset.type : "";

    if(interacting){
        icon.className= getTrailerClass(interactable.dataset.type);
    }

  if (track.dataset.mouseDownAt === "0") return;

  let mouseCurrDistance = parseFloat(track.dataset.mouseDownAt) - e.clientX;
   const mouseMaxDistance = window.innerWidth / 2;

  let percent =  (mouseCurrDistance / mouseMaxDistance) * -100;

  let nextPercent = parseFloat(track.dataset.prevPercent) + percent;
    nextPercent = Math.min(Math.max(nextPercent,-110),10);

  for (const image of track.getElementsByClassName("image")) {
    image.animate(
        {
          objectPosition: `${nextPercent + 100}% center`,
        },
        { duration: 1200, fill: "forwards" }
      );
  }

  track.dataset.percent = nextPercent;

  track.animate(
    {
      transform: `translate(${nextPercent}%,-50%)`,
    },
    { duration: 1200, fill: "forwards" }
  );

});

function openModal(imageUrl) {
  window.location.href = `card.html?imageUrl=${encodeURIComponent(imageUrl)}`;
}




