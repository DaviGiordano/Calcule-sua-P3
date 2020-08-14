var manualBtn = document.querySelector("#calcularManual");
manualBtn.addEventListener("click", function(){
    var nota = [-1, Number(document.querySelector("#notaP1").value),
                    Number(document.querySelector("#notaP2").value)];
                    
    var peso = [-1, Number(document.querySelector("#pesoP1").value),
                    Number(document.querySelector("#pesoP2").value),
                    Number(document.querySelector("#pesoP3").value),];

    var mediaManual = Number(document.querySelector("#mediaManual").value);

    nota[3] = (((peso[1]+peso[2]+peso[3])*mediaManual) - (nota[1]*peso[1]) - (nota[2]*peso[2]))/peso[3];

    if(nota[3]>10){
        document.querySelector("#notaP3Manual").innerHTML = 'Maior do que 10' + '  ('+nota[3].toFixed(1)+')';
    
    }else if(nota[3]<0){
        document.querySelector("#notaP3Manual").innerHTML = 'Menor do que 0' + '  ('+nota[3].toFixed(1)+')';
    
    }else{
        document.querySelector("#notaP3Manual").innerHTML =   nota[3].toFixed(1);
    
    }
   
});
