//organizar...


/* LOADER(carregamento da pagina ):
-mostra logo
-animacao de sumir */
window.addEventListener("load", () => {
  const loader = document.getElementById("loader");

  setTimeout(() => {
    loader.style.opacity = "0";
    loader.style.visibility = "hidden";

    setTimeout(() => {
      loader.style.display = "none";
      //dura 0.8s
    }, 800);
//dura 1.5s
  }, 1500);
});





//menu topo a direita 
// ao clicar o menu passa a classe ativo
function toggleMenu(){
  document.getElementById("menu").classList.toggle("active");
    document.querySelector(".menu-toggle").classList.toggle("active");
}
/* FECHAR MENU clicando em qualque item
- */
document.querySelectorAll('.nav-links a').forEach(link => {
  link.addEventListener('click', () => {
    
    document.getElementById("menu").classList.remove("active");
           document.querySelector(".menu-toggle").classList.remove("active");
  });
});
//Fechar ao clicar fora do menu
document.addEventListener('click', (e) => {
  const menu = document.getElementById("menu");
  const toggle = document.querySelector(".menu-toggle");

  if (!menu.contains(e.target) && !toggle.contains(e.target)) {
    menu.classList.remove("active");
    toggle.classList.remove("active");
  }
});



/*TITULO PRINCIPAL HEADER */
//sumindo com borda direita do titulo centra do
setTimeout(() => {
  document.querySelector('.typing').classList.add('finished');
  //demora 4s para sumir
}, 4000);






/*FUNDO da primeira section 
-pagamos todas as imagens com a a class slide*/
const slides = document.querySelectorAll('.slide');
//a imagem que comeca é a que esta na posicao 1
let current = 0;

function changeSlide(){
  //remove a foto current 
  slides[current].classList.remove('active');
   //define a proxima como current
  current = (current + 1) % slides.length;
  //adiciona a classe ativa ao current
  
  slides[current].classList.add('active');
}
//a imagem muda a cada 4s
setInterval(changeSlide, 4000); // muda a cada 4s









/*MODAL JS 
-produto com preço e decricao*/
//selecionando produtos no html em forma de array
const products = document.querySelectorAll(".product-list li");
//
const modal = document.getElementById("product-modal");

const img = document.getElementById("modal-img");
const title = document.getElementById("modal-title");
const desc = document.getElementById("modal-desc");
const price = document.getElementById("modal-price");
//array com itens
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


//percorre todos os produtos
products.forEach((item, index) => {
  //tem (item);index=posicao array
  item.addEventListener("click", () => {
//pomos a referencia da imagem do modal ativo sendo a iamgem do item  do array pela posicao
    img.src = data[index].img;
    //pegando o nome pelo array(data)e posicao(index)
    title.textContent = data[index].name;
    //pegando descricao
    desc.textContent = data[index].desc;
    //pegando preo
    price.textContent = data[index].price;

    modal.classList.add("active");
  });
});

/* fechar modal ao clicar */
document.querySelector(".close").onclick = () => {
  modal.classList.remove("active");
};

modal.addEventListener("click", (e) => {
  if(e.target === modal){
    modal.classList.remove("active");
  }
}); 


/*INSTA */

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
/* JavaScript (ativar ao scroll)
-imgs aparecendo no scroll*/
//imagens do insta
const instaImgs = document.querySelectorAll(".instagram img");
//ao fazer scroll, mostra as imagens
window.addEventListener("scroll", () => {
  instaImgs.forEach(img => {
    //posicionando imagens do insta 
    const top = img.getBoundingClientRect().top;
//posiciona a iamagem abaixo do limite do ecra
    if(top < window.innerHeight - 50){
      img.classList.add("show");
    }
  });
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
