
//Definir valor del ticket
const valorTicket = 200;

//Definir los porcentajes



let descuentoEstudiante = 0.80;
let descuentoTrainee = 0.50;
let descuentoJunior = 0.15;

console.log(descuentoEstudiante);


//Tomar los valores

const cantidad =document.querySelector('#cantidad');
const categoria= document.querySelector('#categoriaSelect');
const totalPago = document.querySelector('#total');
const botonBorrar = document.querySelector('#borrar');
const botonResumen = document.querySelector('#resumen');
// console.log(cantidad);
// console.log(categoria);


function prueba(){
    console.log("Hola mundo nuevo")

}


function prueba1(){
    console.log("Hola mundo nuevo prueba1")

}






// botonBorrar.addEventListener("click",prueba)

// botonResumen.addEventListener("click",prueba1)




 console.log("Hello Mundo")




function totalPagar(){
    //Calcular el valor total

    console.log("Hola mundo dentro de la funcion");

    let totalValor = parseInt(cantidad.value * valorTicket);

    //Opciones con descuento
    if (categoria.value == 1){
        totalValor = totalValor - (totalValor * descuentoEstudiante);
    }
    else if (categoria.value == 2){
        totalValor = totalValor - (totalValor * descuentoTrainee);
    }
    else if (categoria.value == 3){
        totalValor = totalValor = totalValor - (totalValor * descuentoJunior);
    }
    // else {
    //     totalValor =totalValor;
    // }

    totalPago.innerHTML = "Total a pagar nuevo: $ " + totalValor;
    
}




//  botonBorrar.addEventListener("click",prueba)


//Boton Resumn
 botonResumen.addEventListener("click",totalPagar)


//Boton Borrar
botonBorrar.addEventListener("click", () => {
    totalPago.innerHTML = "Total a pagar:"
    cantidad.value = null;  
}
    );

