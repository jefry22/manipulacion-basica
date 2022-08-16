// const numero_1 = document.querySelector('#calculo1');
// const numero_2 = document.querySelector('#calculo2');
// const btn = document.querySelector('#calcular');
// const mostrarResultado = document.querySelector('#result');
// const formulario = document.querySelector('#form');

// formulario.addEventListener('submit',sumarInputValue);

// function sumarInputValue(event){
//     console.log(event);
//     event.preventDefault();
//     const total = parseInt(numero_1.value) +parseInt(numero_2.value);
//     mostrarResultado.innerText = "El resultado es:" + total;
// }


const btn = document.querySelector('#btn');
const demo = document.querySelector('h1');

btn.addEventListener('mouseover',cambiarNombre);

function cambiarNombre(){
    demo.innerText = 'Hello word';
}

