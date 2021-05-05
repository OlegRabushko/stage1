const mapContainer = document.querySelector('.map__container');
const zoomInButton = document.querySelector('.btn__plus');
const zoomOutButton = document.querySelector('.btn__minus');
const pets = document.querySelectorAll('.map__animal-point');
const zoomCoefficient = 1.5;
let pointX = 0;
let pointY = 0;
let zoomCount = 1;
const zoomPetCount = Array(pets.length).fill(1);
let stopMoveCount = 0;

const moveAt = (e) => {
  if (!e.target.classList.contains('map__container')) {
    return false;
  }
  const shiftX = e.clientX - pointX;
  const shiftY = e.clientY - pointY;
  pointX = e.clientX;
  pointY = e.clientY;
  mapContainer.style.left = `${+window.getComputedStyle(mapContainer).left.split('px').shift() + shiftX}px`;
  mapContainer.style.top = `${+window.getComputedStyle(mapContainer).top.split('px').shift() + shiftY}px`;
};

mapContainer.onmousedown = (e) => {
  if (stopMoveCount !== 0) {
    pointX = e.clientX;
    pointY = e.clientY;
    moveAt(e);
    document.addEventListener('mousemove', moveAt);
    document.addEventListener('mouseup', () => {
      document.removeEventListener('mousemove', moveAt);
    });
  }
};

zoomInButton.onclick = () => {
  if (stopMoveCount < 4) {
    stopMoveCount++
  }
  mapContainer.style.transform = `scale(${zoomCount > 5 ? zoomCount : zoomCount *= zoomCoefficient})`;
  pets.forEach((el, i) => el.style.transform = `scale(${zoomPetCount[i] < 0.2 ? zoomPetCount[i] : zoomPetCount[i] /= zoomCoefficient})`);
  console.log(zoomPetCount);

}
zoomOutButton.onclick = () => {
  if (stopMoveCount > 0) {
    stopMoveCount--
  }
  if (stopMoveCount === 0) {
    mapContainer.style.top = '0px';
    mapContainer.style.left = '0px';
  }
  zoomCount < 1.01 ? false : mapContainer.style.transform = `scale(${zoomCount /= zoomCoefficient})`;
  zoomPetCount[1] > 0.9 ? false : pets.forEach((el, i) => el.style.transform = `scale(${zoomPetCount[i] *= zoomCoefficient})`);
  console.log(zoomPetCount);

}













































// let scaleX = 0.18;
// let scaleY = 0.27;

// let moveYPoint = 0;
// let moveXPoint = '200';


// mapImage.onmousedown = function (event) {
//   let shiftX = event.clientX - mapImage.getBoundingClientRect().left;
//   let shiftY = event.clientY - mapImage.getBoundingClientRect().top;
//   moveAt(event.pageX, event.pageY);
//   function moveAt(pageX, pageY) {
//     const mathBoard = window.innerWidth - wrapper.offsetWidth;
//     if (mapImage.width > 1600) {
//       pet.style.left = pageX - shiftX + (wrapper.offsetWidth * scaleX) - (mathBoard / 2) + 'px';
//       pet.style.top = pageY - shiftY + (mapImage.offsetHeight * scaleY) + 'px';
//       moveXPoint = pet.style.left;
//     }
//     mapImage.style.left = pageX - (mathBoard / 2.09) - shiftX + 'px';
//     mapImage.style.top = pageY - 223 - shiftY + 'px';
//     if (pageX <= mathBoard * 0.47 || pageY <= 223) {
//       stopDrag();
//     } else if (pageX >= window.innerWidth - (mathBoard * 0.47) - 16 || pageY >= 1222) {
//       stopDrag();
//     }
//   }
//   wrapper.append(mapImage);

//   function onMouseMove(event) {
//     moveAt(event.pageX, event.pageY);
//   }

//   document.addEventListener('mousemove', onMouseMove);

//   mapImage.onmouseup = function () {
//     document.removeEventListener('mousemove', onMouseMove);
//     mapImage.onmouseup = null;
//   };

//   function stopDrag() {
//     document.removeEventListener('mousemove', onMouseMove);
//     mapImage.removeEventListener('mouseup', stopDrag);
//   }
// };


// mapImage.ondragstart = function () {
//   return false;
// };

// let num = 0;

// console.log(window);

// zoomInButton.addEventListener('click', () => {
//   let changesWidthImage = window.getComputedStyle(mapImage, null).width.split('px').shift();
//   if (num < 4) {
//     num++
//     scaleX *= 1.2;
//     scaleY *= 1.1;
//     // pet.style.left = `${moveXPoint - ((changesWidthImage / 2) / (15 / num))}px`;

//     console.log(pet.style.left);
//   }


//   if (mapImage.width <= wrapper.offsetWidth * 2) {
//     if (mapImage.style.position !== "absolute") {
//       mapImage.style.position = "absolute";
//     }
//     const prevWidth = mapImage.width;
//     const prevHeight = mapImage.height;
//     mapImage.style.width = `${mapImage.width * 1.2}px`;
//     wrapper.style.width = `${wrapper.width * 1.2}px`
//     mapImage.style.height = "auto";
//     const nextWidth = mapImage.width;
//     const nextHeight = mapImage.height;
//     const topPos = mapImage.offsetTop || 0;
//     const leftPos = mapImage.offsetLeft || 0;
//     mapImage.style.left = `${leftPos - ((nextWidth - prevWidth) / 2)}px`;
//     mapImage.style.top = `${topPos - ((nextHeight - prevHeight) / 2)}px`;
//   }
// });

// zoomOutButton.addEventListener('click', () => {
//   if (num > 0) {
//     num--
//     scaleX /= 1.2;
//     scaleY /= 1.1;

//   }
//   if (mapImage.width >= wrapper.offsetWidth || mapImage.height >= wrapper.offsetHeight) {
//     const prevWidth = mapImage.width;
//     const prevHeight = mapImage.height;
//     mapImage.style.width = `${mapImage.width / 1.2}px`;
//     mapImage.style.height = "auto";
//     const nextWidth = mapImage.width;
//     const nextHeight = mapImage.height;
//     const topPos = mapImage.offsetTop || 0;
//     const leftPos = mapImage.offsetLeft || 0;
//     mapImage.style.left = `${leftPos + ((prevWidth - nextWidth) / 2)}px`;
//     mapImage.style.top = `${topPos + ((prevHeight - nextHeight) / 2)}px`;

//     if (mapImage.width <= wrapper.offsetWidth && mapImage.height <= wrapper.offsetHeight) {
//       mapImage.style.width = `${wrapper.offsetWidth}px`;
//       mapImage.style.height = "auto";
//       mapImage.style.top = `${(wrapper.offsetHeight - mapImage.height) / 2}px`;
//       mapImage.style.left = '0px';
//       if (mapImage.height >= wrapper.offsetHeight) {
//         mapImage.style.height = `${wrapper.offsetHeight}px`;
//         mapImage.style.width = 'auto';
//         mapImage.style.top = '0px';
//         mapImage.style.left = `${(wrapper.offsetWidth - mapImage.width) / 2}px`;
//         mapImage.style.left = '0px';
//       }
//     }
//   }
//   if (mapImage.width < 1520) {
//     mapImage.style.position = 'static'
//   }
// });
