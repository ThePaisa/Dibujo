var button = document.getElementById("botoncito");
var texto = document.getElementById("cajaTexto");
var dibujo = document.getElementById("dibujito");
var contexto = dibujo.getContext("2d")
var espacio = dibujo.width

function dibujarLinea(color, xInicial, yInicial, xFinal, yFinal)
{
contexto.beginPath()
contexto.strokeStyle = color 
contexto.moveTo(xInicial,yInicial);
contexto.lineTo(xFinal,yFinal);
contexto.stroke();
contexto.closePath();
}



button.addEventListener("click", clickBoton); // evento de click a un boton

function clickBoton()
{


    var lineas = parseInt(texto.value)  //obtenemos el dato que ingresa el usuario en la caja de texto
    var distanciaDeLinea= espacio/lineas  //determinamos el espacio entre lineas por medio de la division

//for que itera la cantidad de veces que el usuario ingrese
    for(l=0 ; l<lineas ; l++ ) //esquina inferior izquierda
    {
        //algoritmo matematico para realizar la figura 
        //distancia entre linea genera la figura de manera simetrica y bonita
    yInicial= distanciaDeLinea*l   
    xFinal= distanciaDeLinea*(l+1) //lo de los parentesis se realiza primero en js
    dibujarLinea( "black", 0, yInicial, xFinal, 300)
    }

    for (l=0; l<lineas ; l++)
    {
    yInicial= distanciaDeLinea*l
    xFinal= 290 - (distanciaDeLinea*l)

    dibujarLinea("yellow", 300, yInicial, xFinal, 300)
    

    }

    for (l=0; l<lineas ; l++)
    {
        xInicial= 290 - (distanciaDeLinea*l)
        yFinal = 300 - (distanciaDeLinea*l)
        dibujarLinea("red", xInicial, 0, 300, yFinal)

    }

    dibujarLinea("brown", 149, 149, 160, 160)







}









    
