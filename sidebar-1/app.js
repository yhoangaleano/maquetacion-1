const menuBtn = document.querySelector('.menu-btn');
const aside = document.querySelector('aside');

menuBtn.addEventListener('click', () => {
  aside.classList.toggle('active');
  menuBtn.classList.toggle('active');
});
