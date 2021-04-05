const loginPopUp = document.querySelector(".login-logout");
const loginBtn = document.querySelector(".btn__login");
const sendBtn = document.querySelector(".login-logout__btn");
const createAccBtn = document.querySelector(".create-acc");
const loginAccBtn = document.querySelector(".login-acc");
const nameInput = document.querySelector(".login-logout__name-input");
const nameInputTop = document.querySelector(".name");

loginBtn.onclick = () => {
  loginPopUp.style.display = "block";
};
sendBtn.onclick = () => {
  loginPopUp.style.display = "none";
};
createAccBtn.onclick = () => {
  loginAccBtn.style.borderBottom = "3px solid #c5e1e5";
  createAccBtn.style.borderBottom = "3px solid #2a8086";
  nameInput.style.display = "block";
  nameInputTop.style.display = "block";
};
loginAccBtn.onclick = () => {
  loginAccBtn.style.borderBottom = "3px solid #2a8086";
  createAccBtn.style.borderBottom = "3px solid #c5e1e5";
  nameInput.style.display = "none";
  nameInputTop.style.display = "none";
};
