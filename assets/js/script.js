
/*efecto paralax*/
window.onscroll = function(){

    var posicion = window.pageYOffset || document.documentElement.scrollTop;

    var elemento1 = document.getElementById("imagen-b");
    var elemento2 = document.getElementById("icono-b");

    elemento1.style.bottom = posicion * 0.1 + "px";
    elemento2.style.top = posicion * 0.1 + "px";
}