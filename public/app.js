const btn_respuesta = document.getElementById('btn_respuesta');
const btn_siguiente = document.getElementById('btn_siguiente');

const pregunta_txt = document.getElementById('pregunta_txt');
const respuesta = document.getElementById('respuesta');
const box_respuesta = document.getElementById('box_respuesta');

let dataMostrada;

function inicializar(){
    fetch('http://localhost:8080/getRandom')
    .then((response) => response.json())
    .then((data) => {
        dataMostrada = data 
        pregunta_txt.innerText = data.pregunta;
        box_respuesta.innerHTML = "";             
    })
}

btn_respuesta.onclick = () => {
    box_respuesta.innerHTML =`<div class="alert alert-info" role="alert">
        ${dataMostrada.respuesta}
    </div>
    `; 
}

btn_siguiente.onclick = () => {
    respuesta.value=""
    inicializar()
}

inicializar()