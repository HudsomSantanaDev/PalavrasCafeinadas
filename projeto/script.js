
function toggleMenu(){
  document.getElementById("menu").classList.toggle("active");
}


//sumindo com borda direita do tirulo centra do
setTimeout(() => {
  document.querySelector('.typing').classList.add('finished');
}, 4000);

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
  const menu = document.getElementById("menu");
  const toggle = document.querySelector(".menu-toggle");
  const sound = document.getElementById("click-sound");

  menu.classList.toggle("active");
  toggle.classList.toggle("active");

  // 🔊 som
  if(sound){
    sound.currentTime = 0;
    sound.volume = 0.15;
    sound.play();
  }

  // 📳 vibração (mobile)
  if(navigator.vibrate){
    navigator.vibrate(30); // vibração leve
  }
}

//iniciar

window.addEventListener("load", () => {
  const loader = document.getElementById("loader");

  setTimeout(() => {
    loader.classList.add("hide");
  }, 2200);
});
/*MODAL JS */
const products = document.querySelectorAll(".product-list li");
const modal = document.getElementById("product-modal");

const img = document.getElementById("modal-img");
const title = document.getElementById("modal-title");
const desc = document.getElementById("modal-desc");
const price = document.getElementById("modal-price");

const data = [
  {
    name: "Espresso",
    desc: "Café intenso e encorpado",
    price: "€2",
    img: "img/icons/imagen/logo.jpeg"
  },
  {
    name: "Cappuccino",
    desc: "Cremoso com espuma de leite",
    price: "€3",
    img: "img/icons/imagen/logo.jpeg"
  },
  {
    name: "Latte",
    desc: "Suave e equilibrado",
    price: "€3.5",
    img: "img/icons/imagen/logo.jpeg"
  },
  {
    name: "Bolo",
    desc: "Fresco e caseiro",
    price: "€4",
    img: "img/icons/imagen/logo.jpeg"
  },
  {
    name: "Espresso",
    desc: "Café intenso e encorpado",
    price: "€2",
    img: "img/icons/imagen/logo.jpeg"
  },
  {
    name: "Cappuccino",
    desc: "Cremoso com espuma de leite",
    price: "€3",
    img: "img/icons/imagen/logo.jpeg"
  },
  {
    name: "Latte",
    desc: "Suave e equilibrado",
    price: "€3.5",
    img: "img/icons/imagen/logo.jpeg"
  },
  {
    name: "Bolo",
    desc: "Fresco e caseiro",
    price: "€4",
    img: "img/icons/imagen/logo.jpeg"
  },
  {
    name: "Espresso",
    desc: "Café intenso e encorpado",
    price: "€2",
    img: "img/icons/imagen/logo.jpeg"
  },
  {
    name: "Cappuccino",
    desc: "Cremoso com espuma de leite",
    price: "€3",
    img: "img/icons/imagen/logo.jpeg"
  },
  {
    name: "Latte",
    desc: "Suave e equilibrado",
    price: "€3.5",
    img: "img/icons/imagen/logo.jpeg"
  },
  {
    name: "Bolo",
    desc: "Fresco e caseiro",
    price: "€4",
    img: "img/icons/imagen/logo.jpeg"
  }
];

products.forEach((item, index) => {
  item.addEventListener("click", () => {

    img.src = data[index].img;
    title.textContent = data[index].name;
    desc.textContent = data[index].desc;
    price.textContent = data[index].price;

    modal.classList.add("active");
  });
});

/* fechar */
document.querySelector(".close").onclick = () => {
  modal.classList.remove("active");
};

modal.addEventListener("click", (e) => {
  if(e.target === modal){
    modal.classList.remove("active");
  }
}); 


/* JavaScript (ativar ao scroll)*/
const instaImgs = document.querySelectorAll(".instagram img");

window.addEventListener("scroll", () => {
  instaImgs.forEach(img => {
    const top = img.getBoundingClientRect().top;

    if(top < window.innerHeight - 50){
      img.classList.add("show");
    }
  });
});

/*linha divisora insta*/ 
const instaSection = document.getElementById("instagram");

window.addEventListener("scroll", () => {
  const top = instaSection.getBoundingClientRect().top;

  if(top < window.innerHeight - 50){
    instaSection.classList.add("show");
  }
}); 

/*scrool do titulo insta  */
const titulo = document.getElementById("titulo-insta");

window.addEventListener("scroll", () => {
  const top = titulo.getBoundingClientRect().top;

  if(top < window.innerHeight - 50){
    titulo.classList.add("show");
  }
});


/* scroll do adreesss
 */
const address = document.querySelector("#address .conteiner");

window.addEventListener("scroll", () => {
  const top = address.getBoundingClientRect().top;

  if(top < window.innerHeight - 100){
    address.classList.add("show");
  }
});


//about scroll
const about = document.querySelector(".about-section");

window.addEventListener("scroll", () => {

  const top = about.getBoundingClientRect().top;

  if(top < window.innerHeight - 100){
    about.classList.add("show");
  }

});
