// let tipoDeSuscripcion = 'Basic';
// let suscripcion = [
//     {tipo:'Free',descripcion:'Solo puedes tomar los cursos gratis'},
//     {tipo:'Basic',descripcion:'Puedes tomar casi todos los cursos de Platzi durante mes '},
//     {tipo:'Expert',descripcion:'Puedes tomar casi todos los cursos de Platzi durante un año'},
//     {tipo:'ExpertPlus',descripcion:'Tú y alguien más pueden tomar todos los cursos de Platzi durante un año'},
// ];

// suscripcion.find(function(suscripciones){
//     if(suscripciones.tipo == tipoDeSuscripcion){
//         console.log(suscripciones.descripcion);
//     }
// });




// while(true){
//     let respuesta = prompt('Cuanto es 2 + 2 ');

//     if(respuesta == 4){
//         console.log('respuesta correcta');
//         break;
//     }
// }

// let i = 10;
// while(i >= 2){
//     i--;
//     console.log("El valor de i es: " + i);
// }

// let user = ['luis', 'carlos','jorge'];
// function usuarios(usuario){
//     console.log(usuario[0]);
// }
// usuarios(user)

// let frutas = ['manzana','pera','naranja','lucuma'];
// function listado(fruta){
//     for(i = 0; i<fruta.length;i++){
//         console.log(fruta[i]);
//     }
// }
// listado(frutas)




// Crea una función que pueda recibir cualquier objeto como parámetro e imprima todos sus elementos uno por uno (no se vale imprimir el objeto completo).


// let gaseosas = {
//     nombre:'Inka cola' , 
//     tamanio:'1 litro',
//     costo: 6.50,
// }

// function comprar(gaseosa){
//     for (let key in gaseosa) {
//         console.log(gaseosa[key]);
//     }
// }
// comprar(gaseosas);

// if(tipoDeSuscripcion == 'Free'){
//     console.log('Solo puedes tomar los cursos gratis');
// }else if(tipoDeSuscripcion == 'Basic'){
//     console.log('Puedes tomar casi todos los cursos de Platzi durante un mes');
// }else if(tipoDeSuscripcion == 'Expert'){
//     console.log('Puedes tomar casi todos los cursos de Platzi durante un año');
// }else if(tipoDeSuscripcion == 'ExpertPlus'){
//     console.log('Tú y alguien más pueden tomar Todos los cursos de Platzi durante un año');
// }

// ### 3️⃣ Replica el comportamiento de tu condicional anterior con if, else y else if, pero ahora solo con if (sin else ni else if).

// 💡 Bonus: si ya eres una experta o experto en el lenguaje, te desafío a comentar cómo replicar este comportamiento con arrays y un solo condicional. 😏



const planes = {
    free:'Solo puedes tomar los cursos gratis',
    basic:'Puedes tomar casi todos los cursos de platzi durante un mes',
    Expert:'Puedes tomar casi todos los cursos de platzi durante un año',
    ExpertPlus:'Tu y una persona mas pueden tomar todos los cursos por un año',
}

function tipoDeSuscripcion(tipo){
    if(planes[tipo]){
        console.log(planes[tipo]);
    }else{
        console.log('Ese plan no existe');
    }
}

tipoDeSuscripcion('basic');



