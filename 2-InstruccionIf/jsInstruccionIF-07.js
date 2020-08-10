function mostrar()
{
	var edad;
	var estado;

	edad = txtIdEdad.value;
	estado = txtEstadoCivil.value;

	if(isNaN(edad)){
		if(edad < 18 && estado != "Soltero"){
			alert("Es muy pequeño para no ser soltero")asdasd
		}
	}
}//FIN DE LA FUNCIÓN