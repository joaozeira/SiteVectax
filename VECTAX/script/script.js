/* ATIVAR  */
/* 
const activebtnMobile = document.getElementById("active-btn-mobile");
 */
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

/* MENU DESKTOP - ATIVAR AO CLICAR */
/* function addActive() {
  var addActive = document.getElementById("linkhome");

  addActive.classList.toggle("active");  
}
 */

/* MOVER SCROLL HORIZONTAL */
/* PRODUTOS 1 */
var ondescroll = document.getElementById("container1");
function movertoleft(){
  ondescroll.scrollBy(-250, 250);
}
function movertoright(){
  ondescroll.scrollBy(250, 250); 
}

var ondescrolll = document.getElementById("container2");
function movertoleftt(){
  ondescrolll.scrollBy(-1200, 250);
}
function movertorightt(){
  ondescrolll.scrollBy(1200, 250);
}

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

/* SWIPER - COMENTARIOS */
const swiper = new Swiper(".swiper", {
  cssMode: true,
  loop: true,

  pagination: {
    el: ".swiper-pagination",
  },

  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});


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
  #contato .titulos,  #contato .info, #contato .button, #contato .img,
  footer .content div, footer .content .social .links img
  `,
  { interval: 20 }
);


