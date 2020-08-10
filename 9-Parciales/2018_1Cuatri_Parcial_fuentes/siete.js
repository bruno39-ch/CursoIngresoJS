function mostrar()
{   
    var notas;
    var sexo;

    var promedio=0;
    var notaMasBaja;
    var cantidadVaronesNotasBajas=0;

    var primeraVez=true;
    var contador=0;

    while(contador < 5){
        contador++;
        do{
            notas = parseInt(prompt("Ingrese la nota"));
            promedio = promedio + notas;
        }while(isNaN(notas) || notas < 0 || notas > 10);
        
        do{
            sexo = prompt("Ingrese su sexo: f/m");
        }while(sexo != "f" && sexo != "m");
        

        if(primeraVez){
            primeraVez= false;
            notaMasBaja = notas;
        }else{
            if(notas < notaMasBaja){
                notaMasBaja = notas;
            }
        }
            
        if(notas > 5 && sexo == "m" ){
           cantidadVaronesNotasBajas++; 
        }
    }
    alert("Promedio: "+promedio/5+
    "\nNota mas baja: "+notaMasBaja+
    "\nCantidad de varones con notas mayores a 5: "+cantidadVaronesNotasBajas);
}
