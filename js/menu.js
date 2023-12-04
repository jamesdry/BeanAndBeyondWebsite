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
