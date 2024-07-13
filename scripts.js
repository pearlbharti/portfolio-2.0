/* -- Carousel Navigation -- */

let activeIndex = 0;

const slides = document.getElementsByTagName("article");

const handleLeftClick = () => {
  const nextIndex = activeIndex - 1 >= 0 ? activeIndex - 1 : slides.length - 1;

  const currentSlide = document.querySelector(`[data-index="${activeIndex}"]`),
    nextSlide = document.querySelector(`[data-index="${nextIndex}"]`);

  currentSlide.dataset.status = "after";

  nextSlide.dataset.status = "becoming-active-from-before";

  setTimeout(() => {
    nextSlide.dataset.status = "active";
    activeIndex = nextIndex;
  });
}

const handleRightClick = () => {
  const nextIndex = activeIndex + 1 <= slides.length - 1 ? activeIndex + 1 : 0;

  const currentSlide = document.querySelector(`[data-index="${activeIndex}"]`),
    nextSlide = document.querySelector(`[data-index="${nextIndex}"]`);

  currentSlide.dataset.status = "before";

  nextSlide.dataset.status = "becoming-active-from-after";

  setTimeout(() => {
    nextSlide.dataset.status = "active";
    activeIndex = nextIndex;
  });
}



/* -- Mobile Nav Toggle -- */

const nav = document.querySelector("nav");

const handleNavToggle = () => {
  nav.dataset.transitionable = "true";

  nav.dataset.toggled = nav.dataset.toggled === "true" ? "false" : "true";
}

window.matchMedia("(max-width: 800px)").onchange = e => {
  nav.dataset.transitionable = "false";

  nav.dataset.toggled = "false";
};


const eyes = document.querySelectorAll('#eyes img')
const anchor = document.getElementById('anchor')
const rekt = anchor.getBoundingClientRect();
const anchorX = rekt.left + rekt.width / 2;
const anchorY = rekt.top + rekt.height / 2;

document.addEventListener('mousemove', (e) => {

  const mouseX = e.clientX;
  const mouseY = e.clientY;

  const angleDeg = angle(mouseX, mouseY, anchorX, anchorY);

  console.log(angleDeg)


  eyes.forEach(eye => {
    eye.style.transform = `rotate(${90 + angleDeg}deg)`;
    anchor.style.filter = `hue-rotate(${angleDeg}deg)`;

  })

})

function angle(cx, cy, ex, ey) {
  const dy = ey - cy;
  const dx = ex - cx;
  const rad = Math.atan2(dy, dx);
  const deg = rad * 180 / Math.PI;
  return deg;

}

// Cursor

const cursor = document.createElement('div');
cursor.className = 'cursor';
document.body.appendChild(cursor);

const cursorF = document.createElement('div');
cursorF.className = 'cursor-f';
cursor.appendChild(cursorF);

let cursorX = 0;
let cursorY = 0;
let pageX = 0;
let pageY = 0;

document.addEventListener('mouseleave', function () {
  cursor.classList.add('hidden');
});

document.addEventListener('mouseenter', function () {
  cursor.classList.remove('hidden');
});

document.addEventListener('mousemove', function (e) {
  pageX = e.clientX;
  pageY = e.clientY;
  gsap.to(cursor, { duration: .01, left: e.clientX - 4, top: e.clientY - 4 });
});

function lerp(start, end, amount) {
  return (1 - amount) * start + amount * end
}
// hi pearl

function loop() {
  if (cursorX !== pageX || cursorY !== pageY) {
    cursorX = lerp(cursorX, pageX, .2);
    cursorY = lerp(cursorY, pageY, .2);
    gsap.to(cursorF, { duration: .01, left: cursorX - 10, top: cursorY - 10 });
  }
  requestAnimationFrame(loop);
}

loop();

/*--toggle bg--*/
const toggle = document.getElementById('toggleDark');
const body = document.querySelector('body');

toggle.addEventListener('click', function(){
    this.classList.toggle('bi-moon');
    if(this.classList.toggle('bi-brightness-high-fill')){
        body.style.background = 'white';
        body.style.color = 'black';
        body.style.transition = '2s';
    }else{
        body.style.background = 'black';
        body.style.color = 'white';
        body.style.transition = '2s';
    }
});
