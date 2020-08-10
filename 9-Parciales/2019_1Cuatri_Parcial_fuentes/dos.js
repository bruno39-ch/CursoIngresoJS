function mostrar()
{
  var nombre1;
  var nombre2;
  var peso1;
  var peso2;

    nombre1 = prompt("Ingrese su nombre1");
    do{
        peso1= parseInt(prompt("Ingrese su peso"));
    }while(isNaN(peso1));

    nombre2 = prompt("Ingrese su nombre2");    
    do{
        peso2= parseInt(prompt("Ingrese su peso"));
    }while(isNaN(peso2));

    alert("Ustedes se llaman "+nombre1+" y "+nombre2+" pesan "+peso1+" y "
    +peso2+" kilos  y el promedio de peso es "+(peso1+peso2)/2);
    
}
