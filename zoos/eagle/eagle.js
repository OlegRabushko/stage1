const pets = document.querySelectorAll('.nav');
const bottomArrow = document.querySelector('.side-bar__bottom-arrow');
const petNumber = 1;

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
  if (pets[1].style.display = 'none') {
    for (let i = 0; i < pets.length; i++) {
      pets[i].style.display = 'block'
    }
  }
  pets[petNumber].style.borderBottom = '1px solid rgba(168, 168, 168, 0.25)'
  bottomArrow.style.transform = 'rotate(180deg)'

}
pets[petNumber].onclick = () => {
  if (pets[1].style.display = 'block') {
    for (let i = 0; i < pets.length; i++) {
      if (i !== petNumber)
        pets[i].style.display = 'none'
    }
  }
  bottomArrow.style.transform = 'rotate(0deg)'
  pets[petNumber].style.borderBottom = 'none'
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