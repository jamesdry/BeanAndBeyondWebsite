function openSideBar() {
  document.getElementById("offcanvas").style.width = "100%";
}

function closeSideBar() {
  document.getElementById("offcanvas").style.width = "0%";
}

// design tumblr
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
const placingOrder = document.getElementById("placeOrder");
const saveChangesButton = (document.getElementById("saveChanges").onclick =
  function () {
    selectOption.disabled = true;
    cupColor.style.display = "block";
    cupColorPicker.style.display = "block";
    placingOrder.style.display = "block";
  });

const resetButton = (document.getElementById("reset").onclick = function () {
  selectOption.disabled = false;
  cupColor.style.display = "none";
  cupColorPicker.style.display = "none";
  placingOrder.style.display = "none";
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

// questionaire
// recommended product text
const recommendedProducts = document.getElementById("recommendedProduct");

// image reference
var imageReference = document.querySelector("#productPreview img");

// text
const burgerText = document.getElementById("burgerOrWraps");
const chickenText = document.getElementById("chicken");
const eggsText = document.getElementById("eggs");
const baconText = document.getElementById("bacon");
const sausageText = document.getElementById("sausage");
const spinachText = document.getElementById("spinach");
const cheddarText = document.getElementById("cheddar");

// button
const saveProduct = document.getElementById("saveProduct");
const resetProduct = document.getElementById("resetProduct");

const saveBurger = document.getElementById("saveBurger");
const resetBurger = document.getElementById("resetBurger");

const saveChicken = document.getElementById("saveChicken");
const resetChicken = document.getElementById("resetChicken");

const saveEggs = document.getElementById("saveEggs");
const resetEggs = document.getElementById("resetEggs");

const saveBacon = document.getElementById("saveBacon");
const resetBacon = document.getElementById("resetBacon");

const saveSausage = document.getElementById("saveSausage");
const resetSausage = document.getElementById("resetSausage");

const saveSpinach = document.getElementById("saveSpinach");
const resetSpinach = document.getElementById("resetSpinach");

const saveCheddar = document.getElementById("saveCheddar");
const resetCheddar = document.getElementById("resetCheddar");

const getProductRecommendation = document.getElementById("recommendProduct");
const seeProductDetails = document.getElementById("seeDetails");
const answerQuestionaire = document.getElementById("answerQuestionaire");
// selection
const productSelection = document.getElementById("ourProducts");
const burgerSelection = document.getElementById("burgerOrWrapsSelection");
const chickenSelection = document.getElementById("chickenYesNo");
const eggsSelection = document.getElementById("eggsYesNo");
const baconSelection = document.getElementById("baconYesNo");
const sausageSelection = document.getElementById("sausageYesNo");
const spinachSelection = document.getElementById("spinachYesNo");
const cheddarSelection = document.getElementById("cheddarYesNo");

function resetAll() {
  burgerText.style.display = "none";
  burgerSelection.style.display = "none";
  saveBurger.style.display = "none";
  resetBurger.style.display = "none";

  chickenText.style.display = "none";
  chickenSelection.style.display = "none";
  saveChicken.style.display = "none";
  resetChicken.style.display = "none";

  eggsText.style.display = "none";
  eggsSelection.style.display = "none";
  saveEggs.style.display = "none";
  resetEggs.style.display = "none";

  baconText.style.display = "none";
  baconSelection.style.display = "none";
  saveBacon.style.display = "none";
  resetBacon.style.display = "none";

  sausageText.style.display = "none";
  sausageSelection.style.display = "none";
  saveSausage.style.display = "none";
  resetSausage.style.display = "none";

  spinachText.style.display = "none";
  spinachSelection.style.display = "none";
  saveSpinach.style.display = "none";
  resetSpinach.style.display = "none";

  cheddarText.style.display = "none";
  cheddarSelection.style.display = "none";
  saveCheddar.style.display = "none";
  resetCheddar.style.display = "none";

  getProductRecommendation.style.display = "none";

  burgerSelection.selectedIndex = 0;
  chickenSelection.selectedIndex = 0;
  eggsSelection.selectedIndex = 0;
  baconSelection.selectedIndex = 0;
  sausageSelection.selectedIndex = 0;
  spinachSelection.selectedIndex = 0;
  cheddarSelection.selectedIndex = 0;

  productSelection.disabled = false;
  burgerSelection.disabled = false;
  chickenSelection.disabled = false;
  eggsSelection.disabled = false;
  baconSelection.disabled = false;
  sausageSelection.disabled = false;
  spinachSelection.disabled = false;
  cheddarSelection.disabled = false;
}

saveProduct.onclick = function () {
  if (productSelection.selectedIndex == 0) {
    burgerText.style.display = "block";
    burgerSelection.style.display = "block";
    saveBurger.style.display = "block";
    resetBurger.style.display = "block";
    productSelection.disabled = true;
  }
};

resetProduct.onclick = function () {
  resetAll();
};

saveBurger.onclick = function () {
  if (burgerSelection.selectedIndex == 0) {
    chickenText.style.display = "block";
    chickenSelection.style.display = "block";
    saveChicken.style.display = "block";
    resetChicken.style.display = "block";
    burgerSelection.disabled = true;
  } else if (burgerSelection.selectedIndex == 1) {
    eggsText.style.display = "block";
    eggsSelection.style.display = "block";
    saveEggs.style.display = "block";
    resetEggs.style.display = "block";
    burgerSelection.disabled = true;
  }
};

resetBurger.onclick = function () {
  chickenText.style.display = "none";
  chickenSelection.style.display = "none";
  saveChicken.style.display = "none";
  resetChicken.style.display = "none";

  eggsText.style.display = "none";
  eggsSelection.style.display = "none";
  saveEggs.style.display = "none";
  resetEggs.style.display = "none";

  baconText.style.display = "none";
  baconSelection.style.display = "none";
  saveBacon.style.display = "none";
  resetBacon.style.display = "none";

  sausageText.style.display = "none";
  sausageSelection.style.display = "none";
  saveSausage.style.display = "none";
  resetSausage.style.display = "none";

  spinachText.style.display = "none";
  spinachSelection.style.display = "none";
  saveSpinach.style.display = "none";
  resetSpinach.style.display = "none";

  cheddarText.style.display = "none";
  cheddarSelection.style.display = "none";
  saveCheddar.style.display = "none";
  resetCheddar.style.display = "none";
  burgerSelection.disabled = false;
  burgerSelection.selectedIndex = 0;
  chickenSelection.selectedIndex = 0;
  eggsSelection.selectedIndex = 0;
  baconSelection.selectedIndex = 0;
  sausageSelection.selectedIndex = 0;
  spinachSelection.selectedIndex = 0;
  cheddarSelection.selectedIndex = 0;
};

saveChicken.onclick = function () {
  eggsText.style.display = "block";
  eggsSelection.style.display = "block";
  saveEggs.style.display = "block";
  resetEggs.style.display = "block";
  chickenSelection.disabled = true;
};

resetChicken.onclick = function () {
  eggsText.style.display = "none";
  eggsSelection.style.display = "none";
  saveEggs.style.display = "none";
  resetEggs.style.display = "none";

  baconText.style.display = "none";
  baconSelection.style.display = "none";
  saveBacon.style.display = "none";
  resetBacon.style.display = "none";

  sausageText.style.display = "none";
  sausageSelection.style.display = "none";
  saveSausage.style.display = "none";
  resetSausage.style.display = "none";

  spinachText.style.display = "none";
  spinachSelection.style.display = "none";
  saveSpinach.style.display = "none";
  resetSpinach.style.display = "none";

  cheddarText.style.display = "none";
  cheddarSelection.style.display = "none";
  saveCheddar.style.display = "none";
  resetCheddar.style.display = "none";
  chickenSelection.disabled = false;
  burgerSelection.selectedIndex = 0;
  chickenSelection.selectedIndex = 0;
  eggsSelection.selectedIndex = 0;
  baconSelection.selectedIndex = 0;
  sausageSelection.selectedIndex = 0;
  spinachSelection.selectedIndex = 0;
  cheddarSelection.selectedIndex = 0;
};

saveEggs.onclick = function () {
  eggsSelection.disabled = true;
  if (chickenSelection.selectedIndex == 0 && eggsSelection.selectedIndex == 0) {
    getProductRecommendation.style.display = "block";
  }
};

resetEggs.onclick = function () {
  getProductRecommendation.style.display = "none";
  eggsSelection.disabled = false;
};

getProductRecommendation.onclick = function () {
  if (chickenSelection.selectedIndex == 0 && eggsSelection.selectedIndex == 0) {
    resetAll();
    imageReference.src = document.getElementById("chickenMapleSandwich").src;
    recommendedProducts.innerHTML =
      "We Recommend Chicken, Maple Butter & Egg Sandwich For You !";
    seeProductDetails.style.display = "block";
    answerQuestionaire.style.display = "block";
    seeProductDetails.style.cursor = "pointer";
    saveProduct.disabled = true;
    resetProduct.disabled = true;
    productSelection.disabled = true;
    seeProductDetails.onclick = function () {
      location.href = "chickenMapleSandwich.html";
    };
    answerQuestionaire.onclick = function () {
      resetAll();
      recommendedProducts.innerHTML = "";
      seeProductDetails.style.display = "none";
      answerQuestionaire.style.display = "none";
      saveProduct.disabled = false;
      resetProduct.disabled = false;
    };
  }
};
