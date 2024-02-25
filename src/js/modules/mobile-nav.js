function mobileNav() {
  const navBtn = document.querySelector('.mobile-nav-btn');
  const navBtnCLose = document.querySelector('.mobile__close');
  const nav = document.querySelector('.mobile-nav');
  const menuIcon = document.querySelector('.nav-icon');

  navBtn.onclick = function() {
    nav.classList.add('mobile-nav--open');
    menuIcon.classList.add('nav-icon--active');
    document.body.classList.add('no-scroll');
  }

  navBtnCLose.onclick = function() {
    nav.classList.remove('mobile-nav--open');
    menuIcon.classList.remove('nav-icon--active');
    document.body.classList.remove('no-scroll');
  }
}

export {mobileNav};