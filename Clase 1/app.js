function name(params) {
    
}

var secciones = document.querySelectorAll('main > section');
secciones.forEach(seccion => {
    // seccion.querySelector('button').onclick
    seccion.querySelector('button').addEventListener('click',(evento) => {
        console.log('Click', evento.target);
    })
})
