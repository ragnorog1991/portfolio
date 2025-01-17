const hamburger = document.querySelector(".hamburger"),
  menu = document.querySelector(".menu"),
  closeElem = document.querySelector(".menu__close");

hamburger.addEventListener("click", () => {
  menu.classList.add("active");
});

closeElem.addEventListener("click", () => {
  menu.classList.remove("active");
});

const counters = document.querySelectorAll(".skills__progress-item-subtext"),
  lines = document.querySelectorAll(".skills__progress-line span");

counters.forEach((item, i) => {
  lines[i].style.width = item.innerHTML;
});

document.addEventListener("scroll", function () {
  const animatedBlock = document.getElementById("animatedBlock");
  const blockPosition = animatedBlock.getBoundingClientRect().top;
  const screenPosition = window.innerHeight / 1.5; // Позиция, при которой блок должен появиться

  if (blockPosition < screenPosition) {
    animatedBlock.classList.add("visible");
  }
});
