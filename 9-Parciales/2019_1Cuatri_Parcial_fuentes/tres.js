function mostrar()
{
    var precio;
    var descuento;

    do{
        precio = parseInt(prompt("Ingrese el precio"));
    }while(isNaN(precio) || precio < 0);
    
    do{
        descuento = parseInt(prompt("Ingrese el descuento"));
    }while(isNaN(precio) || descuento > 100);

    elPrecioFinal.value = precio * ((100-descuento)/100);
}
