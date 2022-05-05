document.getElementById("hero-btn").addEventListener("click", function () {
  document.querySelector(".background-popup").style.display = "flex";
});

document.getElementsById("close-btn").addEventListener("click", function () {
  document.querySelector(".background-popup").style.display = "none";
});

document.getElementsById("login-btn").addEventListener("click", function () {
  document.querySelector(".background-popup").style.display = "none";
  
});
