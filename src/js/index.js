import * as mobileNav from './modules/mobile-nav'
import * as searchBar from './modules/searchstring'
import counter from './modules/counter'
import textLoad from './modules/changing-text'

mobileNav.mobileNav()
//Cout up
counter(50, '#plants-number')
counter(10000, '#customers-number')

//Lennis
const lenis = new Lenis()


function raf(time) {
  lenis.raf(time)
  requestAnimationFrame(raf)
}

requestAnimationFrame(raf)

//Changing text
textLoad()
let change = setInterval(textLoad, 12000)
let searchString = document.getElementsByName('search')[0];
searchString.addEventListener('click', searchBar.searchstringActive)
searchString.addEventListener('blur', searchBar.searchstringBlur)


//Swiper
const swiper = new Swiper('.swiper', {
  direction: 'horizontal',
  loop: true,
  slidesPerView:1,
  spaceBetween: 0,
  breakpoints: {
    1120: {
        slidesPerView: 2,
        spaceBetween: 50
    },
},
  pagination: {
    el: '.swiper-pagination',
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  scrollbar: {
    el: '.swiper-scrollbar',
  },
});

//Gsap
let tl = gsap.timeline()
tl.from('.header__row', {
  y: -20,
  opacity: 0,
  duration: 1,
  ease: 'power1.out'
}).from('.search__wrapper', {
  x: 50,
  opacity: 0,
  duration: 1.5,
  ease: 'power1.out'
}).from('.bestsellers', {
  scrollTrigger: {
    trigger: '.bestsellers',
    start: "top center",
    end: 'bottom bottom',
    scrub: true,
  },
  x: 25,
  opacity: 0,
  duration: 1,
  ease: 'power1.out'
}).from('.about', {
  scrollTrigger: {
    trigger: '.about',
    start: "top center", //старт скроллер
    end: 'bottom bottom',
    scrub: true,
  },
  y: 100,
  opacity: 0,
  duration: 2,
  ease: 'power1.out'
}).from('.categories', {
  scrollTrigger: {
    trigger: '.categories',
    start: "top center", //старт скроллер
    end: 'bottom bottom',
    scrub: true,
  },
  y: 100,
  opacity: 0,
  duration: 2,
  ease: 'power1.out'
}).from('.categories__card-link', {
  scrollTrigger: {
    trigger: '.categories__cards',
    start: "top center", // Start scroll
    end: 'bottom bottom',
    scrub: true,
  },
  duration: 1,
  opacity: 0,
  x: -50,
  onComplete: function() {
    document.querySelector('.categories__card-link').addEventListener('mouseover', function() {
      gsap.to(this, {scale: 1.1});
    });
    document.querySelector('.categories__card-link').addEventListener('mouseout', function() {
      gsap.to(this, {scale: 1});
    });
  }
}).from('.reviews', {
  scrollTrigger: {
    trigger: '.reviews',
    start: "top center", //старт скроллер
    end: 'bottom bottom',
    scrub: true,
  },
  opacity: 0,
  duration: 1
}).from('.footer__details', {
  scrollTrigger: {
    trigger: '.footer__details',
    start: "top bottom", //старт скроллер
    end: 'bottom bottom',
    scrub: true,
  },
  x: -50,
  opacity: 0,
  duration: 3
}).from('.footer__nav', {
  scrollTrigger: {
    trigger: '.footer__nav',
    start: "top bottom", //старт скроллер
    end: 'bottom bottom',
    scrub: true,
  },
  x: -50,
  opacity: 0,
  duration: 3
})