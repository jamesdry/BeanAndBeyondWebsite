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

const hidden = document.querySelectorAll(".animateText");
hidden.forEach((element) => observer.observe(element));

let category1 = gsap.utils.toArray(".item");
let category2 = gsap.utils.toArray(".item2");
let category3 = gsap.utils.toArray(".item3");
let category4 = gsap.utils.toArray(".item4");

gsap.to(category1, {
  xPercent: -100 * (category1.length - 1),
  ease: "none",
  scrollTrigger: {
    trigger: ".category",
    pin: true,
    scrub: 1,
    snap: 1 / (category1.length - 1),
  },
});

gsap.to(category2, {
  xPercent: -100 * (category2.length - 1),
  ease: "none",
  scrollTrigger: {
    trigger: ".category2",
    pin: true,
    scrub: 1,
    snap: 1 / (category2.length - 1),
  },
});

gsap.to(category3, {
  xPercent: -100 * (category3.length - 1),
  ease: "none",
  scrollTrigger: {
    trigger: ".category3",
    pin: true,
    scrub: 1,
    snap: 1 / (category3.length - 1),
  },
});

gsap.to(category4, {
  xPercent: -100 * (category4.length - 1),
  ease: "none",
  scrollTrigger: {
    trigger: ".category4",
    pin: true,
    scrub: 1,
    snap: 1 / (category4.length - 1),
  },
});
