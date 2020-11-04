import React, { Component } from 'react';
import Mostrar from './Mostrar';

class Agregar extends Component{

  Mandar(){
    var Name = document.getElementById("Nombre");
    var LastName = document.getElementById("Apellido");
    var Phone = document.getElementById("Telefono");
    
    
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
    new Mostrar();
    }
    
    );
    
  }
    
    render(){
       return(          
        <div>
        <h2>Gilberto Ramirez Suazo 2018-6834</h2>
        <h2>Agregar Contacto </h2>        
  <div id="Agregar">
    <a>Nombre:</a>  
    <input type="text" id="Nombre"></input>
    <a>Apellido:</a>  
    <input type="text" id="Apellido"></input>
    <a>Telefono:</a>  
    <input type="text" id="Telefono"></input>
    <input type="button" id="Boton" value="Enviar" onClick={this.Mandar} ></input>
  </div>
  </div>
       ) 
    }
}

export default Agregar;