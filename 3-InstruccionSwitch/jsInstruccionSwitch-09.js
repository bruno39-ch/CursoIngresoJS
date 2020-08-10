function mostrar()
{
	var estacion =txtIdEstacion.value;
	var destino;
	destino = txtIdDestino.value;

	var precio;
	switch(estacion){
		case "Invierno":
			switch(destino){
				case "Bariloche":
					precio = 15000*1.2;
					break;
				case "Cataratas":
				case "Cordoba":
					precio = 15000*0.9;
					break;
				case "Mar del plata":
					precio = 15000*0.8;
					break;
			}break;
			
		case "Verano":
			switch(destino){
				case "Bariloche":
					precio = 15000*0.8;
					break;
				case "Cataratas":
				case "Cordoba":
					precio = 15000*0.9;
					break;
				case "Mar del plata":
					precio = 15000*1.2;
					break;
			}break;

		case "Otonio":
		case "Primavera":
			switch(destino){
				case "Bariloche":
				case "Cataratas":
				case "Mar del plata":
					precio = 15000*1.1;
					break;
				case "Cordoba":
					precio = 15000;
					break;
			}break;
	}
	alert("El precio sera de "+precio);
}//FIN DE LA FUNCIÓN