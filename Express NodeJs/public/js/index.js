function obtenerDatos(){
    fetch("http://www.raydelto.org/agenda.php")
    .then(
        function(valor)
        {
            return valor.json();
        }
    ).then(function(valor)
    {
     
        var Lista = document.getElementById("contenedor");
        var HTML = '';
        for (var i = 0; i < valor.length; i++) {
        
         HTML += '<a class="encabezado">Nombre: </a>   <a>'+valor[i].nombre+'</a> </br>' + '<a class="encabezado">Apellido:</a> <a>'+valor[i].apellido+'</a><br/>' + '<a class="encabezado">Telefono:</a> <a>'+valor[i].telefono+'</a><br/>' + '</br>' ;    
        }
        Lista.innerHTML = HTML
    }
    );       
}

var Name = document.getElementById("Nombre");
var LastName = document.getElementById("Apellido");
var Phone = document.getElementById("Telefono");

function Mandar(){

let contacto = {nombre: Name.value, apellido: LastName.value, telefono: Phone.value};

fetch("http://www.raydelto.org/agenda.php", 
{
method:'POST', 
body:JSON.stringify(contacto)}
).then( res => res.json()).then(
(res) => 
{
console.log(res);
alert('Guardado con Exito!');
Name.value = '';
LastName.value='';
Phone.value='';
obtenerDatos(); 
}

);
}
