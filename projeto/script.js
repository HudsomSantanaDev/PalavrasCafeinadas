
function toggleMenu(){
  document.getElementById("menu").classList.toggle("active");
}

/* LOADER */
window.addEventListener("load", () => {
  const loader = document.getElementById("loader");

  setTimeout(() => {
    loader.style.opacity = "0";
    loader.style.visibility = "hidden";

    setTimeout(() => {
      loader.style.display = "none";
    }, 800);

  }, 1500);
});

/* ANIMAÇÃO SCROLL */
const cards = document.querySelectorAll('.card');

window.addEventListener('scroll', () => {
  cards.forEach(card => {
    const top = card.getBoundingClientRect().top;
    if(top < window.innerHeight - 50){
      card.classList.add('show');
    }
  });
});

/* FECHAR MENU MOBILE */
document.querySelectorAll('.nav-links a').forEach(link => {
  link.addEventListener('click', () => {
    document.getElementById("menu").classList.remove("active");
  });
});

const slides = document.querySelectorAll('.slide');
let current = 0;

function changeSlide(){
  slides[current].classList.remove('active');
  
  current = (current + 1) % slides.length;
  
  slides[current].classList.add('active');
}

setInterval(changeSlide, 4000); // muda a cada 4s

//Fechar menu ao clicar num link (essencial)
document.querySelectorAll('#menu a').forEach(link => {
  link.addEventListener('click', () => {
    document.getElementById("menu").classList.remove("active");
  });
});


//Fechar ao clicar fora do menu
document.addEventListener('click', (e) => {
  const menu = document.getElementById("menu");
  const toggle = document.querySelector(".menu-toggle");

  if (!menu.contains(e.target) && !toggle.contains(e.target)) {
    menu.classList.remove("active");
  }
});


//toogle menu
function toggleMenu(){
  document.getElementById("menu").classList.toggle("active");
}