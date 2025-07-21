const slides = document.querySelectorAll('.slide');
const prevBtn = document.querySelector('.prev');
const nextBtn = document.querySelector('.next');
const slider = document.querySelector('.slider');

let idx = 0;
let interval = setInterval(nextSlide, 3500);

// Show slide by index
function showSlide(index) {
  slides.forEach(slide => slide.classList.remove('active'));
  slides[index].classList.add('active');
}

// Next / Prev functions
function nextSlide() {
  idx = (idx + 1) % slides.length;
  showSlide(idx);
}

function prevSlide() {
  idx = (idx - 1 + slides.length) % slides.length;
  showSlide(idx);
}

// Event listeners for nav buttons
nextBtn.addEventListener('click', () => {
  nextSlide();
  resetTimer();
});

prevBtn.addEventListener('click', () => {
  prevSlide();
  resetTimer();
});

// Reset timer if user clicks button
function resetTimer() {
  clearInterval(interval);
  interval = setInterval(nextSlide, 5000);
}

// ✅ Pause on hover
slider.addEventListener('mouseenter', () => clearInterval(interval));
slider.addEventListener('mouseleave', () => {
  interval = setInterval(nextSlide, 5000);
});
