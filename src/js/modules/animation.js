window.addEventListener("scroll", function () {
  const promoSection = document.querySelector(".promo");
  const scrollPosition = window.scrollY;
  promoSection.style.transform = `translateY(-${scrollPosition}px)`;
});
