const hbtn = document.getElementById("hero-btn");
const lbtn = document.getElementById("login-btn");
const cbtn = document.getElementById("close-btn");

const nameInput = document.querySelector(".nameInput");
const result = document.querySelector(".result");
const lbtns = document.querySelector(".login-btn");

hbtn.addEventListener("click", function () {
  if (hbtn.innerText === "LOGGA IN") {
    document.querySelector(".background-popup").style.display = "flex";
  } else if (hbtn.innerText === "LOGGA UT") {
    document.querySelector(".login-confirm").style.display = "none";
    document.querySelector(".result").style.display = "none";
    hbtn.innerText = "LOGGA IN";
  }
});

lbtn.addEventListener("click", function () {
  if (lbtn.innerText === "Logga in") {
    document.querySelector(".background-popup").style.display = "none";
    document.querySelector(".login-confirm").style.display = "flex";
    document.querySelector(".result").style.display = "flex";
    hbtn.innerText = "LOGGA UT";
  }
});

cbtn.addEventListener("click", function () {
  document.querySelector(".background-popup").style.display = "none";
});

nameInput.addEventListener(
  "input",
  (letter) => (result.textContent = letter.target.value)
);
