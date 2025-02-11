const width = window.innerWidth;
const height = window.innerHeight;

const tl = gsap.timeline();
tl.fromTo(".first", { y: 20, opacity: 0 }, { y: 0, opacity: 1, duration: 0.4 });
tl.fromTo(
  ".second",
  { y: 20, opacity: 0 },
  { y: 0, opacity: 1, duration: 0.4 }
);
tl.fromTo(".third", { y: 20, opacity: 0 }, { y: 0, opacity: 1, duration: 0.4 });

const t2 = gsap.timeline();
t2.fromTo(
  ".sub > h5",
  { y: 20, opacity: 0 },
  { y: 0, opacity: 1, duration: 0.5 }
);

t2.fromTo(
  ".sub > p",
  { y: 20, opacity: 0 },
  { y: 0, opacity: 1, duration: 0.3 }
);
