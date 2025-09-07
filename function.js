const nombres = document.getElementById("nombres")
const errores = document.getElementById("errores")
const apellidos = document.getElementById("apellidos")
const correo = document.getElementById("correo")
const contraseña = document.getElementById("contraseña")
const confirmar = document.getElementById("confirmar")
const direccion = document.getElementById("direccion")
const edad = document.getElementById("edad")
const codigo = document.getElementById("codigo")

nombres.addEventListener('keyup', function(){
    if(nombres.value.length <3){
        nombres.classList.add("error");
        errores.innerHTML="Ingresa minimo 3 letras. "
    }else
    nombres.classList.remove("error");
    errores.innerHTML="&nbsp;";
})
apellidos.addEventListener('keyup', function(){
    if(apellidos.value.length <3){
        apellidos.classList.add("error");
        errores.innerHTML="Ingresa minimo 3 letras. "
    }else
    apellidos.classList.remove("error");
    errores.innerHTML="&nbsp;";
})
correo.addEventListener('keyup', function(){
    if(correo.value.length <3 || !correo.value.includes("@")){
        correo.classList.add("error");
        errores.innerHTML="Ingresa minimo 3 letras y el correo debe contener un @. "
    }else
    correo.classList.remove("error");
    errores.innerHTML="&nbsp;";
})
direccion.addEventListener('keyup', function(){
    if(direccion.value.length <3){
        direccion.classList.add("error");
        errores.innerHTML="Ingresa minimo 3 letras. "
    }else
    direccion.classList.remove("error");
    errores.innerHTML="&nbsp;";
})
contraseña.addEventListener('keyup', function(){
    if(contraseña.value.length <8){
        contraseña.classList.add("error");
        errores.innerHTML="La contraseña debe tener minimo 8 caracteres. "
    }else
    contraseña.classList.remove("error");
    errores.innerHTML="&nbsp;";
})
confirmar.addEventListener('keyup', function(){
    if(confirmar.value != contraseña.value){
        confirmar.classList.add("error");
        errores.innerHTML="Las contraseñas no coinciden. "
    }else
    confirmar.classList.remove("error");
    errores.innerHTML="&nbsp;";
})
codigo.addEventListener('keyup', function(){
    if(codigo.value.length <8){
        codigo.classList.add("error");
        errores.innerHTML="La contraseña debe tener minimo 8 caracteres. "
    }else
    codigo.classList.remove("error");
    errores.innerHTML="&nbsp;";
})
edad.addEventListener("input", function() {
  if (this.value.length > 3) {
    this.value = this.value.slice(0, 3);
  }
  if (parseInt(this.value) > 150) {
    this.value = 150;
  }
  if (this.value < 0) {
    this.value = 0;
  }
})