const formulario = document.getElementById("miFormulario");
console.log(formulario);

formulario.addEventListener("submit", event => {
    
    event.preventDefault();

    
    const nombre = document.getElementById("nombre").value.trim();
    const apellido = document.getElementById("apellido").value.trim();
    const email = document.getElementById("email").value.trim();


    console.log(nombre);
    console.log(apellido);
    console.log(email);

   
   
    let formularioValido = true;

  
    if (nombre === "") {
        alert("el nombre debe estar completo")
        formularioValido = false;
    }

    if (apellido === "") {
        alert("el apellido debe estar completo")
        formularioValido = false;
    }


   
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        formularioValido = false;
    }

  
    if (formularioValido) {
        alert("Formulario enviado correctamente.");
        formulario.reset();

         const formularioContacto = {
            nombre: nombre,
            apellido: apellido,
            email: email

        };
       
    }
})