var automaBtn = document.querySelector('#calcularAutomatico');
var divNotas = document.querySelector('#displayNotas');
var table = document.querySelector('#table');

//clique do botão
automaBtn.addEventListener('click', function(){

    //manipulação elementos necessários para criação da tabela
    var rowcount = 0;
    document.querySelector('tbody').remove(); 
    var tbody = document.createElement('tbody'); 
    table.appendChild(tbody);

    //verificar quais materias estão 'marcadas' para o cálculo, mais sua indexação e associação a nome.
    var checkform = [
        {'nome':'Cálculo II', position:0, 'status':document.querySelector('#MAT2454').checked },
        {'nome':'Física II', position:1, 'status':document.querySelector("#FIS4302112").checked},
        {'nome':'Mecânica A', position:2, 'status':document.querySelector('#PME2100').checked },
        {'nome':'Algelin II', position:3, 'status':document.querySelector('#MAT3458').checked },
        {'nome':'Poesia para engenheiros', position:4, 'status':document.querySelector('#PMI3019').checked },
    ]; 

    //início do HTMLRequest
    var xhr = new XMLHttpRequest();
    xhr.open('GET','https://api.polijunior.com.br/notas');

    xhr.onload = function(){
        const data = JSON.parse(xhr.response);

        //para cada matéria do checkform, verificar se está marcada (status)
        checkform.forEach(function(materia) {

            if(materia.status){
                //fórmula para o cálculo da nota da P3 necessária 
                console.log(materia.nome);
                console.log(data[materia.position]['media_pretendida']);   
                console.log(data[materia.position]['peso_p1']);


                var notaP3 = ((data[materia.position]['media_pretendida'])*(data[materia.position]['peso_p1'] + data[materia.position]['peso_p2'] + data[materia.position]['peso_p3']) 
                           - (data[materia.position]['nota_p1']*data[materia.position]['peso_p1']) 
                           - (data[materia.position]['nota_p2']*data[materia.position]['peso_p2']))/data[materia.position]['peso_p3'];
                
                
                //inserir linha na tabela, e inserir três células nessa linha
                var newrow = tbody.insertRow(rowcount);
                newrow.insertCell(0);
                newrow.insertCell(1);
                newrow.insertCell(2);
                
                //dados a serem inseridos em cada célula
                var nomeMateria = document.createElement('h3');
                nomeMateria.style.color = 'black';
                nomeMateria.innerHTML = materia.nome;
                newrow.cells[0].appendChild(nomeMateria);

                var tituloMedia = document.createElement('span');
                tituloMedia.innerHTML = 'Para média ';
                newrow.cells[1].appendChild(tituloMedia);
                
                var media = document.createElement('input');
                media.type = 'number';
                media.value = data[materia.position]['media_pretendida'];
                media.id = 'media'+ materia.nome;
                newrow.cells[1].appendChild(media);

                var tituloResultado = document.createElement('span');
                tituloResultado.innerHTML = 'Nota P3:'
                newrow.cells[2].appendChild(tituloResultado);

                var resultado = document.createElement('p');
                resultado.style.color = 'black';
                resultado.innerHTML = notaP3.toFixed(1);
                resultado.id = 'resultado'+ materia.nome;
                newrow.cells[2].appendChild(resultado);
                
                rowcount++;
                
                //adicionando event listener para se a média for alterada
                media.oninput = function(){
                    resultado.innerHTML = '...';
                    setTimeout(recalcular, 1500);
                    function recalcular(){
                        resultado.innerHTML = (((media.value)*(data[materia.position]['peso_p1'] + data[materia.position]['peso_p2'] + data[materia.position]['peso_p3']) 
                        - (data[materia.position]['nota_p1']*data[materia.position]['peso_p1']) 
                        - (data[materia.position]['nota_p2']*data[materia.position]['peso_p2']))/data[materia.position]['peso_p3']).toFixed(1);
                    }
                    //POR QUE ISSO FUNCIONA?????????????????????????????????
                   
                };
            }      
        });
    };
    xhr.send();
});

/*
Quick ref:
        MAT2454 Cálculo 2
        MAT3458 Algebra Linear 2
        PME2100 Mecânica A 
        FIS4302112 Física 2
        PMI3019 Poesia para engenheiros
*/