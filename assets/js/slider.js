let currentIndex = 0;
const slides = document.querySelectorAll('.slide');
const totalSlides = slides.length;
const slidesToShow = 5; // Number of images to show at once
const slider = document.querySelector('.slider');

function showSlide(index) {
    const newTransform = `translateX(${-index * (100 / slidesToShow)}%)`;
    slider.style.transform = newTransform;
}

function nextSlide() {
    if (currentIndex >= totalSlides - slidesToShow) {
        currentIndex = 0; // Move to the first slide
        showSlide(currentIndex);
    } else {
        currentIndex++;
        showSlide(currentIndex);
    }
}

function prevSlide() {
    if (currentIndex <= 0) {
        currentIndex = totalSlides - slidesToShow; // Move to the last slide
        showSlide(currentIndex);
    } else {
        currentIndex--;
        showSlide(currentIndex);
    }
}

document.querySelector('.next-btn').addEventListener('click', nextSlide);
document.querySelector('.prev-btn').addEventListener('click', prevSlide);

// Initially show the first set of slides
showSlide(currentIndex);
