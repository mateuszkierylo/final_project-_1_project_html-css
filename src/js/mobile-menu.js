(() => {
  const mobileMenu = document.querySelector('.js-menu-container');
  const openMenuBtn = document.querySelector('.js-open-menu');
  const closeMenuBtn = document.querySelector('.js-close-menu');
  const closeMenuBtnAbout = document.querySelector('.js-close-menu-about');
  const closeMenuBtnLessons = document.querySelector('.js-close-menu-lessons');
  const closeMenuBtnTeachers = document.querySelector(
    '.js-close-menu-teachers'
  );
  const closeMenuBtnReviews = document.querySelector('.js-close-menu-reviews');
  const closeMenuBtnContact = document.querySelector('.js-close-menu-contact');

  const toggleMenu = () => {
    const isMenuOpen =
      openMenuBtn.getAttribute('aria-expanded') === 'true' || false;
    openMenuBtn.setAttribute('aria-expanded', !isMenuOpen);
    mobileMenu.classList.toggle('is-open');

    const scrollLockMethod = !isMenuOpen
      ? 'disableBodyScroll'
      : 'enableBodyScroll';
    bodyScrollLock[scrollLockMethod](document.body);
  };

  openMenuBtn.addEventListener('click', toggleMenu);
  closeMenuBtn.addEventListener('click', toggleMenu);
  closeMenuBtnAbout.addEventListener('click', toggleMenu);
  closeMenuBtnLessons.addEventListener('click', toggleMenu);
  closeMenuBtnTeachers.addEventListener('click', toggleMenu);
  closeMenuBtnReviews.addEventListener('click', toggleMenu);
  closeMenuBtnContact.addEventListener('click', toggleMenu);

  // Close the mobile menu on wider screens if the device orientation changes
  window.matchMedia('(min-width: 768px)').addEventListener('change', e => {
    if (!e.matches) return;
    mobileMenu.classList.remove('is-open');
    openMenuBtn.setAttribute('aria-expanded', false);
    bodyScrollLock.enableBodyScroll(document.body);
  });
})();
