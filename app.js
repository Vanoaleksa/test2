const slider = document.querySelector(".slider-inner");

let sliderGrabbed = false;

slider.addEventListener("mousedown", (e) => {
  sliderGrabbed = true;
  slider.style.cursor = "grabbing";
});

slider.addEventListener("mouseup", (e) => {
  sliderGrabbed = false;
  slider.style.cursor = "grab";
});

slider.addEventListener("mouseleave", (e) => {
  sliderGrabbed = false;
});

slider.addEventListener("mousemove", (e) => {
  if (sliderGrabbed) {
    slider.parentElement.scrollLeft -= e.movementX;
  }
});



