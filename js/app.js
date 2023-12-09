var loadingScreen;

function loadingScreen() {
  loadingScreen = setTimeout(showHomePage, 4000);
  //4000
}

function showHomePage() {
  document.getElementById("loadingText").style.display = "none";
  document.getElementById("loading").style.display = "none";
  document.getElementById("loadingGIF").style.display = "none";
  document.getElementById("welcomePage").style.display = "block";
  document.getElementById("linkToQuiz").style.display = "block";
  document.getElementById("mouseAnimate").style.display = "block";
  document.getElementById("beansAndBeyondWebsite").style.display = "block";
  document.getElementById("signatureBlend").style.display = "block";
  document.getElementById("hook").style.display = "block";
  document.getElementById("home").style.display = "block";
  document.getElementById("ourPartners").style.display = "block";
  document.getElementById("video").style.display = "block";
  document.getElementById("coffeeShop").style.display = "block";
  document.getElementById("companySummary").style.display = "block";
  document.getElementById("myFooter").style.display = "block";
}

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

const observer2 = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("showText");
    } else {
      entry.target.classList.remove("showText");
    }
  });
});

const hidden = document.querySelectorAll(".hidden");
const hiddenText = document.querySelectorAll(".landingText2");
hidden.forEach((element) => observer.observe(element));
hiddenText.forEach((element) => observer2.observe(element));
