const sliderContainer = document.querySelector('.slider-container');
const slideRight = document.querySelector('.right-slide');
const slideLeft = document.querySelector('.left-slide');
const upButton = document.querySelector('.up-button')
const downButton = document.querySelector('.down-button');
const pictureLength = slideRight.querySelectorAll('div').length;

let activeSlideIndex = 0;

slideLeft.style.top =`-${(pictureLength -1) * 100}vh`;

upButton.addEventListener('click',()=> changeSlide('up'));
downButton.addEventListener('click',()=> changeSlide('down'));

const changeSlide = (direction) => {
    const slideHeight = sliderContainer.clientHeight;

    if(direction === 'up'){
        activeSlideIndex++
        if(activeSlideIndex > pictureLength -1){
            activeSlideIndex = 0
        }
    } else if (direction === 'down'){
        activeSlideIndex--
        if(activeSlideIndex < 0){
            activeSlideIndex = pictureLength -1
        }
    }

    slideRight.style.transform = `translateY(-${activeSlideIndex * slideHeight}px)`

    slideLeft.style.transform = `translateY(${activeSlideIndex * slideHeight}px)`
}



