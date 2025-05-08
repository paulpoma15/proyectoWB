// carrusel2.js
const prevBtn = document.querySelector('.prev');
const nextBtn = document.querySelector('.next');
const slides = document.querySelectorAll('.carousel-item');
let index = 0;

function showSlide(i) {
  slides.forEach((slide, idx) => {
    slide.classList.remove('active');
    if (idx === i) {
      slide.classList.add('active');
    }
  });
}

prevBtn.addEventListener('click', () => {
  index = (index > 0) ? index - 1 : slides.length - 1;
  showSlide(index);
});

nextBtn.addEventListener('click', () => {
  index = (index < slides.length - 1) ? index + 1 : 0;
  showSlide(index);
});

// Auto-carrusel (opcional)
setInterval(() => {
  nextBtn.click();
}, 5000);
