gsap.registerPlugin(ScrollTrigger);

const t1 = gsap.timeline({
  scrollTrigger: {
    tirgger: ".box",
    markers: true,
    start: "top top",
    end: "bottom top",
    scrub: true,
  },
});

t1.fromTo(".box", { x: 0, opacity: 0 }, { x: 300, opacity: 1, duration: 2 });
