/* VALIDACION DE FORMULARIO DE REGISTRO */



(() => {
    'use strict'
  
    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    const forms = document.querySelectorAll('.needs-validation')
  
    // Loop over them and prevent submission
    Array.prototype.slice.call(forms)
      .forEach(function (form) {
        form.addEventListener('submit', function (event) {
          if (!form.checkValidity()) {
            event.preventDefault()
            event.stopPropagation()
          }
          form.classList.add('was-validated')
          const Nombre = document.getElementById("nombre").value;
          const Apellido = document.getElementById("apellido").value;
          const Email = document.getElementById("email").value;
          const Password = document.getElementById("password").value;
          const Registro = document.getElementById("form"); 
          if (Nombre!=""&&Apellido!=""&&Email!=""&&Password!=""){
            localStorage.setItem("nombre",Nombre);
            localStorage.setItem("apellido",Apellido);
            localStorage.setItem("email",Email);
            localStorage.setItem("password",Password);
            console.log(Nombre.value);
            console.log(Apellido);
            Registro.reset()
          }

        }, false)
      })
  })()
/*

  const Registro = document.getElementById("form");

  Registro.addEventListener('submit',event=>{
    if (form.checkValidity()) {
        event.preventDefault();
        const Nombre = document.getElementById("nombre").value;
        const Apellido = document.getElementById("apellido").value;
        const Email = document.getElementById("email").value;
        const Password = document.getElementById("password").value; 
        localStorage.setItem("nombre",Nombre);
        localStorage.setItem("apellido",Apellido);
        localStorage.setItem("email",Email);
        localStorage.setItem("password",Password);
        console.log(Nombre.value);
        console.log(Apellido);
        Registro.reset();
        

    }
  })*/

  /*
    Array.from(forms).forEach(form => {
      form.addEventListener('submit', event => {
        if (form.checkValidity()) {
          event.preventDefault();
          const Nombre = document.getElementById("nombre").value;
          const Apellido = document.getElementById("apellido").value;
          const Email = document.getElementById("email").value;
          const Password = document.getElementById("password").value; 
          localStorage.setItem("nombre",Nombre);
          localStorage.setItem("apellido",Apellido);
          localStorage.setItem("email",Email);
          localStorage.setItem("password",Password);
          console.log(Nombre.value);
          console.log(Apellido);
        }  else {
            form.classList.add('was-validated');            
            event.stopPropagation();
            event.preventDefault()        
        }
      }, true)
    })
  })()


*/