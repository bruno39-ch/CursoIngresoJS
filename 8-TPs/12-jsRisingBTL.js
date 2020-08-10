/*RISING BTL. Empresa dedicada a la toma de datos para realizar estadísticas y censos nos pide realizar una carga de datos validada e ingresada por ventanas emergentes solamente (para evitar hacking y cargas maliciosas) y luego asignarla a cuadros de textos. 
12.   Los datos requeridos son los siguientes:
A.	Edad, entre 18 y 90 años inclusive.
B.	Sexo, “M” para masculino y “F” para femenino
C.	Estado civil, 1-para soltero, 2-para casados, 3-para divorciados y 4-para viudos
D.	Sueldo bruto, no menor a 8000.
E.	Número de legajo, numérico de 4 cifras, sin ceros a la izquierda.
F.	Nacionalidad, “A” para argentinos, “E” para extranjeros, “N” para nacionalizados.
 */
function ComenzarIngreso () 
{
 	//definicion de variables
 	var edadIngresada;
 	var sexoIngresado;
 	var estadoCivilIngresado;
	
	var sueldo;
	var legajo;
	var nacionalidad;

	do{
		edadIngresada = promt("Ingrese una edad valida");
		edadIngresada = parseInt(edadIngresada);
	}while(isNan(edadIngresada)||edadIngresada<18 || edadIngresada 90)
	
/*
	sexoIngresado = prompt("Ingrese el sexo f o m");
	while(sexoIngresado != "f" && sexoIngresado != "m"){
	sexoIngresado = prompt("Ingrese el sexo f o m");
		if(sexoIngresado == "f" ){
		   txtIdSexo.value = "Femenino";
		}else{
		   if(sexoIngresado == "m"){
			   txtIdSexo.value = "Masculino";
		   }
	   }
	}*/
/*
	estadoCivilIngresado = parseInt(prompt("Estado Civil, 1-Para soltero, 2-Para casado, 3-Para divorciado, 4-Para viudos"));
	while(estadoCivilIngresado < 0 || estadoCivilIngresado > 5){
		estadoCivilIngresado = parseInt(prompt("Estado Civil, 1-Para soltero, 2-Para casado, 3-Para divorciado, 4-Para viudos"));
		switch(estadoCivilIngresado){
		case 1:
			txtIdEstadoCivil.value = "Soltero";
			break;
		case 2:
			txtIdEstadoCivil.value = "Casado";
			break;
		case 3:
			txtIdEstadoCivil.value = "Divorciado";
			break;
		case 4:
			txtIdEstadoCivil.value = "Viudo";
			break;
		}
	}
*/
}
/*
		estadoCivilIngresado = parseInt(prompt("Estado Civil, 1-Para soltero, 2-Para casado, 3-Para divorciado, 4-Para viudos"));
		switch(estadoCivilIngresado){
			case 1:
				txtIdEstadoCivil.value = "Soltero";
				break;
			case 2:
				txtIdEstadoCivil.value = "Casado";
				break;
			case 3:
				txtIdEstadoCivil.value = "Divorciado";
				break;
			case 4:
				txtIdEstadoCivil.value = "Viudo";
				break;
			}

			sueldo = parseInt(prompt("Ingrese un sueldo no meno a 8000"));
			if(sueldo > 999 && sueldo < 10000){
				txtIdSueldo.value = sueldo;
			}else{
				continue;
			}

			legajo = parseInt(prompt("Ingrese su legajo sin ceros a la izquierda"));
			if(legajo > 0001){
				txtIdLegajo.value = legajo;
			}else{
				continue;
			}

			nacionalidad = prompt("Ingrese su nacionalidad: A-para argentinos, E-para extranjeros, N-para nacionalizados");
			switch(nacionalidad){
				case "A":
					txtIdNacionalidad.value = "Argentino";
					break;
				case "E":
					txtIdNacionalidad.value = "Extranjero";
					break;
				case "N":
					txtIdNacionalidad.value = "Nacionalizado";
					break;
			}
	}
	}*/
