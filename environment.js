const carousel = document.querySelector(".carousel");
const items = document.querySelectorAll(".item");
let currdeg = 0;

document.querySelector(".prev").addEventListener("click", () => rotate("p"));

function rotate(direction) {
  if (direction === "p") {
    currdeg += 120;
  }

  carousel.style.transform = `rotateY(${currdeg}deg)`;
  carousel.style.webkitTransform = `rotateY(${currdeg}deg)`;
  carousel.style.mozTransform = `rotateY(${currdeg}deg)`;
  carousel.style.oTransform = `rotateY(${currdeg}deg)`;

  items.forEach(item => {
    item.style.transform = `rotateY(${-currdeg}deg)`;
    item.style.webkitTransform = `rotateY(${-currdeg}deg)`;
    item.style.mozTransform = `rotateY(${-currdeg}deg)`;
    item.style.oTransform = `rotateY(${-currdeg}deg)`;
  });
}

// Second caroussel
const carousel2 = document.querySelector(".carousel2");
const items2 = document.querySelectorAll(".item2");
let currdeg2 = 0;

document.querySelector(".prev2").addEventListener("click", () => rotate2("p"));

function rotate2(direction) {
  if (direction === "p") {
    currdeg2 += 120;
  }

  carousel2.style.transform = `rotateY(${currdeg2}deg)`;
  carousel2.style.webkitTransform = `rotateY(${currdeg2}deg)`;
  carousel2.style.mozTransform = `rotateY(${currdeg2}deg)`;
  carousel2.style.oTransform = `rotateY(${currdeg2}deg)`;

  items2.forEach(items2 => {
    items2.style.transform = `rotateY(${-currdeg2}deg)`;
    items2.style.webkitTransform = `rotateY(${-currdeg2}deg)`;
    items2.style.mozTransform = `rotateY(${-currdeg2}deg)`;
    items2.style.oTransform = `rotateY(${-currdeg2}deg)`;
  });
}
 
