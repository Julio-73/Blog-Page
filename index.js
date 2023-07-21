

const ham = document.querySelector('.ham');
const enlaces = document.querySelector('.enlaces-menu');
const barras = document.querySelectorAll('.ham span');



ham.addEventListener('click', () => {
    enlaces.classList.toggle('activado');
    barras.forEach(child => {child.classList.toggle('animado')});
    ham.classList.toggle('girar');
});



// scroll

ScrollReveal({
    reset: true,
    distance: "90px",
    duration: 1000,
    delay: 200,
  });
  
  ScrollReveal().reveal("h1", { origin: "left" });
  
  ScrollReveal().reveal("h2", { origin: "left" });
  

