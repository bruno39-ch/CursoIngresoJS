function mostrar()
{
  var respuesta;
  var tipo;
  var precio;
  var cantidad;
  var precioBruto=0;
  var acumuladorPrecioBruto=0;
  var acumuladorCantidadBolsa=0;
  var descuento;
  var bolsasMaximas=0;
  var tipoBolsasMaximas;
  var precioMaximo =0;
  var precioMasCaro;
  var tipoPrecioMaximox;
  do{
    do{
      tipo = prompt("Ingrese tipo");
    }while(tipo != "arena"
        && tipo != "cal"
        && tipo != "cemento");

    do{
      precio = prompt("Ingrese precio");
      precio = parseInt(precio);
    }while(isNaN(precio) || precio < 0);

    do{
      cantidad = prompt("Ingrese la cantidad");
      cantidad = parseInt(cantidad);
    }while(isNaN(cantidad) || cantidad < 0);

    acumuladorPrecioBruto += precio*cantidad;

    //D
if(cantidad > bolsasMaximas){

}
  //E
  if(precio > precioMaximo){
    precioMaximo = precio;
    tipoPrecioMaximo = tipo;
  }
    respuesta = confirm("Desea continuar?");
  }while(respusta);

  //PUNTO A
  console.log("El importe bruto sin descuento es ");
  if(acumuladorCantidadBolsa > 30){
    descuento = 0.85;
  }else{
    descuento = 0.75;
  }
  //PUNTO B
  precioConDescuento = acumuladorPrecioBruto * descuento;
  console.log("El precio con descuento es: "+precioConDescuento)

  //PUNTO D
  console.log("El tipo de bolsa maxima es: "+tipoBolsasMaximas);
}
