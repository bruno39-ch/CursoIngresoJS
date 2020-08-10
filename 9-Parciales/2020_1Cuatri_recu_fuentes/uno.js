
function mostrar()
{
	var tipoProducto;
	var precio;
	var cantidad;
	var marca;
	var fabricante;

	//A
	var masCaroJabon;
	var contadorDeJabones=0;
	var cantidadDeUnidadesJabonesMaximo;
	var fabricanteDeJabonesMaximo;

	//B
	var maximasCantidades=0;
	var acumuladorCantidadesAlcohol;
	var acumuladorCantidadesBarbijo;
	var acumuladorCantidadesJabon;
	var promedioPorCompra;
	var contadorPorCompraAlcohol=0;
	var contadorPorCompraBarbijo=0;
	var contadorPorCompraJabon=0;

	var contador=0;

	while(contador < 5){
		contador++;
		do{
			tipoProducto = prompt("Ingrese tipo de producto");
		}while(tipoProducto != "alcohol"
			&& tipoProducto != "barbijo"
			&& tipoProducto !="jabon");
			  
		do{
			precio = prompt("Ingrese un precio");
			precio = parseInt(precio);
		}while(precio < 100 || precio > 300 || isNaN(precio));
		

		do{
			cantidad = prompt("Ingrese la cantidad");
			cantidad = parseInt(cantidad);
		}while(cantidad < 0 || cantidad > 1000 || isNaN(cantidad));

		do{
			marca = prompt("Ingrese marca");
		}while(marca == false);

		do{
			fabricante = prompt("Ingrese fabricante");
		}while(fabricante == false);

		//A
		if(tipoProducto == "jabon"){
			contadorDeJabones++;
			if(contadorDeJabones == 1){
				masCaroJabon = precio;
			}else {
				if(precio > masCaroJabones){
					masCaroJabon = precio;
					cantidadDeUnidadesJabonesMaximo = cantidadDeUnidadesJabonesMaximo;
					fabricanteDeJabonesMaximo = fabricante;
				}
			}
		}
		//B
		switch(tipoProducto){
			case "alcohol":
				acumuladorCantidadesAlcohol += cantidad;
				contadorPorCompraAlcohol++;
				break;
			case "barbijo":
				acumuladorCantidadesBarbijo += cantidad;
				contadorPorCompraBarbijo++;
				break;
			case "jabon":
				acumuladorCantidadesJabon += cantidad;
				contadorPorCompraJabon++;
				break;
		}
		//C


	}//end while

	//B
	if(acumuladorCantidadesAlcohol > acumuladorCantidadesBarbijo
		&& acumuladorCantidadesAlcohol > acumuladorCantidadesJabon){
			//el mayor es alcohol
			promedioPorCompra = acumuladorCantidadesAlcohol / contadorPorCompraAlcohol++; ;
	}else if(acumuladorCantidadesBarbijo > acumuladorCantidadesJabon){
		//el mayor es barbijo
			promedioPorCompra = acumuladorCantidadesBarbijo / contadorPorCompraBarbijo++;;
	}else{
		//el mayor es jabon
			promedioPorCompra = acumuladorCantidadesJabon / contadorPorCompraJabon++;;
	}
}
