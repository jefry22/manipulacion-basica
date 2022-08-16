//h1{color:red}
//.parrafito {}
// #pid {....}

const h1 = document.querySelector('h1');
const p = document.querySelector('p');
const parrafito = document.querySelector('.parrafito');
const pid = document.querySelector('#pid');
const input = document.querySelector('input');

console.log({
    h1,
    p,
    parrafito,
    pid,
    input
});

// Convierte todo a codigo
h1.innerHTML = 'Patito'
// Convierte ta texto
h1.innerText='Patito';

console.log(h1.getAttribute('pantalla'));

// Agrega una clase en nuestro html
h1.setAttribute('class','verde');

// Agrega una lista a la clase
h1.classList.add('rojo');
// elimina una clase
h1.classList.remove('verde');

// toggle:h1.classList.toggle('verde');
//contains:h1.classList.contains('verde');

input.value = '456';
console.log(h1);

const img  = document.createElement('img')
img.setAttribute('src','https://images.pexels.com/photos/12924729/pexels-photo-12924729.jpeg?auto=compress&cs=tinysrgb&w=400&lazy=load')

console.log(img)
pid.innerText='';
pid.append(img)
console.log(pid)
