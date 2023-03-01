alert("Aprete comprar y seleccione la cantidad de gramos que quiere llevar")


const precio = 400


function precioTotal(gramos){
    
    const CANTIDADGRAMOS = prompt("Cuantos gramos quieres llevar?")
    let total = parseInt(CANTIDADGRAMOS) * precio
    alert("El total de tu compra es: "+ total)
}