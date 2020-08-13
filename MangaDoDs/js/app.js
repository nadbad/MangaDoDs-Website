const carouselSlide = document.querySelector('.carousel-slider');
const carouselImages = document.querySelectorAll('.carousel-slider img');

const nextBtn = document.getElementById('nextBtn');
const prevBtn = document.getElementById('prevBtn');

let counter = 1;
const size = carouselImages[0].clientWidth;

carouselSlide.style.transform = 'translateX(' + (- size * counter) + 'px)';


nextBtn.addEventListener('click', () => {
    if (counter >= carouselImages.length - 1) return;
    carouselSlide.style.transition = "transform 0.4s ease-in-out";
    counter++;
    carouselSlide.style.transform = 'translateX(' + (- size * counter) + 'px)';
});
prevBtn.addEventListener('click', () => {
    if (counter <= 0) return;
    carouselSlide.style.transition = "transform 0.4s ease-in-out"
    counter--;
    carouselSlide.style.transform = 'translateX(' + (- size * counter) + 'px)';
});

carouselSlide.addEventListener('transitionend', () => {
    if (carouselImages[counter].id === 'lastClone') {
        carouselSlide.style.transition = "none";
        counter = carouselImages.length - 2;
        carouselSlide.style.transform = 'translateX(' + (- size * counter) + 'px)';
    }

    if (carouselImages[counter].id === 'firstClone') {
        carouselSlide.style.transition = "none";
        counter = carouselImages.length - counter;
        carouselSlide.style.transform = 'translateX(' + (- size * counter) + 'px)';
    }
});

function openSlideMenu() {
    side = document.getElementById('side-menu').style.width = '300px';
    main = document.getElementById('main').style.marginLeft = '300px';
}

function closeSlideMenu() {
    side = document.getElementById('side-menu').style.width = '0';
    main = document.getElementById('main').style.marginLeft = '0';
}

document.getElementsByClassName('side-nav').addEventListener('click', closeSlideMenu)