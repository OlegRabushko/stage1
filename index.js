const screen = document.querySelector(".fullscreen__btn");
const keys = document.querySelectorAll(".piano__keys");
const oneKey = document.querySelectorAll(".key");
const audio = document.querySelectorAll("audio");
const notesBtn = document.querySelector(".notes__btn");
const lettersBtn = document.querySelector(".letters__btn");
const changer = document.querySelector(".piano__keys");
const blackKeys = document.querySelector(".black__keys");

const obj = {
  0: "D",
  1: "R",
  2: "F",
  3: "T",
  4: "G",
  5: "H",
  6: "U",
  7: "J",
  8: "I",
  9: "K",
  10: "O",
  11: "L",
};
screen.onclick = () => {
  if (document.fullscreenElement === null) {
    document.documentElement.requestFullscreen();
    document.querySelector(".img").src = "./assets/login.svg";
  } else if (document.fullscreenElement) {
    document.exitFullscreen();
    document.querySelector(".img").src = "./assets/fullscreen.svg";
  }
};
keys.forEach((el) => {
  el.onmousedown = (event) => {
    let note = document.getElementById(event.target.dataset.note);
    note.currentTime = 0;
    note.play();
  };
  el.onmouseover = (event) => {
    if (event.which === 1) {
      let note = document.getElementById(event.target.dataset.note);
      if (event.target !== changer && event.target !== blackKeys) {
        event.target.classList.add("activeMouse__key");
      }
      event.relatedTarget.classList.remove("activeMouse__key");
      note.currentTime = 0;
      note.play();
    }
  };
  el.onmouseup = (event) => {
    event.target.classList.remove("activeMouse__key");
  };
});
window.onkeydown = (event) => {
  for (let key in obj) {
    if (event.code === `Key${obj[key]}`) {
      if (event.repeat === false) {
        audio[key].currentTime = 0;
        audio[key].play();
      }
    }
  }
  oneKey.forEach((el) => {
    if (event.code === `Key${el.dataset.key}`) {
      el.classList.add("active__key");
    }
  });
};
window.onkeyup = (event) => {
  oneKey.forEach((el) => {
    if (event.code === `Key${el.dataset.key}`) {
      el.classList.remove("active__key");
    }
  });
};
notesBtn.onclick = () => {
  notesBtn.style.backgroundColor = "#2cc2d6";
  lettersBtn.style.backgroundColor = "#6d7a7c";
  changer.classList.add("show__notes");
  changer.classList.remove("show__letters");
};
lettersBtn.onclick = () => {
  lettersBtn.style.backgroundColor = "#2cc2d6";
  notesBtn.style.backgroundColor = "#6d7a7c";
  changer.classList.add("show__letters");
  changer.classList.remove("show__notes");
};
