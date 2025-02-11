//gsap.to(target,{How});

// // ~로
// gsap.to(".box", {
//   backgroundColor: "pink",
//   x: 100,
//   stagger: 0.5,
//   duration: 1, // 걸리는 시간 1초
// });

// ~로부터 시작해서 돌아가라
// gsap.from(".box", {
//   backgroundColor: "pink",
//   x: 100,
//   stagger: 0.5,
//   duration: 1, // 걸리는 시간 1초
// });

// ~에서 ~로

const tl = gsap.timeline();
tl.to(".box", { x: 100, duration: 1 });
tl.to(".box", { y: 100, duration: 1 });
tl.to(".circle", { x: 100, duration: 1 });

const tl1 = gsap.timeline();
tl1.to(".bigBox", { x: 100, duration: 1 });
