// TYPED EFFECTS
var typed = new Typed('.tEffect', {
  strings: [
    'Furniture.',
    'Equipment.',
    'Lightings.',
    'Interior Designs.'
  ],
  startDelay: 850,
  typeSpeed: 300,
  backSpeed: 150,
  loop: true,
  showCursor: true,
});



//COUNTER EFFECTS
const counterAnim = (qSelector, start = 0, end, duration = 1000) => {
 const target = document.querySelector(qSelector);
 let startTimestamp = null;
 const step = (timestamp) => {
  if (!startTimestamp) startTimestamp = timestamp;
  const progress = Math.min((timestamp - startTimestamp) / duration, 1);
  target.innerText = Math.floor(progress * (end - start) + start);
  if (progress < 1) {
   window.requestAnimationFrame(step);
  }
 };
 window.requestAnimationFrame(step);
};

document.addEventListener("DOMContentLoaded", () => {
 counterAnim("#count1", 10, 1000, 1000);
 counterAnim("#count2", 1000, 5000, 1500);
 counterAnim("#count3", -1000, 12000, 2000);
 counterAnim("#count4", 500, 15000, 2500);
});




// AOS (ANIMATION ON SCROLL)
AOS.init({
  offset: 120, // offset (in px) from the original trigger point
  delay: 0, // values from 0 to 3000, with step 50ms
  duration: 900, // values from 0 to 3000, with step 50ms
  easing: 'ease', // default easing for AOS animations
  once: false, // whether animation should happen only once - while scrolling down
  mirror: false, // whether elements should animate out while scrolling past them
  anchorPlacement: 'top-bottom', // defines which position of the element regarding to window should trigger the animation
});