/* ATIVAR  */
function activeMenu() {
  const nav = document.getElementById("nav");
  nav.classList.toggle("active");

  const removelogo = document.getElementById("logo");
  removelogo.classList.toggle("activeLogo");  

  const removewhatsapp = document.getElementById("buttons-link");
  removewhatsapp.style.display = "none";
}

/* INFO PRÉ-NAV */
function toggleMenuOnScroll() {
  var preNav = document.querySelector(".pre-nav");

  window.addEventListener("scroll", function () {
    if (window.scrollY > 10) {
      preNav.style.display = "none";
    } else {
      preNav.style.display = "flex";
    }
  });
}

toggleMenuOnScroll();


/* VOLTAR AO TOPO */
document.getElementById("backToTop").addEventListener("click", function() {
  window.scrollTo({
    top: 0,
    left: 0,
    behavior: "smooth"
  });
});

/* ESCONDER BOTÃO "VOLTAR AO TOPO" */
function esconderBackToTop() {
  var button = document.getElementById("backToTop");
  window.addEventListener("scroll", function () {
    if (window.scrollY > 100) {
      button.style.display = "flex";
    } else {
      button.style.display = "none";
    }
  });
}
esconderBackToTop();

/* MOSTRAR INFORMAÇÕES NO SCROLL */
const scrollReveal = ScrollReveal({
  origin: "top",
  distance: "10rem",
  duration: 700,
  reset: true,
});

scrollReveal.reveal(
  `#home .container, #home .stats .stat,
  #about .content, #about img,
  #culture .title, #culture .paragrafo, #culture .card,
  #trajetoria .header,  #trajetoria .cards .card,
  #produtos .produtos-info, #produtos .container2, #produtos 
  .container,
  #empresas div, #empresas .img-empresas, 
  #depoimentos .titulos, #depoimentos .swiper,
  footer .content div, footer .content .social .links img
  `,
  { interval: 20 }
);

/* FUNCIONALIDADES */
/* PRODUTOS CLICKMASSA */
$('.cards-product').slick({
  infinite: true,
  dots: true,
  arrows: true
});

/* SUBPRODUTOS */
$('.cards-sub-products').slick({
  infinite: true,
  slidesToShow: 3,
  slidesToScroll: 1,
  dots: true,
  arrows: true,
  responsive: [
    {
      breakpoint: 1100,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
        dots: true
      }
    }
  ]
});