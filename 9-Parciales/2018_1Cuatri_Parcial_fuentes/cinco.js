function mostrar()
{
    var planeta;

    planeta = prompt("Ingrese un planeta del sistema solar");
    switch(planeta){
        case "tierra":
            alert("Aca vivimos");
            break;

        case "mercurio":
        case "venus":
            alert("Aca hace mas calor");
            break;

        case "jupiter":
        case "saturno":
        case "marte":
        case "urano":
        case "neptuno":
            alert("Aca hace mas frio");
            break;
        default:
            alert("Planeta no valido");
        
    }
}
