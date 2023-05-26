let correctas=[1,2,2,2,1,1,1,2,1,2,3,3,2,1,2,3,2,1,1,2];
let opcion_elegidas=[];
let cantidad_correctas=0;
function respuesta(num_preguntas,seleccionada)
{
    opcion_elegidas[num_preguntas]=seleccionada.value;
    ud="p"+num_preguntas;
    labels=document.getElementById(id).childNodes;
    labels[3].style.backgroundColor="white";
    labels[5].style.backgroundColor="white";
    labels[7].style.backgroundColor="white";
    seleccionada.parentNode.style.backgroundColor="#cec0fc";

}
function corregir()
{
    cantidad_correctas=0;
    for(i=0;i<correctas.length;i++)
    {
        if(correctas[i]==opcion_elegidas[i])
        {
            cantidad_correctas++;
        }
    }
    document.getElementById("resultado").innerHTML=cantidad_correctas;
}