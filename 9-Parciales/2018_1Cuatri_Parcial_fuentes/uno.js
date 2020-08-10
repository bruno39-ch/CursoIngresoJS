
function mostrar()
{
    var ancho;
    var largo;
    var perimetro;
    do{
        ancho= parseInt(prompt("Ingrese el ancho"));
        largo = parseInt(prompt("Ingrese el largo"));

    }while(isNaN(ancho) || isNaN(largo));

    perimetro = 2*(ancho + largo);
    alert("El perimetro es: "+perimetro);
}
