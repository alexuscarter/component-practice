const navToggle = document.querySelector(".menu-icon");
const mobileMenu = document.querySelector(".mobile-menu");

const faqItems = document.querySelectorAll(".faq-item");

//faq toggle
faqItems.forEach((item) => {
  const question = item.querySelector(".faq-title");
  const answer = item.querySelector(".answer");

  question.addEventListener("click", () => {
    answer.classList.toggle("open-answer");
  });
});

// menu toggle
navToggle.addEventListener("click", () => {
  mobileMenu.classList.toggle("is-open");
});
