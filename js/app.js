var parrafo = document.body.children[3];
function ocultar(){
    parrafo.style.display = 'none';
}
function mostrar(){
    parrafo.style.display = 'block';
}
function izquierda(){
    var moverIzquierda = parrafo.style.left = '1px';
}
function derecha(){
    var moverIzquierda = parrafo.style.right = '1px';
}
function arriba(){
    var moverIzquierda = parrafo.style.top = '1px';
}
function abajo(){
    var moverIzquierda = parrafo.style.bottom = '1px';
}
