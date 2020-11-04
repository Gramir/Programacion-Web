import React, { Component } from 'react';

class Mostrar extends Component{
constructor(){
super();
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
            
             HTML += '<a class="encabezado">Nombre: </a>   <a>'+valor[i].nombre+'</a> ' + '<a class="encabezado">Apellido:</a> <a>'+valor[i].apellido+'</a>' + '<a class="encabezado">Telefono:</a> <a>'+valor[i].telefono+'</a>' + '</br>' ;    
            }
            Lista.innerHTML = HTML
        }
        );       
    
}
    render(){
        return(
            <div>
            <h2>Lista de todos los contactos almacenados</h2>
        <div id ="contenedor">
        </div>
        </div>
        )
    }
}

export default Mostrar;
 