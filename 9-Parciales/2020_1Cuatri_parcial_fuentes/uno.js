
function mostrar()
{
	var productos;
	var precio;
	var cantidad;
	var marca;
	var fabricante;


	var masBaratoAlcohol;
	var cantidadDeAlcohol;
	var fabricanteAlcohol;
	var primeraVez= true;


	
	var cantidadBarbijos;
	var contadorBarbijos;
	var cantidadJabon;
	var contadorJabon;
	var cantidadAlcohol;
	var contadorAlcochol;
	var masUnidades;
	var promedio;

	var contador=0;
	while(contador < 2){
		contador++;
		do{
			productos = prompt("Ingrese el producto");
		}while(productos != "barbijo"
			&& productos != "jabon"
			&& productos != "alcohol");

		do{
			precio = parseInt(prompt("Ingrese el precio"));
		}while(isNaN(precio) || precio < 100 || precio > 300);
		
		do{
			cantidad = parseInt(prompt("Ingrese la cantidad"));
		}while(isNaN(cantidad) || cantidad < 1 || cantidad > 1000);
		
		//marca = prompt("Ingrese la marca");
		fabricante = prompt("Ingrese la fabricante");

		if(primeraVez && productos == "alcohol"){
			masBaratoAlcohol = precio;
			cantidadDeAlcohol = cantidad;
			fabricanteAlcohol = fabricante;
		}else{
			if(precio < masBaratoAlcohol && producto == "alcohol"){
				masBaratoAlcohol = precio;
				cantidadDeAlcohol = cantidad;
				fabricanteAlcohol = fabricante;
			}
		}
		switch(productos){
			case "barbijo":
				cantidadBarbijos += cantidad;
				contadorBarbijos++;
				break;
			case "jabon":
				cantidadJabon += cantidad;
				contadorJabon++;
				break;
			case "alcohol":
				cantidadAlcohol += cantidad;
				contadorAlcochol++;
				break;
		}

	}
	if(cantidadBarbijos > cantidadJabon && cantidadBarbijos > cantidadAlcohol){
		masUnidades = cantidadBarbijos;
		promedio = masUnidades / contadorBarbijos;
	}else{
		if(cantidadJabon > cantidadAlcohol){
			masUnidades = cantidadJabon;
			promedio = masUnidades / contadorJabon;
		}else{
			masUnidades = cantidadAlcohol;
			promedio = masUnidades / contadorAlcohol;	
		}
	}
	document.write("Alcohol mas barato "+fabricanteAlcohol+
	" cantidad "+cantidadDeAlcohol+" precio "+masBaratoAlcohol);
	document.write("<br>Unidades mas compradas: "+masUnidades+" y su promedio es");
}
