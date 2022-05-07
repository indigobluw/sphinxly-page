const hbtn = document.getElementById("hero-btn");
const lbtn = document.getElementById("login-btn");

hbtn.addEventListener("click", function () {
  if (hbtn.innerText === "LOGGA IN") {
    document.querySelector(".background-popup").style.display = "flex";
  } else if (hbtn.innerText === "LOGGA UT") {
    hbtn.innerText = "LOGGA IN";
  }
});

lbtn.addEventListener("click", function () {
  if (lbtn.innerText === "Logga in") {
    document.querySelector(".background-popup").style.display = "none";
    hbtn.innerText = "LOGGA UT";
  }
});
