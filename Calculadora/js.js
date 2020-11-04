
const ul = document.querySelector('ul');
const borrar = document.querySelector('Borrar');
const pantalla = document.getElementById('pantalla');
let Historial = localStorage.getItem('guardarhis') ? JSON.parse(localStorage.getItem('guardarhis')) : [];


localStorage.setItem('guardarhis', JSON.stringify(Historial));
const dato = JSON.parse(localStorage.getItem('guardarhis'));

const lista = (texto) => {
  const li = document.createElement('li');
  li.textContent = texto;
  ul.appendChild(li);
}

 function Mostrar(){
  let operacion = Calculadora.pantalla.value;
  let resultado = eval(Calculadora.pantalla.value);
  Historial.push(operacion +" = "+ resultado);
  localStorage.setItem('guardarhis', JSON.stringify(Historial));
  lista(operacion +" = "+ resultado);
  pantalla.value = resultado;
};

dato.forEach(entrada => {
  lista(entrada);
});

Borrar.addEventListener('click', function () {
  localStorage.clear();
  while (ul.firstChild) {
    ul.removeChild(ul.firstChild);
  }
  Historial = [];
});

