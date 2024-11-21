// Auto Slider for Banner
let currentSlide = 0;
const slides = document.querySelectorAll(".slider img");

function showSlides() {
  slides.forEach((slide, index) => {
    slide.style.display = index === currentSlide ? "block" : "none";
  });
  currentSlide = (currentSlide + 1) % slides.length;
}

setInterval(showSlides, 3000);

// Form Validation
document.getElementById("contactForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const interest = document.getElementById("interest").value;

  if (!name || !email || !interest) {
    alert("Please fill out all fields!");
    return;
  }

  alert(Thank you, ${name}! We will contact you soon.);
});