//Opten el boton:
mygotop = document.getElementById("go-top");
mycat = document.getElementById("scroll-categorias");
mymenu = document.getElementById('menu-buttom-cat');

// Cunado el usuario aga scroll en ela paguina el boton aparece
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    console.log (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50);

  if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
    mygotop.style.display = "block";
  } else {
    mygotop.style.display = "none";
  }

  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
    mycat.style.display = "block";
  } else {
    mycat.style.display = "none";
  }
};

// Cuando el usuario haga clic en el botón, sera enviado a la parte de arriba del documento.
function topFunction() {
  document.body.scrollTop = 0; // Safari
  document.documentElement.scrollTop = 0; // Chrome, Firefox, Opera
};