
// Прелоадер
window.addEventListener('load', function () {
  setTimeout(function () {
    document.querySelector('.preloader').style.display = 'none';
  }, 1300);
});

if (window.innerWidth < 768) {
  setTimeout(function () {
    document.querySelector('.preloader').style.display = 'none';
  }, 2700);
}
// Аккордион
const gridItems = document.querySelectorAll('.grid-item');
gridItems.forEach(item => {
  const header = item.querySelector('.grid-item-header');
  header.addEventListener('click', () => {
    item.classList.toggle('active');
  });
});
// Аккордион

// Стрелка прокрутки
const goTopBtn = document.querySelector(".go-top");

window.addEventListener("scroll", trackScroll);
goTopBtn.addEventListener("click", goTop);

function trackScroll() {
  const scrolled = window.pageYOffset;
  const coords = document.documentElement.clientHeight;
  if (scrolled > coords) {
    goTopBtn.classList.add("go-top--show");
  } else {
    goTopBtn.classList.remove("go-top--show");
  }
}

function goTop() {
  if (window.pageYOffset > 0) {
    window.scrollBy(0, -75);
    setTimeout(goTop, 0);
  }
}
// Стрелка прокрутки

// Меню бургер
const navbarBurger = document.querySelector('.navbar_burger'); 
const navbarMenu = document.querySelector('.navbar_menu');

const menuLinks = document.querySelectorAll('.navbar_menu a');

menuLinks.forEach(link => {
  link.addEventListener('click', () => {
    if(navbarBurger.classList.contains('active')) {
      navbarBurger.classList.remove('active');
      navbarMenu.classList.remove('active');
    }
  });
});

navbarBurger.addEventListener('click', () => { 
  navbarBurger.classList.toggle('active'); 
  navbarMenu.classList.toggle('active'); 
});
// Меню бургер

// Фиксация навбара
window.addEventListener('scroll', function() {
  const navbar = document.querySelector('.navbar');
  const headerAbout = document.querySelector('.header-about');
  const headerAboutHeight = headerAbout.offsetHeight;
  const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

  if (scrollTop > headerAboutHeight && window.innerWidth < 768) {
    navbar.classList.add('fixed');
    document.body.style.paddingTop = navbar.offsetHeight + 'px';
  } else {
    navbar.classList.remove('fixed');
    document.body.style.paddingTop = 0;
  }
});
// Фиксация навбара

// Активная ссылка
const navbarLinks = document.querySelectorAll('.navbar_menu a');

navbarLinks.forEach(link => {
  link.addEventListener('click', function() {
    navbarLinks.forEach(link => link.classList.remove('active'));
    this.classList.add('active');
  });
});
// Активная ссылка