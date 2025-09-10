const errores = document.getElementById("errores")
const correo = document.getElementById("correo")




correo.addEventListener('keyup', function(){
    if(correo.value.length <3 || !correo.value.includes("@")){
        correo.classList.add("error");
        errores.innerHTML="Ingresa minimo 3 letras y el correo debe contener un @. "
    }else
    correo.classList.remove("error");
    errores.innerHTML="&nbsp;";

})