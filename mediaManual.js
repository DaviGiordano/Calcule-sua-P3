var manualBtn = document.querySelector("#calcularManual");
manualBtn.addEventListener("click", function(){
    
    var nota = [-1, Number(document.querySelector("#notaP1").value),
                    Number(document.querySelector("#notaP2").value)];
                    
    var peso = [-1, Number(document.querySelector("#pesoP1").value),
                    Number(document.querySelector("#pesoP2").value),
                    Number(document.querySelector("#pesoP3").value),];

    var mediaManual = Number(document.querySelector("#mediaManual").value);
    /*!!!!!!!!Otimizar isso*/
    /*document.querySelector("#notaP1").style.color = "blue";
    document.querySelector("#notaP2").style.color = "blue";
    document.querySelector("#pesoP1").style.color = "blue";
    document.querySelector("#pesoP2").style.color = "blue";
    document.querySelector("#pesoP3").style.color = "blue";
    document.querySelector("#mediaManual").style.color = "blue";
    */
    nota[3] = (((peso[1]+peso[2]+peso[3])*mediaManual) - (nota[1]*peso[1]) - (nota[2]*peso[2]))/peso[3];



    document.querySelector("#notaP3Manual").innerHTML =   nota[3].toFixed(1);
});