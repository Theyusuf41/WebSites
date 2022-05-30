let navbar = document.querySelector('.header .navbar');

document.querySelector('#menu-btn').onclick = () => {
  navbar.classList.toggle('active');
}


document.querySelectorAll('.about .video-container .controls .control-btn').forEach(btn =>{
  btn.onclick = () =>{
    let src = btn.getAttribute('data-src');
    document.querySelector('.about .video-container .video').src = src
  }
})

/*  Masonry kodlari
var elem = document.querySelector('.grid');
var msnry = new Masonry( elem, {
  // options
  itemSelector: '.grid-item',
  columnWidth: 500
});

// element argument can be a selector string
//   for an individual element
var msnry = new Masonry( '.grid', {
  // options
  percentPosition: true
});
*/
const date = document.querySelector('.date');
date.innerHTML = new Date().getFullYear();