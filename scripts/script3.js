document.addEventListener('DOMContentLoaded', function() {
    const slider = document.querySelector('.slider3');
    const images = document.querySelectorAll('.slider3 img');
    const prevButton = document.querySelector('.slider3-button-prev');
    const nextButton = document.querySelector('.slider3-button-next');
    let currentIndex = 0;
    const imageWidth = images[0].clientWidth; // Ширина одного изображения

    function goToSlide(index) {
        if (index < 0) {
            index = images.length - 1;
        } else if (index >= images.length) {
            index = 0;
        }
        currentIndex = index;
        slider.style.transform = `translateX(-${currentIndex * imageWidth}px)`;
    }


    nextButton.addEventListener('click', function() {
        goToSlide(currentIndex + 1);
    });

    prevButton.addEventListener('click', function() {
        goToSlide(currentIndex - 1);
    });
});