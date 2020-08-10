function mostrar()
{
    var num1;
    var num2;

    var resta;
    var suma;
    do{
        num1= parseInt(prompt("Ingrese numero 1"));
        num2= parseInt(prompt("Ingrese numero 2"));
    }while(isNaN(num1) || isNaN(num2));

    if(num1 == num2){
        alert(num1+""+num2);
    }else{
        if(num1 > num2){
            resta = num1-num2;
            alert("La resta dio "+resta);
        }else{
            suma = num1 + num2;
            if(suma > 10){
                alert("La suma es "+suma+" y supero el 10");
            }else{
                alert(suma);
            }
        }
    }
}
