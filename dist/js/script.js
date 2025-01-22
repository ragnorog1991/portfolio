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

// кнопка для прокрутки вверх
const scrollToTopBtn = document.getElementById("scrollToTopBtn");

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
    behavior: "smooth",
  });
});

//код для отправки данных на сервер в JSON формате
document
  .getElementById("contactForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    const formData = {
      name: document.getElementById("name").value,
      email: document.getElementById("email").value,
      text: document.getElementById("text").value,
    };

    fetch(this.action, {
      method: this.method,
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((response) => {
        if (response.ok) {
          // Показываем сообщение об успешной отправке
          document.getElementById("successMessage").style.display = "block";
          // Очищаем форму (по желанию)
          this.reset();
        } else {
          // Обработка ошибок
          console.error("Ошибка при отправке формы");
        }
      })
      .catch((error) => {
        console.error("Ошибка:", error);
      });
  });
