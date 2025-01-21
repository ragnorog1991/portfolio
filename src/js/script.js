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

// Получаем кнопку
const scrollToTopBtn = document.getElementById("scrollToTopBtn");

// Показываем кнопку при прокрутке вниз
window.onscroll = function () {
  if (
    document.body.scrollTop > 100 ||
    document.documentElement.scrollTop > 100
  ) {
    scrollToTopBtn.style.display = "block";
  } else {
    scrollToTopBtn.style.display = "none";
  }
};

// Функция для плавной прокрутки к верху
scrollToTopBtn.addEventListener("click", function () {
  window.scrollTo({
    top: 0,
    behavior: "smooth", // Плавная прокрутка
  });
});

document
  .getElementById("contactForm")
  .addEventListener("submit", function (event) {
    event.preventDefault(); // Предотвращаем стандартное поведение формы

    // Показываем сообщение об успешной отправке
    document.getElementById("successMessage").style.display = "block";

    // Очищаем форму
    this.reset();
  });
