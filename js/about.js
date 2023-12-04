function openSideBar() {
  document.getElementById("offcanvas").style.width = "100%";
}

function closeSideBar() {
  document.getElementById("offcanvas").style.width = "0%";
}

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
    } else {
      entry.target.classList.remove("show");
    }
  });
});

const hidden = document.querySelectorAll(".hidden");
hidden.forEach((element) => observer.observe(element));

const title = document.querySelector(".title");

function getScrollAmount() {
  let titleWidth = title.scrollWidth;
  return -(titleWidth - window.innerWidth);
}

const tween = gsap.to(title, {
  x: getScrollAmount,
  duration: 3,
  ease: "none",
});

ScrollTrigger.create({
  trigger: ".wrapper",
  start: "top 10%",
  pin: true,
  animation: tween,
  scrub: 1,
  invalidateOnRefresh: true,
});

const details = gsap.utils.toArray(".desktopContentSection:not(:first-child)");
const photos = gsap.utils.toArray(".desktopPhoto:not(:first-child)");
const allPhotos = gsap.utils.toArray(".desktopPhoto");

gsap.set(photos, { yPercent: 101 });

let mm = gsap.matchMedia();

mm.add("(min-width: 600px)", () => {
  ScrollTrigger.create({
    trigger: ".gallery",
    start: "top top",
    end: "bottom bottom",
    pin: ".right",
  });

  details.forEach((detail, index) => {
    let headline = detail.querySelector("h1");
    let animation = gsap
      .timeline()
      .to(photos[index], { yPercent: 0 })
      .set(allPhotos[index], { autoAlpha: 0 });
    ScrollTrigger.create({
      trigger: headline,
      start: "top 100%",
      end: "top 80%",
      animation: animation,
      scrub: true,
      markers: false,
    });
  });
});
