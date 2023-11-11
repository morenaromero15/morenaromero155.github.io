document.addEventListener('DOMContentLoaded', function () {
    let cambiarColorBtn = document.getElementById('cambiarColorBtn');
    cambiarColorBtn.addEventListener('click', cambiarColorFondo);
})

function cambiarColorFondo() {
    let nuevoColor = '#7adceb';
    document.body.style.backgroundColor = nuevoColor;
}