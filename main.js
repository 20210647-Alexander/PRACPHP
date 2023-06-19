var conut = 0; 

var from = document.getElementById("form").addEventListener("submit", function (event) {
    event.preventDefault(); 

    var user = document.getElementById("username").value;
    var password = document.getElementById("password").value; 
    var pass = document.getElementById("password2").value;
    var Nombre = document.getElementById("nombre").value;
    var Apellido = document.getElementById("Apellido").value;
    var Fecha = document.getElementById("email").value;

    var url = "./Inicio.php?";
    var parametros = "username="+encodeURIComponent(user)+"&password="+encodeURIComponent(password)+"&nombre="+encodeURIComponent(Nombre)
    +"&Apellido="+encodeURIComponent(Apellido)+"&email="+encodeURIComponent(Fecha);

    if(password == pass)
    {
        window.location.href=(url+parametros);

    }else
    {
        alert("Usuario o contaseña son incorrectos");

        if(conut == 2){
           var x = document.getElementById("Boton");
            var Borrar = document.getElementById("btnSubmit");

            x.removeChild(Borrar);

            document.getElementById("campoOK").innerHTML = 'A superado el limite Consulte al Atministrador'
        }
        conut++
        console.log(conut);
    }   
})
