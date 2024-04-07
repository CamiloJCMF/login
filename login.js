const  btnSignIn   = document.querySelector("#sign-in"),
       btnSingUp   = document.querySelector('#sign-up'),
       formRegister= document.querySelector('.register'),
       formLogin   = document.querySelector('.login'),
       nombre      = document.querySelector('#nombre'),
       correo      = document.querySelector('#correo');
      
    
       

window.addEventListener('load',() => nombre.focus());



btnSignIn.addEventListener("click", () =>{
    formRegister.classList.add("hide");
    formLogin.classList.remove('hide');
    correo = correo.focus();
    
    
    
})



btnSingUp.addEventListener("click", () =>{
    formRegister.classList.remove("hide");
    formLogin.classList.add('hide');
    nombre = nombre.focus();
    
})

