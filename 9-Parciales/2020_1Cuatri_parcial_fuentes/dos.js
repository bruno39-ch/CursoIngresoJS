function mostrar()
{
  var tipo;
  var cantidadDeBolsa;
  var precio;

  var descuento=0;
  var respuesta;
  do{

    do{
      tipo = prompt("Producto de compra");
    }while(tipo != "arena"
        && tipo != "cal"
        && tipo != "cemento");
    
    do{
      cantidadDeBolsa = parseInt(prompt("Cantidad de bolsas"));
      if(cantidadDeBolsa > 10){
        descuento = 0.85;
      }else if(cantidadDeBolsa > 30){
        descuento = 0.75;
      }
    }while(isNaN(cantidadDeBolsa) || cantidadDeBolsa < 0);


    do{
      precio = parseInt(prompt("Precio"));
      
    }while(isNaN(precio) || precio < 0);


  respuesta = confirm("Desea continuar con la compra?");
  }while(respuesta);
}
