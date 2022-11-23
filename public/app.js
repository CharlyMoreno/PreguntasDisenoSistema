const btn_respuesta = document.getElementById('btn_respuesta');
const btn_siguiente = document.getElementById('btn_siguiente');
const btn_siguiente_success = document.getElementById('btn_siguiente_success');
const btn_siguiente_danger = document.getElementById('btn_siguiente_danger');
const preguntas = document.getElementById('preguntas');
const correct = document.getElementById('correct');


const pregunta_txt = document.getElementById('pregunta_txt');
const respuesta = document.getElementById('respuesta');
const box_respuesta = document.getElementById('box_respuesta');

let preguntasCont = 0;
let aciertosCont = 0;

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

btn_siguiente_success.onclick = () => {
    respuesta.value=""
    preguntasCont = preguntasCont + 1;
    aciertosCont = aciertosCont + 1;
    preguntas.innerHTML = `${preguntasCont}`
    correct.innerHTML = `${aciertosCont}`
    inicializar()   
}

btn_siguiente_danger.onclick = () => {
    respuesta.value=""
    preguntasCont = preguntasCont + 1;
    preguntas.innerHTML = `${preguntasCont}`
    inicializar()
}

inicializar()