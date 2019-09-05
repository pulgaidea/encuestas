/*elementosHTML*/
const $divPresentacion = document.querySelector(".presentacion");
const $botonEnviar = document.querySelector("#btnEmpezar");
const $divEncuesta = document.querySelector(".encuesta");
const $divAgradecimiento = document.querySelector(".agradecimiento")

/*declaracion funciones*/
function desplegarPreguntas(el1, el2) 
{
    el1.classList.add("invisible");
    el2.classList.remove("invisible");
}

/*ejecución*/

$botonEnviar.onclick = ()=> desplegarPreguntas($divPresentacion, $divEncuesta);