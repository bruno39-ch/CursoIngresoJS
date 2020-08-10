/*
Al presionar el botón pedir un sexo
'f' para femenino, 'm' para masculino.*/
function mostrar()
{
	var sexoIngresado;
	sexoIngresado = prompt("ingrese f ó m .");
	
	while(sexoIngresado != "f" || sexoIngresado != "m"){
		
		if(sexoIngresado == "f"){
			txtIdSexo.value = "Femenino";
			break;
		}else{
			if(sexoIngresado == "m"){
				txtIdSexo.value = "Masculino";
				break;
			}
		}
		sexoIngresado = prompt("ingrese f ó m .");
	}
}