const hbtn = document.getElementById("hero-btn");
const lbtn = document.getElementById("login-btn");
const cbtn = document.getElementById("close-btn");
const nameInput = document.querySelector(".nameInput");
const result = document.querySelector(".result");
const lbtns = document.querySelector(".login-btn");
var getItem = localStorage.getItem.innerText;


function login(username) {
  localStorage.setItem("currentUsername", username);
  const usernames = JSON.parse(localStorage.getItem("allUsernames")) || [];
  const newUsernames = [...usernames, username];
  localStorage.setItem("allUsernames", JSON.stringify(newUsernames));
}
function logout() {
  localStorage.removeItem("currentUsername");
}
function isNewUsername(username) {
  const usernames = JSON.parse(localStorage.getItem("allUsernames"));
  return !usernames.includes(username);
}

hbtn.addEventListener("click", function () {
  if (hbtn.innerText === "LOGGA IN") {
    document.querySelector(".background-popup").style.display = "flex";
  } else if (hbtn.innerText === "LOGGA UT") {
    document.querySelector(".login-confirm").style.display = "none";
    document.querySelector(".login-again").style.display = "none";
    document.querySelector(".result").style.display = "none";
    hbtn.innerText = "LOGGA IN";
  }
});

const saveToLocalStorage = () => {
  var newData = document.getElementById("nameInput").value;

  /*if (localStorage.getItem("data") == null) {
    localStorage.setItem("data", "[]");
  }*/
  if (nameInput.value !== localStorage.getItem("data")) {
    var oldData = JSON.parse(localStorage.getItem("data"));
    oldData.push(newData);
    localStorage.setItem("data", JSON.stringify(oldData));
  }
};

lbtn.addEventListener("click", saveToLocalStorage);

lbtn.addEventListener("click", function () {
  if (
    lbtn.innerText === "Logga in" &&
    nameInput.value == localStorage.getItem("data")
  ) {
    document.querySelector(".background-popup").style.display = "none";
    document.querySelector(".login-again").style.display = "flex";
    document.querySelector(".login-confirm").style.display = "flex";
    document.querySelector(".result").style.display = "flex";
    hbtn.innerText = "LOGGA UT";
  } else if (lbtn.innerText === "Logga in") {
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
