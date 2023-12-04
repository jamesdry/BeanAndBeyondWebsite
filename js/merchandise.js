function openSideBar() {
  document.getElementById("offcanvas").style.width = "100%";
}

function closeSideBar() {
  document.getElementById("offcanvas").style.width = "0%";
}

var image = document.querySelector("#cup img");
document.getElementById("designMenu").onchange = function () {
  console.log(selectOption.selectedIndex);
  image.src = document.getElementById(
    this.options[this.selectedIndex].getAttribute("data-img")
  ).src;
};

document.getElementById("clickRedColor").onclick = function () {
  if (selectOption.selectedIndex == 0) {
    image.src = document.getElementById("redCupWithLogo").src;
  } else if (selectOption.selectedIndex == 1) {
    image.src = document.getElementById("redCupWithoutLogo").src;
  }
};

document.getElementById("clickOrangeColor").onclick = function () {
  if (selectOption.selectedIndex == 0) {
    image.src = document.getElementById("orangeCupWithLogo").src;
  } else if (selectOption.selectedIndex == 1) {
    image.src = document.getElementById("orangeCupWithoutLogo").src;
  }
};

document.getElementById("clickYellowColor").onclick = function () {
  if (selectOption.selectedIndex == 0) {
    image.src = document.getElementById("yellowCupWithLogo").src;
  } else if (selectOption.selectedIndex == 1) {
    image.src = document.getElementById("yellowCupWithoutLogo").src;
  }
};

document.getElementById("clickGreenColor").onclick = function () {
  if (selectOption.selectedIndex == 0) {
    image.src = document.getElementById("greenCupWithLogo").src;
  } else if (selectOption.selectedIndex == 1) {
    image.src = document.getElementById("greenCupWithoutLogo").src;
  }
};

document.getElementById("clickBlueColor").onclick = function () {
  if (selectOption.selectedIndex == 0) {
    image.src = document.getElementById("blueCupWithLogo").src;
  } else if (selectOption.selectedIndex == 1) {
    image.src = document.getElementById("blueCupWithoutLogo").src;
  }
};

document.getElementById("clickVanillaColor").onclick = function () {
  if (selectOption.selectedIndex == 0) {
    image.src = document.getElementById("vanillaCupWithLogo").src;
  } else if (selectOption.selectedIndex == 1) {
    image.src = document.getElementById("vanillaCupWithoutLogo").src;
  }
};

document.getElementById("clickPurpleColor").onclick = function () {
  if (selectOption.selectedIndex == 0) {
    image.src = document.getElementById("purpleCupWithLogo").src;
  } else if (selectOption.selectedIndex == 1) {
    image.src = document.getElementById("purpleCupWithoutLogo").src;
  }
};

// select option validation
const selectOption = document.getElementById("designMenu");

const cupColor = document.getElementById("cupColor");
const cupColorPicker = document.getElementById("cupColorPicker");
const saveChangesButton = (document.getElementById("saveChanges").onclick =
  function () {
    selectOption.disabled = true;
    cupColor.style.display = "block";
    cupColorPicker.style.display = "block";
  });

const resetButton = (document.getElementById("reset").onclick = function () {
  selectOption.disabled = false;
  cupColor.style.display = "none";
  cupColorPicker.style.display = "none";
  selectOption.selectedIndex = 1;
  image.src = document.getElementById("withoutLogo").src;
});

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
    } else {
      entry.target.classList.remove("show");
    }
  });
});

const hidden = document.querySelectorAll(".animate");
hidden.forEach((element) => observer.observe(element));
