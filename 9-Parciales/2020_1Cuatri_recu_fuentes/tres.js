function mostrar()
{
	var nombre;
	var nacionalidad;
	var edad;
	var sexo;
	var estadoCivil;
	var temperaturaCorporal;

	//A
	var temperaturaMaxima=0;
	var nacionalidadTemperaturaMax;

	//B
	var mayoresDeEdad=0;

	//C
	var contadorMujeresSolterasViudas=0;

	//D
	var	contadorPersonasDeTerceraEdad=0;

	//E
	var contadorMujeresCasadas=0;
	var edadMujeresCasadas;
	var promedioMujeresCasadas;


	var respuesta;
	do{
		nombre = prompt("Ingrese su nombre");
		nacionalidad = prompt("Ingrese su nacionalidad")
		
		do{
			edad = prompt("Ingrese su edad");
			edad = parseInt(edad);
		}while(isNaN(edad) || edad < 0 );

		do{
			sexo = prompt("Ingrese su sexo: f/m")
		}while(sexo != "f" && sexo !="m");

		do{
			estadoCivil = prompt("Ingrese su esado civil");
		}while(estadoCivil != "soltero"
			&& estadoCivil != "casado"
			&& estadoCivil != "viudo");
		
		do{
			temperaturaCorporal = prompt("Ingrese su temperatura corporal");
		}while(isNaN(temperaturaCorporal));

		//A
		if(temperaturaCorporal > temperaturaMaxima){
			temperaturaMaxima = temperaturaCorporal;
			nacionalidadTemperaturaMax = nacionalidad;
		}
		//B
		if(edad > 17 && estadoCivil == "soltero"){
			mayoresDeEdad++
		}

		//C
		if(sexo == "f"){
			if(estadoCivil == "soltero" || estadoCivil == "viudo" ){
				contadorMujeresSolterasViudas++;
			}
		}

		//D
		if(edad > 60 && temperaturaCorporal > 38){
			contadorPersonasDeTerceraEdad++;
		}

		//E
		if(sexo == "f" && estadoCivil == "casado"){
			contadorMujeresCasadas++;
			edadMujeresCasadas += edad;
		}

		respuesta= confirm("Desea continuar?");
	}while(respuesta);

	promedioMujeresCasadas = edadMujeresCasadas / contadorMujeresCasadas;
	console.log("Nacionalidad de la persona con mas temperatura: "+nacionalidadTemperaturaMax);
	console.log("Cantidad de solteros mayores de 17: "+mayoresDeEdad);
	console.log("cantidad de mujeres solteras o viodas: "+contadorMujeresSolterasViudas);
	console.log("Personas de la tercera edad con mas de 38 de tempertatura: "+contadorPersonasDeTerceraEdad);
	console.log("Promedio de edad de mujeres casadas: "+edadMujeresCasadas);
}
