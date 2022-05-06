document.getElementById("hero-btn").addEventListener("click", function () {
  document.querySelector(".background-popup").style.display = "flex";
});

document.getElementByClass("close-btn").addEventListener("click", function () {
  document.querySelector(".background-popup").style.display = "none";
});

const storageInput = document.querySelector(".name"); //det som man skriver i rutan
const text = document.querySelector(".text");
const button = document.querySelector(".login-btn");
//const storedLogin = localStorage.getItem("textinput");

storageInput.addEventListener("input", (letter) => {
  text.textContent = letter.target.value;
});

/*const herobtn = document.getElementById("hero-btn");

  document.getElementById("login-btn").addEventListener("click", function () {
  document.querySelector(".background-popup").style.display = "none";
  if (herobtn.innerText == "LOGGA IN") {
    herobtn.innerText == "LOGGA UT";
  } else {
    herobtn.innerText == "LOGGA IN";
  }

  if (name-input.target.value) {
    document.querySelector(".login-again").style.display = "flexbox";
  } else {
    document.querySelector(".login-confirm").style.display = "flexbox";
  }
});*/
