function mostrar()
{
    var continente;
    var dias;
    var formaDePago;
    var costo;

    continente = Marca.value;


    do{
        dias = 100 * parseInt(prompt("Cantidad de dias"));
    }while(isNaN(dias));

    switch(continente){
        case "América":
            formaDePago = confirm("Paga con debito?");
            if(formaDePago){
                costo = dias* 0.5 * 0.90;
            }else{
                costo = dias*0.5;
            }
            alert("Monto de pago "+costo);
            break;
        case "África":
            formaDePago = confirm("Paga por mercadopago o efectivo?");
            if(formaDePago){
                costo = dias * 0.4 * 0.85;
                alert("Monto de pago "+costo);
            }else{
                costo = dias * 0.4;
                alert("Monto de pago "+costo);
            }
            break;

        case "Europa":
            do{
                tipoDePago = prompt("Ingrese el medio de pago");
            }while(tipoDePago != "debito" && tipoDePago != "mercadopago" && tipoDePago != "otros");
            switch(tipoDePago){
                case "debito":
                    costo = dias * 0.8 * 0.85;
                    alert("Mondo de pago "+costo);
                    break;
                case "mercadopago":
                    costo = dias * 0.8 * 0.9;
                    alert("Mondo de pago "+costo);
                    break;
                case "otros":
                    costo = dias * 0.8 * 0.95;
                    alert("Mondo de pago "+costo);
                    break;
            }
        case "Asia":
        case "Oceania":
            costo = dias * 1.2;
            alert("Mondo de pago "+costo);
            break;
        }
}
