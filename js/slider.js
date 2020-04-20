const SlideOne = document.querySelector('#slider1');
const SlideTwo = document.querySelector('#slider2');
const SlideThree = document.querySelector('#slider3');
const SlideOneActv = document.querySelector('.conteiner_slide1');
const SlideTwoActv = document.querySelector('.conteiner_slide2');
const SlideThreeActv = document.querySelector('.conteiner_slide3');

SlideOne.addEventListener('click', () => {
    SlideOneActv.classList.add('visible')
    SlideTwoActv.classList.remove('visible')
    SlideThreeActv.classList.remove('visible')
    SlideOne.classList.add('activeted')
    SlideTwo.classList.remove('activeted')
    SlideThree.classList.remove('activeted')
});

SlideTwo.addEventListener('click', () => {
    SlideOneActv.classList.remove('visible')
    SlideTwoActv.classList.add('visible')
    SlideThreeActv.classList.remove('visible')
    SlideOne.classList.remove('activeted')
    SlideTwo.classList.add('activeted')
    SlideThree.classList.remove('activeted')
});

SlideThree.addEventListener('click', () => {
    SlideOneActv.classList.remove('visible')
    SlideTwoActv.classList.remove('visible')
    SlideThreeActv.classList.add('visible')
    SlideOne.classList.remove('activeted')
    SlideTwo.classList.remove('activeted')
    SlideThree.classList.add('activeted')
});