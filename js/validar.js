function limpiarErrores(){
    var errores = document.getElementsByClassName("error");
    for(var i = 0; i < errores.length; i++){
      errores[i].innerHTML = "";
    }
  }
  
  function validar(formulario) {
  
    limpiarErrores();

    var renom = /^[a-zA-ZÀ-ÿ\s]{4,40}$/; //validacion de nombre 
    if (!renom.test(formulario.nombre.value)){
      document.getElementById("errorNombre").innerText = "Este campo es obligatorio";
      formulario.nombre.focus();
      return false;  
    }
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/; // validacion de correo
    if (!re.test(formulario.email.value)){
      document.getElementById("errorEmail").innerText = "Email inválido";
      formulario.email.focus();
      return false;  
    }
    var mensaj = /^[a-zA-ZÀ-ÿ\s\-0-9]{4,40}$/; //validacion de mensaje 
    if (!mensaj.test(formulario.mensaje.value)){
      document.getElementById("errorMensaje").innerText = "Este campo es obligatorio";
      formulario.mensaje.focus();
      return false;  
    }
    alert("Mensaje enviado");

    return true;
  }
    