// gsap.to(".lt", {
//   top: 0,
//   right: 0,
//   duration: 2,
// });

// gsap.to(".rt", {
//   right: 0,
//   bottom: 0,
//   duration: 2,
// });

// gsap.to(".rb", {
//   bottom: 0,
//   left: 0,
//   duration: 2,
// });

// gsap.to(".lb", {
//   top: 0,
//   right: 0,
//   duration: 2,
// });

const width = window.innerWidth;
const height = window.innerHeight;

gsap.to(".lt", { x: width - 100, duration: 2 });
gsap.to(".rt", { y: height - 100, duration: 2 });
gsap.to(".rb", { x: -width + 100, duration: 2 });
gsap.to(".lb", { y: -height + 100, duration: 2 });
