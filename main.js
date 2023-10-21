const completForm = document.getElementById("formulario");

completForm.innerHTML = `<label>¿Cual es tu nombre?</label>
<input type="text" name="nombre" placeholder="Introduce tu nombre"> <br>
<label>¿Cual es tu apellido?</label>
<input type="text" name="apellido" placeholder="Introduce tu apellido"> <br>
<label>Tu edad</label>
<input type="number" name="edad"> <br>
<button type="submit" id="botonEnvio">Enviar formulario</button>`;

document.body.appendChild(completForm);

//crear una funcion que al llenar el formulario con el boton salte una alerta de los datos que se cargaron, simulando que se envian//
const botonEnvio = document.querySelector("#botonEnvio");
botonEnvio.addEventListener("click", enviarForm);
function enviarForm(event) {
  event.preventDefault();
  let nombre = document.getElementsByName("nombre")[0].value;
  let apellido = document.getElementsByName("apellido")[0].value;
  let edad = document.getElementsByName("edad")[0].value;
  alert(`Nombre: ${nombre} \nApellido: ${apellido} \nEdad: ${edad}`
  );
  }






