/// armado de carrito de compras para empresa de bebidas alcoholicas

const SI = "si";
const NO = "no";
const EDAD_MINIMA = 18 ;

let edad;
let precio;
let cantidad;
let continuar;
let total = 0;


alert ("Bienvenido a Tienda de Bebidas");

edad = +prompt ("Ingrese su edad");

if (edad >= EDAD_MINIMA) {
    alert ("¡Un gusto! A continuación podrás detallarnos tu pedido.")

const cargaProducto = function (num1, num2) {
    let resultado;
    resultado = num1 * num2;
    return resultado;
};


do {
    let n1 = +prompt('Ingrese el precio del producto que desea comprar');
    let n2 = +prompt('Ingrese la cantidad');
    total = total + cargaProducto(n1, n2);
    continuar = prompt('Desea ingresar otro item? si/no');
    while (continuar != 'no' && continuar != 'si') {
        continuar = prompt('Debe ingresar "no" o "si"');
    }
}while(continuar == 'si');

alert("Muchas gracias por comprar en Tienda de Bebidas. El total a abonar es de $" + total);


} else {
    alert ("Lo sentimos, debe ser mayor de edad para ingresar en la página")
    
    
}