/*---------------------menu 640--------------------------------*/
const pets = document.querySelectorAll('.nav');
const bottomArrow = document.querySelector('.side-bar__bottom-arrow');
const petNumber = 0;

const hidePets = () => {
  for (let i = 0; i < pets.length; i++) {
    if (i !== petNumber) {
      pets[i].style.display = 'none'
    }
  }
}
const showPets = () => {
  for (let i = 0; i < pets.length; i++) {
    if (i !== petNumber) {
      pets[i].style.display = 'block'
    }
  }
}
pets[petNumber].ondblclick = () => {

}

let n = 0;
pets[petNumber].onclick = () => {
  if (n === 1) {
    for (let i = 0; i < pets.length; i++) {
      if (i !== petNumber)
        pets[i].style.display = 'none'
    }
    bottomArrow.style.transform = 'rotate(0deg)'
    pets[petNumber].style.borderBottom = 'none'
    n = 0
  }
  if (n === 0) {
    for (let i = 0; i < pets.length; i++) {
      pets[i].style.display = 'block'
    }
    pets[petNumber].style.borderBottom = '1px solid rgba(168, 168, 168, 0.25)'
    bottomArrow.style.transform = 'rotate(180deg)'
  }
  if (n >= 1) {
    n--
  }
  console.log(n);
}

if (window.innerWidth <= 500) {
  hidePets()
}
window.addEventListener('resize', (event) => {
  if (event.target.innerWidth <= 500) {
    hidePets()
  }
  else (
    showPets()
  )
})

/*-------------------------video slider---------------------*/
const videos = document.querySelectorAll('.video-skin');
const rightArrow = document.querySelector('.right-arrow');
const leftArrow = document.querySelector('.left-arrow');
const mainVideo = document.querySelector('.main-video');
const pandaVideo = document.querySelector('.panda__video');
const like = document.querySelector('.ico-like');
const likeRect = document.querySelector('.ico-like rect');
const likePath = document.querySelector('.ico-like path');
const videosRefs = {
  "https://www.youtube.com/embed/YIw18Ho_n1g": { checkVideo: false, checkLike: false },
};
let srcArray = ''
let rightVideo = 0;
let leftVideo = 2;
if (window.innerWidth < 1005) {
  rightVideo = 0;
  leftVideo = 1;
}
let checkLike = 0;


const showVideos = () => {
  videos.forEach((el, i) => {
    if (i > leftVideo || i < rightVideo) {
      el.style.display = 'none'
    } else {
      el.style.display = 'flex'
    }
  })
}

rightArrow.onclick = () => {
  if (leftVideo < videos.length - 1) {
    rightVideo++;
    leftVideo++;
  }
  else {
    if (window.innerWidth < 1005) {
      rightVideo = 0;
      leftVideo = 1;
    }
    else {
      rightVideo = 0;
      leftVideo = 2;
    }
  }
  showVideos()
}

leftArrow.onclick = () => {
  if (rightVideo < 1) {
    if (window.innerWidth < 1005) {
      rightVideo = 5;
      leftVideo = 6;
    }
    else {
      rightVideo = 4;
      leftVideo = 6;
    }
  }
  else {
    rightVideo--
    leftVideo--
  }
  showVideos()
}
showVideos();

videos.forEach((el) => {
  videosRefs[el.childNodes[1].src] = { checkVideo: false, checkLike: false };
})

videos.forEach((el, i) => el.onclick = () => {
  if (videosRefs[el.childNodes[1].src].checkVideo === true) {
    likeRect.style.stroke = '#ff0055'
    likePath.style.stroke = '#ff0055'
    likePath.style.fill = '#ff0055'

  } else {
    likeRect.style.stroke = '#19707D'
    likePath.style.stroke = '#19707D'
    likePath.style.fill = 'transparent'
  }
  srcArray = pandaVideo.src
  pandaVideo.src = el.childNodes[1].src
  el.childNodes[1].src = srcArray;
  console.log(videosRefs[el.childNodes[1].src]);
})


like.onclick = () => {
  for (key in videosRefs) {
    if (pandaVideo.src === key) {
      if (videosRefs[key].checkLike === true) {
        likeRect.style.stroke = '#19707D'
        likePath.style.stroke = '#19707D'
        likePath.style.fill = 'transparent'
      }
      else {
        likeRect.style.stroke = '#ff0055'
        likePath.style.stroke = '#ff0055'
        likePath.style.fill = '#ff0055'
      }
      if (videosRefs[key].checkLike === false) {
        videosRefs[key].checkLike = true;
      }
      else {
        videosRefs[key].checkLike = false;
      }
    }
  }
  for (key in videosRefs) {
    if (videosRefs[key].checkLike === true) {
      videosRefs[key].checkVideo = true;
    }
    else {
      videosRefs[key].checkVideo = false;
    }
  }
}

