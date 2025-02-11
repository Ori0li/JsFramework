gsap.registerPlugin(ScrollTrigger);

const ftl = gsap.timeline({
  scrollTrigger: {
    trigger: ".first",
    markers: true,
    scrub: true,
    start: "top top",
    end: "bottom top",
    pin: true,
  },
});

ftl
  .to(".album > img", { rotate: "720deg", scale: 0, borderRadius: "9999px" })
  .to(".album > img", { rotate: "0deg", scale: 1, borderRadius: "0px" });
