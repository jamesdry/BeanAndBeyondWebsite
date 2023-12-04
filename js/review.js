function openSideBar() {
  document.getElementById("offcanvas").style.width = "100%";
}

function closeSideBar() {
  document.getElementById("offcanvas").style.width = "0%";
}

let images = gsap.utils.toArray(".item");

gsap.to(images, {
  xPercent: -100 * (images.length - 1),
  ease: "none",
  scrollTrigger: {
    trigger: ".category",
    pin: true,
    scrub: 1,
    snap: 1 / (images.length - 1),
  },
});
