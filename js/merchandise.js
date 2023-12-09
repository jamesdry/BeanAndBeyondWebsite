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

function showPlaceOrder() {
  placingOrder.style.display = "block";
}

document.getElementById("clickRedColor").onclick = function () {
  showPlaceOrder();
  if (selectOption.selectedIndex == 0) {
    image.src = document.getElementById("redCupWithLogo").src;
  } else if (selectOption.selectedIndex == 1) {
    image.src = document.getElementById("redCupWithoutLogo").src;
  }
};

document.getElementById("clickOrangeColor").onclick = function () {
  showPlaceOrder();
  if (selectOption.selectedIndex == 0) {
    image.src = document.getElementById("orangeCupWithLogo").src;
  } else if (selectOption.selectedIndex == 1) {
    image.src = document.getElementById("orangeCupWithoutLogo").src;
  }
};

document.getElementById("clickYellowColor").onclick = function () {
  showPlaceOrder();
  if (selectOption.selectedIndex == 0) {
    image.src = document.getElementById("yellowCupWithLogo").src;
  } else if (selectOption.selectedIndex == 1) {
    image.src = document.getElementById("yellowCupWithoutLogo").src;
  }
};

document.getElementById("clickGreenColor").onclick = function () {
  showPlaceOrder();
  if (selectOption.selectedIndex == 0) {
    image.src = document.getElementById("greenCupWithLogo").src;
  } else if (selectOption.selectedIndex == 1) {
    image.src = document.getElementById("greenCupWithoutLogo").src;
  }
};

document.getElementById("clickBlueColor").onclick = function () {
  showPlaceOrder();
  if (selectOption.selectedIndex == 0) {
    image.src = document.getElementById("blueCupWithLogo").src;
  } else if (selectOption.selectedIndex == 1) {
    image.src = document.getElementById("blueCupWithoutLogo").src;
  }
};

document.getElementById("clickVanillaColor").onclick = function () {
  showPlaceOrder();
  if (selectOption.selectedIndex == 0) {
    image.src = document.getElementById("vanillaCupWithLogo").src;
  } else if (selectOption.selectedIndex == 1) {
    image.src = document.getElementById("vanillaCupWithoutLogo").src;
  }
};

document.getElementById("clickPurpleColor").onclick = function () {
  showPlaceOrder();
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
  });

function resetCustomTumblr() {
  selectOption.disabled = false;
  cupColor.style.display = "none";
  cupColorPicker.style.display = "none";
  placingOrder.style.display = "none";
  selectOption.selectedIndex = 1;
  image.src = document.getElementById("withoutLogo").src;
}

const resetButton = (document.getElementById("reset").onclick = function () {
  resetCustomTumblr();
});

placingOrder.onclick = function () {
  resetCustomTumblr();
};

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

// snacks text
const burgerText = document.getElementById("burgerOrWraps");
const chickenText = document.getElementById("chicken");
const eggsText = document.getElementById("eggs");
const baconText = document.getElementById("bacon");
const sausageText = document.getElementById("sausage");
const spinachText = document.getElementById("spinach");
const cheddarText = document.getElementById("cheddar");

// coffee text
const bitterText = document.getElementById("bitterOrSweet");
const hotColdText = document.getElementById("hotOrCold");
const coffeeEspressoText = document.getElementById("coffeeOrEspresso");
const milkFoamText = document.getElementById("milkFoam?");

// snack button
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

// coffee button
const saveBitterSweet = document.getElementById("saveBitterSweet");
const resetBitterSweet = document.getElementById("resetBitterSweet");

const saveHotCold = document.getElementById("saveHotCold");
const resetHotCold = document.getElementById("resetHotCold");

const saveCoffeeEspresso = document.getElementById("saveCoffeeEspresso");
const resetCoffeeEspresso = document.getElementById("resetCoffeeEspresso");

const saveMilkFoam = document.getElementById("saveMilkFoam");
const resetMilkFoam = document.getElementById("resetMilkFoam");

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

// coffee
const bitterSelection = document.getElementById("bitterorsweet");
const hotcoldSelection = document.getElementById("hotcold");
const coffeeEspressoSelection = document.getElementById("coffeeEspresso");
const milkFoamSelection = document.getElementById("milkfoam");

function showProductDetailsAndQuestionaireDisableQuestionaire() {
  seeProductDetails.style.display = "block";
  answerQuestionaire.style.display = "block";
  seeProductDetails.style.cursor = "pointer";
  saveProduct.disabled = true;
  resetProduct.disabled = true;
  productSelection.disabled = true;
}

function showOnlyQuestionaireButtonAndDisableQuestionaire() {
  answerQuestionaire.style.display = "block";
  saveProduct.disabled = true;
  resetProduct.disabled = true;
  productSelection.disabled = true;
}

function answerQuizAgain() {
  recommendedProducts.innerHTML = "";
  seeProductDetails.style.display = "none";
  answerQuestionaire.style.display = "none";
  saveProduct.disabled = false;
  resetProduct.disabled = false;
  resetProductIndex();
}

function resetProductIndex() {
  productSelection.selectedIndex = 0;
}

function resetmilkfoamindex() {
  milkFoamSelection.selectedIndex = 0;
}

function resetcoffeeespressoindex() {
  coffeeEspressoSelection.selectedIndex = 0;
}

function resetbitterindex() {
  bitterSelection.selectedIndex = 0;
}

function resethotcoldindex() {
  hotcoldSelection.selectedIndex = 0;
}

function resetburgerindex() {
  burgerSelection.selectedIndex = 0;
}

function resetchickenindex() {
  chickenSelection.selectedIndex = 0;
}

function reseteggindex() {
  eggsSelection.selectedIndex = 0;
}

function resetbaconindex() {
  baconSelection.selectedIndex = 0;
}

function resetsausageindex() {
  sausageSelection.selectedIndex = 0;
}

function resetspinachindex() {
  spinachSelection.selectedIndex = 0;
}

function resetcheddarindex() {
  cheddarSelection.selectedIndex = 0;
}

function resetmilkfoam() {
  milkFoamText.style.display = "none";
  milkFoamSelection.style.display = "none";
  saveMilkFoam.style.display = "none";
  resetMilkFoam.style.display = "none";
}

function showmilkfoam() {
  milkFoamText.style.display = "block";
  milkFoamSelection.style.display = "block";
  saveMilkFoam.style.display = "block";
  resetMilkFoam.style.display = "block";
}

function resetcoffeeespresso() {
  coffeeEspressoText.style.display = "none";
  coffeeEspressoSelection.style.display = "none";
  saveCoffeeEspresso.style.display = "none";
  resetCoffeeEspresso.style.display = "none";
}

function showcoffeeespresso() {
  coffeeEspressoText.style.display = "block";
  coffeeEspressoSelection.style.display = "block";
  saveCoffeeEspresso.style.display = "block";
  resetCoffeeEspresso.style.display = "block";
}

function resetbitter() {
  bitterText.style.display = "none";
  bitterSelection.style.display = "none";
  saveBitterSweet.style.display = "none";
  resetBitterSweet.style.display = "none";
}

function showbitter() {
  bitterText.style.display = "block";
  bitterSelection.style.display = "block";
  saveBitterSweet.style.display = "block";
  resetBitterSweet.style.display = "block";
}

function resethotorcold() {
  hotColdText.style.display = "none";
  hotcoldSelection.style.display = "none";
  saveHotCold.style.display = "none";
  resetHotCold.style.display = "none";
}

function showhotorcold() {
  hotColdText.style.display = "block";
  hotcoldSelection.style.display = "block";
  saveHotCold.style.display = "block";
  resetHotCold.style.display = "block";
}

function resetburger() {
  burgerText.style.display = "none";
  burgerSelection.style.display = "none";
  saveBurger.style.display = "none";
  resetBurger.style.display = "none";
}

function showBurger() {
  burgerText.style.display = "block";
  burgerSelection.style.display = "block";
  saveBurger.style.display = "block";
  resetBurger.style.display = "block";
}

function resetchicken() {
  chickenText.style.display = "none";
  chickenSelection.style.display = "none";
  saveChicken.style.display = "none";
  resetChicken.style.display = "none";
}

function showChicken() {
  chickenText.style.display = "block";
  chickenSelection.style.display = "block";
  saveChicken.style.display = "block";
  resetChicken.style.display = "block";
}

function reseteggs() {
  eggsText.style.display = "none";
  eggsSelection.style.display = "none";
  saveEggs.style.display = "none";
  resetEggs.style.display = "none";
}

function showEggs() {
  eggsText.style.display = "block";
  eggsSelection.style.display = "block";
  saveEggs.style.display = "block";
  resetEggs.style.display = "block";
}

function resetbacon() {
  baconText.style.display = "none";
  baconSelection.style.display = "none";
  saveBacon.style.display = "none";
  resetBacon.style.display = "none";
}

function showBacon() {
  baconText.style.display = "block";
  baconSelection.style.display = "block";
  saveBacon.style.display = "block";
  resetBacon.style.display = "block";
}

function resetsausage() {
  sausageText.style.display = "none";
  sausageSelection.style.display = "none";
  saveSausage.style.display = "none";
  resetSausage.style.display = "none";
}

function showSausage() {
  sausageText.style.display = "block";
  sausageSelection.style.display = "block";
  saveSausage.style.display = "block";
  resetSausage.style.display = "block";
}

function resetspinach() {
  spinachText.style.display = "none";
  spinachSelection.style.display = "none";
  saveSpinach.style.display = "none";
  resetSpinach.style.display = "none";
}

function showSpinach() {
  spinachText.style.display = "block";
  spinachSelection.style.display = "block";
  saveSpinach.style.display = "block";
  resetSpinach.style.display = "block";
}

function resetcheddar() {
  cheddarText.style.display = "none";
  cheddarSelection.style.display = "none";
  saveCheddar.style.display = "none";
  resetCheddar.style.display = "none";
}

function showCheddar() {
  cheddarText.style.display = "block";
  cheddarSelection.style.display = "block";
  saveCheddar.style.display = "block";
  resetCheddar.style.display = "block";
}

function hidegetproductrecommendation() {
  getProductRecommendation.style.display = "none";
}

function showgetproductrecommendation() {
  getProductRecommendation.style.display = "block";
}

function enablemilkfoamselection() {
  milkFoamSelection.disabled = false;
}

function disablemilkfoamselection() {
  milkFoamSelection.disabled = true;
}

function enableCoffeeEspressoSelection() {
  coffeeEspressoSelection.disabled = false;
}

function disableCoffeeEspressoSelection() {
  coffeeEspressoSelection.disabled = true;
}

function enableBitterSelection() {
  bitterSelection.disabled = false;
}

function disableBitterSelection() {
  bitterSelection.disabled = true;
}

function enablehotcoldselection() {
  hotcoldSelection.disabled = false;
}

function disablehotcoldselection() {
  hotcoldSelection.disabled = true;
}

function enableProductSelection() {
  productSelection.disabled = false;
}

function disableProductSelection() {
  productSelection.disabled = true;
}

function enableBurgerSelection() {
  burgerSelection.disabled = false;
}

function disableBurgerSelection() {
  burgerSelection.disabled = true;
}

function enableChickenSelection() {
  chickenSelection.disabled = false;
}

function disableChickenSelection() {
  chickenSelection.disabled = true;
}

function enableEggSelection() {
  eggsSelection.disabled = false;
}

function disableEggSelection() {
  eggsSelection.disabled = true;
}

function enableBaconSelection() {
  baconSelection.disabled = false;
}

function disableBaconSelection() {
  baconSelection.disabled = true;
}

function enableSausageSelection() {
  sausageSelection.disabled = false;
}

function disableSausageSelection() {
  sausageSelection.disabled = true;
}

function enableSpinachSelection() {
  spinachSelection.disabled = false;
}

function disableSpinachSelection() {
  spinachSelection.disabled = true;
}

function enableCheddarSelection() {
  cheddarSelection.disabled = false;
}

function disableCheddarSelection() {
  cheddarSelection.disabled = true;
}

function enableAllSelection() {
  productSelection.disabled = false;
  burgerSelection.disabled = false;
  chickenSelection.disabled = false;
  eggsSelection.disabled = false;
  baconSelection.disabled = false;
  sausageSelection.disabled = false;
  spinachSelection.disabled = false;
  cheddarSelection.disabled = false;

  // coffee
  bitterSelection.disabled = false;
  hotcoldSelection.disabled = false;
  coffeeEspressoSelection.disabled = false;
  milkFoamSelection.disabled = false;
}

function resetAll() {
  resetburger();
  resetchicken();
  reseteggs();
  resetbacon();
  resetsausage();
  resetspinach();
  resetcheddar();
  hidegetproductrecommendation();
  resetburgerindex();
  resetchickenindex();
  reseteggindex();
  resetbaconindex();
  resetsausageindex();
  resetspinachindex();
  resetcheddarindex();
  enableAllSelection();
  // coffee
  resetbitter();
  resetbitterindex();
  resethotorcold();
  resethotcoldindex();
  resetcoffeeespresso();
  resetcoffeeespressoindex();
  resetmilkfoam();
  resetmilkfoamindex();
}

saveProduct.onclick = function () {
  if (productSelection.selectedIndex == 0) {
    showBurger();
    disableProductSelection();
  } else if (productSelection.selectedIndex == 1) {
    showbitter();
    disableProductSelection();
  }
};

resetProduct.onclick = function () {
  resetAll();
};

saveBurger.onclick = function () {
  if (burgerSelection.selectedIndex == 0) {
    showChicken();
    disableBurgerSelection();
  } else if (burgerSelection.selectedIndex == 1) {
    showBacon();
    disableBurgerSelection();
  }
};

saveChicken.onclick = function () {
  if (chickenSelection.selectedIndex == 0) {
    showgetproductrecommendation();
    disableChickenSelection();
  } else if (chickenSelection.selectedIndex == 1) {
    showBacon();
    disableChickenSelection();
  }
};

saveBacon.onclick = function () {
  if (baconSelection.selectedIndex == 0 || baconSelection.selectedIndex == 1) {
    showSausage();
    disableBaconSelection();
  }
};

saveSausage.onclick = function () {
  if (burgerSelection.selectedIndex == 1) {
    showSpinach();
    disableSausageSelection();
  } else {
    showCheddar();
    disableSausageSelection();
  }
};

saveSpinach.onclick = function () {
  showgetproductrecommendation();
  disableSpinachSelection();
};

saveCheddar.onclick = function () {
  showgetproductrecommendation();
  disableCheddarSelection();
};

resetCheddar.onclick = function () {
  hidegetproductrecommendation();
  enableCheddarSelection();
};

resetSpinach.onclick = function () {
  resetcheddar();
  resetcheddarindex();
  hidegetproductrecommendation();
  enableSpinachSelection();
  enableCheddarSelection();
};

resetSausage.onclick = function () {
  resetspinach();
  resetcheddar();
  resetspinachindex();
  resetcheddarindex();
  hidegetproductrecommendation();
  enableSausageSelection();
  enableSpinachSelection();
  enableCheddarSelection();
};

resetBacon.onclick = function () {
  resetsausage();
  resetspinach();
  resetcheddar();
  resetsausageindex();
  resetspinachindex();
  resetcheddarindex();
  hidegetproductrecommendation();
  enableBaconSelection();
  enableSausageSelection();
  enableSpinachSelection();
  enableCheddarSelection();
};

resetEggs.onclick = function () {
  resetbacon();
  resetsausage();
  resetspinach();
  resetcheddar();
  resetbaconindex();
  resetsausageindex();
  resetspinachindex();
  resetcheddarindex();
  hidegetproductrecommendation();
  enableEggSelection();
  enableBaconSelection();
  enableSausageSelection();
  enableSpinachSelection();
  enableCheddarSelection();
};

resetChicken.onclick = function () {
  reseteggs();
  resetbacon();
  resetsausage();
  resetspinach();
  resetcheddar();
  reseteggindex();
  resetbaconindex();
  resetsausageindex();
  resetspinachindex();
  resetcheddarindex();
  hidegetproductrecommendation();
  enableChickenSelection();
  enableEggSelection();
  enableBaconSelection();
  enableSausageSelection();
  enableSpinachSelection();
  enableCheddarSelection();
};

resetBurger.onclick = function () {
  resetchicken();
  reseteggs();
  resetbacon();
  resetsausage();
  resetspinach();
  resetcheddar();
  resetchickenindex();
  reseteggindex();
  resetbaconindex();
  resetsausageindex();
  resetspinachindex();
  resetcheddarindex();
  hidegetproductrecommendation();
  enableBurgerSelection();
  enableChickenSelection();
  enableEggSelection();
  enableBaconSelection();
  enableSausageSelection();
  enableSpinachSelection();
  enableCheddarSelection();
};

saveBitterSweet.onclick = function () {
  if (
    bitterSelection.selectedIndex == 0 ||
    bitterSelection.selectedIndex == 1
  ) {
    showhotorcold();
    disableBitterSelection();
  }
};

resetBitterSweet.onclick = function () {
  resethotorcold();
  resethotcoldindex();
  hidegetproductrecommendation();
  enableBitterSelection();
  enablehotcoldselection();
};

saveHotCold.onclick = function () {
  if (
    bitterSelection.selectedIndex == 0 &&
    hotcoldSelection.selectedIndex == 0
  ) {
    showgetproductrecommendation();
    disablehotcoldselection();
  } else if (
    bitterSelection.selectedIndex == 0 &&
    hotcoldSelection.selectedIndex == 1
  ) {
    showcoffeeespresso();
    disablehotcoldselection();
  } else if (
    bitterSelection.selectedIndex == 1 &&
    hotcoldSelection.selectedIndex == 0
  ) {
    showmilkfoam();
    disablehotcoldselection();
  }
};

resetHotCold.onclick = function () {
  resetcoffeeespresso();
  resetcoffeeespressoindex();
  resetmilkfoam();
  resetmilkfoamindex();
  hidegetproductrecommendation();
  enablehotcoldselection();
  enableCoffeeEspressoSelection();
  enablemilkfoamselection();
};

saveMilkFoam.onclick = function () {
  if (
    bitterSelection.selectedIndex == 1 &&
    hotcoldSelection.selectedIndex == 0 &&
    milkFoamSelection.selectedIndex == 0
  ) {
    disablemilkfoamselection();
    showgetproductrecommendation();
  }
};

resetMilkFoam.onclick = function () {
  hidegetproductrecommendation();
  enablemilkfoamselection();
};

saveCoffeeEspresso.onclick = function () {
  if (
    coffeeEspressoSelection.selectedIndex == 0 ||
    coffeeEspressoSelection.selectedIndex == 1
  ) {
    showgetproductrecommendation();
    disableCoffeeEspressoSelection();
  }
};

resetCoffeeEspresso.onclick = function () {
  hidegetproductrecommendation();
  enableCoffeeEspressoSelection();
};

getProductRecommendation.onclick = function () {
  if (
    chickenSelection.selectedIndex == 0 &&
    burgerSelection.selectedIndex == 0 &&
    productSelection.selectedIndex == 0
  ) {
    resetAll();
    imageReference.style.display = "block";
    imageReference.src = document.getElementById("chickenMapleSandwich").src;
    recommendedProducts.innerHTML =
      "We Recommend Chicken, Maple Butter & Egg Sandwich For You !";
    showProductDetailsAndQuestionaireDisableQuestionaire();
    seeProductDetails.onclick = function () {
      location.href = "chickenMapleSandwich.html";
    };
    answerQuestionaire.onclick = function () {
      resetAll();
      answerQuizAgain();
      imageReference.style.display = "none";
    };
  } else if (
    baconSelection.selectedIndex == 0 &&
    sausageSelection.selectedIndex == 1 &&
    cheddarSelection.selectedIndex == 1 &&
    burgerSelection.selectedIndex == 0 &&
    productSelection.selectedIndex == 0
  ) {
    resetAll();
    imageReference.style.display = "block";
    imageReference.src = document.getElementById("baconGouda").src;
    recommendedProducts.innerHTML =
      "We Recommend Bacon, Gouda & Egg Sandwich For You !";
    showProductDetailsAndQuestionaireDisableQuestionaire();
    seeProductDetails.onclick = function () {
      location.href = "baconGoudaEggSandwich.html";
    };
    answerQuestionaire.onclick = function () {
      resetAll();
      answerQuizAgain();
      imageReference.style.display = "none";
    };
  } else if (
    baconSelection.selectedIndex == 0 &&
    sausageSelection.selectedIndex == 1 &&
    cheddarSelection.selectedIndex == 0 &&
    burgerSelection.selectedIndex == 0 &&
    productSelection.selectedIndex == 0
  ) {
    resetAll();
    imageReference.style.display = "block";
    imageReference.src = document.getElementById("turkeyBaconSandwich").src;
    recommendedProducts.innerHTML =
      "We Recommend Turkey Bacon, Cheddar & Egg White Sandwich For You !";
    showProductDetailsAndQuestionaireDisableQuestionaire();
    seeProductDetails.onclick = function () {
      location.href = "turkeyBaconSandwich.html";
    };
    answerQuestionaire.onclick = function () {
      resetAll();
      answerQuizAgain();
      imageReference.style.display = "none";
    };
  } else if (
    baconSelection.selectedIndex == 1 &&
    sausageSelection.selectedIndex == 0 &&
    cheddarSelection.selectedIndex == 0 &&
    burgerSelection.selectedIndex == 0 &&
    productSelection.selectedIndex == 0
  ) {
    resetAll();
    imageReference.style.display = "block";
    imageReference.src = document.getElementById(
      "sausageEggCheddarSandwich"
    ).src;
    recommendedProducts.innerHTML =
      "We Recommend Sausage, Cheddar & Egg Sandwich For You !";
    showProductDetailsAndQuestionaireDisableQuestionaire();
    seeProductDetails.onclick = function () {
      location.href = "sausageEggCheddarSandwich.html";
    };
    answerQuestionaire.onclick = function () {
      resetAll();
      answerQuizAgain();
      imageReference.style.display = "none";
    };
  } else if (
    burgerSelection.selectedIndex == 1 &&
    baconSelection.selectedIndex == 0 &&
    sausageSelection.selectedIndex == 0 &&
    spinachSelection.selectedIndex == 1 &&
    productSelection.selectedIndex == 0
  ) {
    resetAll();
    imageReference.style.display = "block";
    imageReference.src = document.getElementById("baconSausageEggWrap").src;
    recommendedProducts.innerHTML =
      "We Recommend Bacon, Sausage & Egg Wrap For You !";
    showProductDetailsAndQuestionaireDisableQuestionaire();
    seeProductDetails.onclick = function () {
      location.href = "baconSausageEggWrap.html";
    };
    answerQuestionaire.onclick = function () {
      resetAll();
      answerQuizAgain();
      imageReference.style.display = "none";
    };
  } else if (
    burgerSelection.selectedIndex == 1 &&
    baconSelection.selectedIndex == 1 &&
    sausageSelection.selectedIndex == 1 &&
    spinachSelection.selectedIndex == 0 &&
    productSelection.selectedIndex == 0
  ) {
    resetAll();
    imageReference.style.display = "block";
    imageReference.src = document.getElementById("spinachFetaWrap").src;
    recommendedProducts.innerHTML =
      "We Recommend Spinach, Feta & Egg White Wrap For You !";
    showProductDetailsAndQuestionaireDisableQuestionaire();
    seeProductDetails.onclick = function () {
      location.href = "spinachFetaWrap.html";
    };
    answerQuestionaire.onclick = function () {
      resetAll();
      answerQuizAgain();
      imageReference.style.display = "none";
    };
  } else if (
    bitterSelection.selectedIndex == 0 &&
    hotcoldSelection.selectedIndex == 0 &&
    productSelection.selectedIndex == 1
  ) {
    resetAll();
    imageReference.style.display = "block";
    imageReference.src = document.getElementById("caffeAmericano").src;
    recommendedProducts.innerHTML = "We Recommend Caffè Americano For You !";
    showProductDetailsAndQuestionaireDisableQuestionaire();
    seeProductDetails.onclick = function () {
      location.href = "caffeAmericano.html";
    };
    answerQuestionaire.onclick = function () {
      resetAll();
      answerQuizAgain();
      imageReference.style.display = "none";
    };
  } else if (
    bitterSelection.selectedIndex == 0 &&
    hotcoldSelection.selectedIndex == 1 &&
    productSelection.selectedIndex == 1 &&
    coffeeEspressoSelection.selectedIndex == 0
  ) {
    resetAll();
    imageReference.style.display = "block";
    imageReference.src = document.getElementById("coldbrewcofee").src;
    recommendedProducts.innerHTML = "We Recommend Cold Brew Coffee For You !";
    showProductDetailsAndQuestionaireDisableQuestionaire();
    seeProductDetails.onclick = function () {
      location.href = "coldbrewcofee.html";
    };
    answerQuestionaire.onclick = function () {
      resetAll();
      answerQuizAgain();
      imageReference.style.display = "none";
    };
  } else if (
    bitterSelection.selectedIndex == 0 &&
    hotcoldSelection.selectedIndex == 1 &&
    productSelection.selectedIndex == 1 &&
    coffeeEspressoSelection.selectedIndex == 1
  ) {
    resetAll();
    imageReference.style.display = "block";
    imageReference.src = document.getElementById("icedespresso").src;
    recommendedProducts.innerHTML = "We Recommend Iced Espresso For You !";
    showProductDetailsAndQuestionaireDisableQuestionaire();
    seeProductDetails.onclick = function () {
      location.href = "iceEspresso.html";
    };
    answerQuestionaire.onclick = function () {
      resetAll();
      answerQuizAgain();
      imageReference.style.display = "none";
    };
  } else if (
    bitterSelection.selectedIndex == 1 &&
    hotcoldSelection.selectedIndex == 0 &&
    milkFoamSelection.selectedIndex == 0 &&
    productSelection.selectedIndex == 1
  ) {
    resetAll();
    imageReference.style.display = "block";
    imageReference.src = document.getElementById("cappuccino").src;
    recommendedProducts.innerHTML = "We Recommend Cappuccino For You !";
    showProductDetailsAndQuestionaireDisableQuestionaire();
    seeProductDetails.onclick = function () {
      location.href = "cappuccino.html";
    };
    answerQuestionaire.onclick = function () {
      resetAll();
      answerQuizAgain();
      imageReference.style.display = "none";
    };
  } else {
    resetAll();
    recommendedProducts.innerHTML =
      "We Can't Find Any Products Based On Your Preferences, Sorry.";
    showOnlyQuestionaireButtonAndDisableQuestionaire();
    answerQuestionaire.onclick = function () {
      resetAll();
      answerQuizAgain();
    };
  }
};

let merchandise = gsap.utils.toArray(".item");

gsap.to(merchandise, {
  xPercent: -100 * (merchandise.length - 1),
  ease: "none",
  scrollTrigger: {
    trigger: "listOfMerchandise",
    pin: true,
    scrub: 1,
  },
});
