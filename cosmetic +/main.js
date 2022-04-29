// Sidebar Codes Start
const navbar = document.querySelector('.navbar');

document.querySelector('#menu-btn').onclick = () => {
    navbar.classList.toggle('active');
};

document.querySelector('#close-navbar').onclick = () => {
    navbar.classList.remove('active');
};

window.onscroll = () => {
    navbar.classList.remove('active');
}
// Sidebar Codes End

// Home Slider Codes Start
const slider = [
    {
        id: 1,
        content1: 'best product ever',
        content2: 'face lotions',
        img: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.psypost.org%2F2021%2F05%2Fstudy-suggests-that-women-wearing-heavier-makeup-are-perceived-as-having-less-mental-capacity-and-less-moral-status-60837&psig=AOvVaw0XLfO16D-TMGKsmcwoZJKy&ust=1648566457215000&source=images&cd=vfe&ved=0CAsQjRxqFwoTCLDLn-WK6fYCFQAAAAAdAAAAABAD'
    },
    {
        id: 2,
        content1: 'best price',
        content2: 'make-UP',
        img: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Funsplash.com%2Fs%2Fphotos%2Fcosmetic&psig=AOvVaw0XLfO16D-TMGKsmcwoZJKy&ust=1648566457215000&source=images&cd=vfe&ved=0CAsQjRxqFwoTCLDLn-WK6fYCFQAAAAAdAAAAABAJ'
    }

];
const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');

const homeImg = document.getElementById('#homeImg');
const content1 = document.getElementById('#content1');
const content2 = document.getElementById('#content2');

let currentItem = 0;

window.addEventListener('DOMContentLoaded', function () {
    showSliders(currentItem)
});
function showSliders(slider) {
    const item = slider[slider];
    homeImg.src = item.img;
    content1.textContent = item.content1;
    content2.textContent = item.content2;
}
nextBtn.addEventListener('click', function () {
    currentItem++;
    if (currentItem >= slider.length) {
        currentItem = 0;
    }
    showSliders(currentItem);
});
prevBtn.addEventListener('click', function () {
    currentItem--;
    if (currentItem < 0) {
        currentItem = slider.length - 1
    }
    showSliders(currentItem)
});

// Swiper Slider Products
var swiper = new Swiper(".products-slider", {
    loop:true,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    breakpoints: {
        640: {
          slidesPerView: 2,
          spaceBetween: 20,
        },
        768: {
          slidesPerView: 4,
          spaceBetween: 40,
        },
        1024: {
          slidesPerView: 5,
          spaceBetween: 50,
        },
      },
  });

  // Swiper Arrivals
  var swiper = new Swiper(".arrivals-slider", {
    loop:true,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    breakpoints: {
        640: {
          slidesPerView: 2,
          spaceBetween: 20,
        },
        768: {
          slidesPerView: 4,
          spaceBetween: 40,
        },
        1024: {
          slidesPerView: 5,
          spaceBetween: 50,
        },
      },
  });

  // Swiper Arrivals
  var swiper = new Swiper(".reviews-slider", {
    loop:true,
    grabeCursor: true,
    spaceBetween:20,
    breakpoints: {
        640: {
          slidesPerView: 2,
        },
        768: {
          slidesPerView: 4,
        },
        911: {
          slidesPerView: 3,
        },
      },
  });