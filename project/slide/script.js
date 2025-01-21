const prevButton = document.querySelector('.prev');
const nextButton = document.querySelector('.next');
const photoContainer = document.querySelector('.photo-container');

let slideIndex = 0;
const totalSlides = document.querySelectorAll('.photo-slide').length;

prevButton.addEventListener('click', () => {
    slideIndex = (slideIndex > 0) ? slideIndex - 1 : totalSlides - 1;
    updateSlide();
});

nextButton.addEventListener('click', () => {
    slideIndex = (slideIndex < totalSlides - 1) ? slideIndex + 1 : 0;
    updateSlide();
});

function updateSlide() {
    const slideWidth = document.querySelector('.photo-slide').clientWidth;
    photoContainer.style.transform = `translateX(-${slideIndex * slideWidth}px)`;
}
