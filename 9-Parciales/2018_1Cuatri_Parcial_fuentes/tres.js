function mostrar()
{
    var precio;
    var porcentajeDescuento;

    do{
        precio = parseInt(prompt("Ingrese el precio"));
        porcentajeDescuento = parseInt(prompt("Ingrese el porcentaje de descuento"));
    }while(isNaN(precio) && isNaN(porcentajeDescuento) || porcentajeDescuento > 100);

    elPrecioFinal.value = precio * ((100 - porcentajeDescuento)/100);
}
