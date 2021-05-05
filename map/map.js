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
  zoomCount > 5 ? false : mapContainer.style.transform = `scale(${zoomCount *= zoomCoefficient})`;
  pets.forEach((el, i) => el.style.transform = `scale(${zoomPetCount[i] < 0.2 ? zoomPetCount[i] : zoomPetCount[i] /= zoomCoefficient})`);
}
zoomOutButton.onclick = () => {
  if (stopMoveCount > 0) {
    stopMoveCount--
  }
  if (stopMoveCount === 0) {
    mapContainer.style.top = '0px';
    mapContainer.style.left = '0px';
  }
  zoomCount < 1.1 ? false : mapContainer.style.transform = `scale(${zoomCount /= zoomCoefficient})`;
  zoomPetCount[1] > 0.9 ? false : pets.forEach((el, i) => el.style.transform = `scale(${zoomPetCount[i] *= zoomCoefficient})`);
}
