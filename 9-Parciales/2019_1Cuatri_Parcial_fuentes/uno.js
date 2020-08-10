
function mostrar()
{
    var dato;

    do{
        dato = parseInt(prompt("Ingrese la medida"));
    }while(isNaN(dato));
    dato = 3*dato;
    alert("Perimetro: "+dato);
}
