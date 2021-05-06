/*-------------- pop up -------------*/
const loginPopUp = document.querySelector(".login-logout");
const loginBtn = document.querySelector(".btn__login");
const signUpBtn = document.querySelector(".btn__sign-up");
const logoutBtn = document.querySelector(".btn__logout");
const userName = document.querySelector(".user__name");
const sendBtn = document.querySelector(".login-logout__btn");
const createAccBtn = document.querySelector(".create-acc");
const loginAccBtn = document.querySelector(".login-acc");
const formInputs = document.querySelectorAll(".form input");
const googleBtn = document.querySelector(".google__sign-in");
const facebookBtn = document.querySelector(".facebook__sign-in");
const accIco = document.querySelector(".account__btn");
const divsNoneForLogIn = document.querySelectorAll('.log__display-none');
const nameInp = document.querySelector('.login-logout__name-input');
const emailInp = document.querySelector('.login-logout__email-input');
const passwordInp = document.querySelector('.login-logout__password-input');
const checkbox = document.querySelector('.login-logout__checkbox');
const skinBtn = document.querySelector('.skin__send-btn');
// const regularForEmail = /^[A-Z0-9._%+-]+@[A-Z0-9-]+.+.[A-Z]{2,4}$/i;
const regularForEmail = /^user@gmail.com$/i;
const regularForPassword = /^useruser$/i;

function createAccPage() {
  formInputs.forEach(el => {
    el.value = null;
    sendBtn.disabled = true;
    el.addEventListener('input', () => {
      if (nameInp.value !== '' && regularForEmail.test(emailInp.value) === true && regularForPassword.test(passwordInp.value) === true && checkbox.checked === true) {
        sendBtn.disabled = false;
        skinBtn.style.display = 'none'
      } else {
        sendBtn.disabled = true;
        skinBtn.style.display = 'block'
      }
    })
  })
}

function LogInPopPage() {
  formInputs.forEach(el => {
    el.value = null;
    sendBtn.disabled = true;
    el.addEventListener('input', () => {
      if (regularForEmail.test(emailInp.value) === true && regularForPassword.test(passwordInp.value) === true) {
        sendBtn.disabled = false;
        skinBtn.style.display = 'none'
      } else {
        sendBtn.disabled = true;
        skinBtn.style.display = 'block'
      }
    })
  })
}
function changeLogBlock() {
  userName.style.display = 'block'
  userName.addEventListener('animationend', function () {
    userName.style.display = 'none'
  })
  loginPopUp.style.display = "none";
  loginBtn.style.display = "none"
  signUpBtn.style.display = "none"
  accIco.style.display = 'block';
}

signUpBtn.onclick = () => {
  loginAccBtn.style.borderBottom = "3px solid #c5e1e5";
  createAccBtn.style.borderBottom = "3px solid #2a8086";
  loginPopUp.style.display = "block";
  divsNoneForLogIn.forEach((el, i) => i < 2 || i === 3 ? el.style.display = "inline" : el.style.display = "block")
  createAccPage();
};
loginBtn.onclick = () => {
  loginAccBtn.style.borderBottom = "3px solid #2a8086";
  createAccBtn.style.borderBottom = "3px solid #c5e1e5";
  loginPopUp.style.display = "block";
  divsNoneForLogIn.forEach(el => el.style.display = "none")
  skinBtn.style.display = 'block';
  LogInPopPage();
};

sendBtn.onclick = (e) => {
  e.preventDefault();
  nameInp.value !== '' ? userName.innerHTML = nameInp.value : userName.innerHTML = emailInp.value.split('@').shift();
  changeLogBlock()
};
loginPopUp.onclick = (e) => {
  if (e.target === loginPopUp) {
    loginPopUp.style.display = "none";
  }
};
createAccBtn.onclick = () => {
  loginAccBtn.style.borderBottom = "3px solid #c5e1e5";
  createAccBtn.style.borderBottom = "3px solid #2a8086";
  divsNoneForLogIn.forEach((el, i) => i < 2 || i === 3 ? el.style.display = "inline" : el.style.display = "block")
  skinBtn.style.display = 'block'
  createAccPage();
};
loginAccBtn.onclick = () => {
  loginAccBtn.style.borderBottom = "3px solid #2a8086";
  createAccBtn.style.borderBottom = "3px solid #c5e1e5";
  divsNoneForLogIn.forEach(el => el.style.display = "none")
  skinBtn.style.display = 'block';
  LogInPopPage();
};

skinBtn.onclick = () => {
  skinBtn.classList.add('skin-btn__active')
  setTimeout(() => {
    skinBtn.classList.remove('skin-btn__active')
  }, 5000)
}

googleBtn.onclick = () => {
  userName.innerHTML = 'Logged in with Google';
  changeLogBlock()
}
facebookBtn.onclick = () => {
  userName.innerHTML = 'Logged in with Facebook';
  changeLogBlock()
}
let countForShowLoginBar = 0;
accIco.onclick = () => {
  if (countForShowLoginBar <= 2 || countForShowLoginBar >= 0) {
    logoutBtn.style.display = "block";
    userName.style.display = 'block'
    userName.style.right = '100px'
    userName.addEventListener('animationend', function () {
      userName.style.display = 'block'
      userName.style.right = '110px'
    })

  }
  if (countForShowLoginBar === 1) {
    logoutBtn.style.display = "none";
    userName.style.display = 'none'
    countForShowLoginBar = -1
  }
  countForShowLoginBar++
}

logoutBtn.onclick = () => {
  userName.style.marginRight = '0px'
  userName.style.display = 'none'
  loginBtn.style.display = "block"
  signUpBtn.style.display = "block"
  accIco.style.display = 'none';
  logoutBtn.style.display = "none";
  countForShowLoginBar = 0;
}

createAccPage()

/* -------------- slider pet in zoo -----------------*/

const items = document.querySelectorAll('.blocks');
const rightArrow = document.querySelector('.right__arrow');
const leftArrow = document.querySelector('.left__arrow');
let currentItem = 0;
let isEnable = true;

function changeCurrentItem(n) {
  currentItem = (n + items.length) % items.length;
}

function hideItem(direction) {
  isEnable = false;
  items[currentItem].classList.add(direction);
  items[currentItem].addEventListener('animationend', function () {
    this.classList.remove('active', direction)
  })

}
function showItem(direction) {
  items[currentItem].classList.add('next', direction);
  items[currentItem].addEventListener('animationend', function () {
    this.classList.remove('next', direction)
    this.classList.add('active')
    isEnable = true;
  })
}

function previousItem(n) {
  hideItem('to-right');
  changeCurrentItem(n - 1);
  showItem('from-left');
}
function nextItem(n) {
  hideItem('to-left');
  changeCurrentItem(n + 1);
  showItem('from-right');
}

leftArrow.addEventListener('click', function () {
  if (isEnable) {
    previousItem(currentItem);
  }
})
rightArrow.addEventListener('click', function () {
  if (isEnable) {
    nextItem(currentItem);
  }
})

/*------------- infinity slider --------------*/

const comments = document.querySelectorAll('.comment__block');
const stop = document.querySelectorAll('.info__comment');
let commentIndex = 1;
let timer = 10000;

stop.forEach(el => el.onclick = () => {
  timer = 30000;
  makeTimer()
});

function showSlides(n) {
  if (n > comments.length) {
    commentIndex = 1;
  }
  if (n < 1) {
    commentIndex = comments.length;
  }

  for (let slide of comments) {
    slide.style.display = "none";
  }
  comments[commentIndex - 1].style.display = "flex";
}
var clean = 0;
function makeTimer() {
  clearInterval(clean)
  clean = setInterval(function () {
    if (timer > 10000) {
      timer = 10000;
      makeTimer()
    }
    commentIndex++;
    showSlides(commentIndex);
  }, timer);
}

showSlides(commentIndex);
makeTimer();
