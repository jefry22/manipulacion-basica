## Respuestas al test de javascript

## variables y operaciones

### 1️⃣ Responde las siguientes preguntas en la sección de comentarios:´

❓ Que es una variable y para que sirve?

✅Cajitas(espacios en memoria) donde podemos guardar información(dependiendo de los tipos y estructura de datos que soporte nuestro lenguaje).

❓ Cuál es la diferencia entre declarar e inicializar una variable?

✅Declarar es cuando le decimos a javascript que vamos a crear una variable con la palabra reservada let.
✅Mientras que asignarle es darle un valor a la variable.

❓ Cuál es la diferencia entre sumar números y concatenar string?

✅el operador que nos permite concatenar y sumar es "+". Este operador nos permite sumar números cuando lo usamos con variable inicializada de tipo number mientras que si son de tipos string los que va a realizar es una concatenación.

### 2️⃣ Determina el nombre y tipo de dato para almacenar en variable la siguiente información´.

- Nombre: String
- Apellido: String
- Nombre de usuario en Platzi:String
- Edad:Number
- Correo electrónico:String
- Mayor de edad:boolean
- Dinero ahorrado:Number
- Deudas:Number

### 3️⃣ Traduce a código de Javascript las variables del ejemplo anterior y deja tu código en los comentarios


``` js
let nombre = 'Jefferson';
let apellidos = 'Valencia';
let username = 'jeffersonpierov';
let edad = 25;
let email = 'jefferson@gmail.com';
let esMayorDeEdad = true;
let dineroAhorrado = true;
let deudas = 100; 
```

### 4️⃣ Calcula e imprime las siguientes variables a partir de las variable del ejemplo anterior

-Nombre completo (nombre y apellido)
-Dinero real (dinero ahorrado menos deudas)

```js
let nombre = 'jefferson', apellido='valencia';
let dineroAhorrado=2000,deuda=1400;
let dineroReal= dineroAhorrado - deuda;
console.log( `${nombre} ${apellido} tu dinero real es: ${dineroReal}`);
```

## Funciones

### 1️⃣ Responde las siguientes preguntas en la sección de comentarios:´

❓Que es una función?

✅las funciones nos permite encapsular bloques de codigo para reutilizarlos  y ademas ejecutarlo en el futuro

❓Cuando me sirve usar una función en mi codigo?

✅Una funcion nos sirve cuando tenemos variables o bloques de codigos muy parecido con cambios que podrian ser parametros y argumentos que podemos encapsular para reutilizar más de una vez en el futuro.

✅Tambien nos sirve para ordenar y mejorar la legibilidad de nuestro codigo

❓Cuál es la diferencia entre parámetros y argumentos de una función?

✅Al declarar una funcion puede recibir parametros, mientras que cuando la ejecutamos le pasamos argumentos.

### 2️⃣ Convierte el siguiente código en una función, pero, cambiando cuando sea necesario las variables constantes por parámetros y argumentos en una función:
```js
const name = 'Jefferson Piero';
const lastname = 'Valencia Yataco';
const completeName = name+lastname;
const nickName='jefry';

console.log('Mi nombre es' + completeName + ',pero prefiero que me digas' + nickName + '.');

function saludar(name,lastname,userName){
    const completeName = nombreCompleto(name,lastname);
    const nickName = userName;
    console.log('Mi nombre es ' + completeName + ',pero prefiero que me digas' + nickName + '.' );
    }
```
## Condicionales

### 1️⃣ Convierte el siguiente código en una función, pero, cambiando cuando sea necesario las variables constantes por parámetros y argumentos en una función:

❓Que es una condicional?

✅Son la forma en que ejecutamos un bloque de codigo u otro dependiendo de alguna condición o validación

❓Que tipos de condicionales existen en javascript y cuales son sus diferencias

✅IF (else y else if),Switch
el condicional if(con else y elseif)nos permite hacer validaciones completamente distintas(si asi queremos) en cada validacion o condicional . En cambio, el switch todos los cases se compara con la misma variable o condicion que definimos en el switch.

❓Puede combinar funciones y condicionales?
✅Si .Las funciones pueden encapsular cualquier bloque de codigo, incluyendo condicionales.

### 2️⃣ Replica el comportamiento del siguiente código que usa la sentencia switch utilizando if, else y else if:

```js
const tipoDeSuscripcion = "Basic";

switch (tipoDeSuscripcion) {
   case "Free":
       console.log("Solo puedes tomar los cursos gratis");
       break;
   case "Basic":
       console.log("Puedes tomar casi todos los cursos de Platzi durante un mes");
       break;
   case "Expert":
       console.log("Puedes tomar casi todos los cursos de Platzi durante un año");
       break;
   case "ExpertPlus":
       console.log("Tú y alguien más pueden tomar TODOS los cursos de Platzi durante un año");
       break;
}
```

```js
if(tipoDeSuscripcion == 'Free'){
    console.log('Solo puedes tomar los cursos gratis');
}else if(tipoDeSuscripcion == 'Basic'){
    console.log('Puedes tomar casi todos los cursos de Platzi durante un mes');
}else if(tipoDeSuscripcion == 'Expert'){
    console.log('Puedes tomar casi todos los cursos de Platzi durante un año');
}else if(tipoDeSuscripcion == 'ExpertPlus'){
    console.log('Tú y alguien más pueden tomar Todos los cursos de Platzi durante un año');
}
```

### 3️⃣ Replica el comportamiento de tu condicional anterior con if, else y else if, pero ahora solo con if (sin else ni else if).

💡 Bonus: si ya eres una experta o experto en el lenguaje, te desafío a comentar cómo replicar este comportamiento con arrays y un solo condicional. 😏

```js
let tipoDeSuscripcion = 'Basic';
let suscripcion = [
    {tipo:'Free',descripcion:'Solo puedes tomar los cursos gratis'},
    {tipo:'Basic',descripcion:'Puedes tomar casi todos los cursos de Platzi durante mes '},
    {tipo:'Expert',descripcion:'Puedes tomar casi todos los cursos de Platzi durante un año'},
    {tipo:'ExpertPlus',descripcion:'Tú y alguien más pueden tomar todos los cursos de Platzi durante un año'},
];

suscripcion.find(function(suscripciones){
    if(suscripciones.tipo == tipoDeSuscripcion){
        console.log(suscripciones.descripcion);
    }
});
```
## CICLOS

### 1️⃣ Responde las siguientes preguntas en la sección de comentarios:

¿Qué es un ciclo?

Forma de ejecutar un bloque de codigo hasta que se cumpla cierta condición 

¿Qué tipos de ciclos existen en JavaScript?

while,for,do while

¿Qué es un ciclo infinito y por qué es un problema?

Es cuando la validacion de nuestro condicionales nunca se cumple y termina toteando(dañando) la aplicacion (ej cuando el navegador ya no puede más de tanta ejecucion de ese bloque)

¿Puedo mezclar ciclos y condicionales?
Si, aunque los ciclos son una especie de condicionales, nada nos impide agregar mas condiciones dentro del ciclo.

### 2️⃣ Replica el comportamiento de los siguientes ciclos for utilizando ciclos while:

```js
for (let i = 0; i < 5; i++) {
    console.log("El valor de i es: " + i);
}


for (let i = 10; i >= 2; i--) {
    console.log("El valor de i es: " + i);
}
```

```js
let i = 0;
while(i<5){
    i++;
    console.log("El valor de i es: " + i);
}

let i = 10;
while(i >= 2){
    i--;
    console.log("El valor de i es: " + i);
}

let i = 10;
while(i >= 2){
    i--;
    console.log("El valor de i es: " + i);
}
```
### 3️⃣ Escribe un código en JavaScript que le pregunte a los usuarios cuánto es 2 + 2. Si responden bien, mostramos un mensaje de felicitaciones, pero si responden mal, volvemos a empezar.
💡 Pista: puedes usar la función prompt de JavaScript.

```js
while(true){
     let respuesta = prompt('Cuanto es 2 + 2 ');
     if(respuesta == 4){
         console.log('respuesta correcta');
         break;
     }
}
```

## LISTAS

### 1️⃣ Responde las siguientes preguntas en la sección de comentarios:

¿Qué es un array?

Es una lista de elementos.
```js
const lista = [true , 1 , 'hola'];
```
¿Qué es un objeto?

Es una lista de elemento cada elemento tiene un nombre clave.
```js
const obj = {nombre : 'jefferon', apellido:'valencia'};
```
¿Cuándo es mejor usar objetos o arrays?
Arrays cuando lo que haremos en un elemento es lo mismo que todo los demas(La regla se puede incumplir).
Objeto cundo los nombres de cada elemento son importante para nuestro algoritmos

¿Puedo mezclar arrays con objetos o incluso objetos con arrays?
Si. Los arrays pueden guardar objetos . Y los objetos pueden guardar arrays entre sus propiedades.

2️⃣ Crea una función que pueda recibir cualquier array como parámetro e imprima su primer elemento.

```js

let user = ['luis', 'carlos','jorge'];
function usuarios(usuario){
    console.log(usuario[0]);
}
usuarios(user)

```
3️⃣ Crea una función que pueda recibir cualquier array como parámetro e imprima todos sus elementos uno por uno (no se vale imprimir el array completo).
```js
let frutas = ['manzana','pera','naranja','lucuma'];
function listado(fruta){
    for(i = 0; i<fruta.length;i++){
        console.log(fruta[i]);
    }
}
listado(frutas)
```
4️⃣ Crea una función que pueda recibir cualquier objeto como parámetro e imprima todos sus elementos uno por uno (no se vale imprimir el objeto completo).

```js
let gaseosas = {
    nombre:'Inka cola' , 
    tamanio:'1 litro',
    costo: 6.50,
}

function comprar(gaseosa){
    for (let key in gaseosa) {
        console.log(gaseosa[key]);
    }
}
comprar(gaseosas);

```