
const $objetoFormulario = $divEncuesta.querySelector("#formulario");
const $respuestasPorQue = $objetoFormulario.querySelectorAll("input[name='porque']");
const $respuestasCalidad = $objetoFormulario.querySelectorAll("input[name='percepcion']");
const $mensaje = $objetoFormulario.querySelector("textarea");




class Formulario 
{
	constructor() 
	{
		this.baseDatos = firebase.firestore();
		//	const configuraciones = { timestampsInSnapshots: true }
		//	this.baseDatos.settings(configuraciones);
		//las configuraciones son para recuperar el dato como timestamp... osea mas legible, por defecto es true
	}

	enviarForm(objetoForm) 
	{
		const datosFormulario = 
		{
			cliente: objetoForm.cliente,
			porque: objetoForm.porque,
			percepcion: objetoForm.percepcion,
			mensaje: objetoForm.mensaje,
			fecha: firebase.firestore.FieldValue.serverTimestamp()

		}
		console.log(objetoForm);
		
		return this.baseDatos.collection("respuestas").add(datosFormulario)  // id se coloca automatico
			.then((referenciaDocumento) => 
			{ 
				alert ("Formulario enviado correctamente");
				cerrarEncuesta();
			})
			.catch((error) => { console.error("error formulario: " + error) });
	}

}

function obtenerDatosFormulario(cliente, porque, percepcion, mensaje)
{
	let objetoFinal = {};
	porque = obtenerRadioTrue($respuestasPorQue);
	percepcion = obtenerRadioTrue($respuestasCalidad);
	
	objetoFinal = 
	{
		cliente: "Mutualista Pichincha 1",
		porque: porque,
		percepcion: percepcion,
		mensaje: mensaje,
		
	}
	return objetoFinal;
}


function obtenerRadioTrue(respuestas)
{
	let respuestaFinal = null
	respuestas.forEach(respuesta => 
	{
		if(respuesta.checked)
		{	
			respuestaFinal = respuesta.value
		}
		
	});
	return respuestaFinal;

}

function cerrarEncuesta()
{
	$divEncuesta.classList.add("invisible");
	$divAgradecimiento.classList.remove("invisible");

}

/* ejecucion */

$objetoFormulario.onsubmit = (evento)=>
{
	evento.preventDefault();
	let formularioFinal = new Formulario;
	formularioFinal.enviarForm( obtenerDatosFormulario("mutualista", "", "", $mensaje.value) )

}