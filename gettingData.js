//Calculando as P3 de *todas* as matérias em sequência e postando no campo destino
//O id = 1 da API se torna o índice 0 no array

const getBtn = document.getElementById('get-btn');

const materias = ['calc', 'fis', 'mec', 'alg', 'poes']

const getData = () => {

    const xhr = new XMLHttpRequest();
    xhr.open('GET', 'https://api.polijunior.com.br/notas');
    xhr.send();
    xhr.responseType = 'json';
    
    xhr.onload = () => {

        const data = xhr.response;
        for(i=0; i<5; i++){

            //fórmula para calcular a nota da p3
            var nota_p3 = ((data[i]['media_pretendida'])*(data[i]['peso_p1'] + data[i]['peso_p1'] + data[i]['peso_p1']) 
                          - (data[i]['nota_p1']*data[i]['peso_p1']) 
                           - (data[i]['nota_p2']*data[i]['peso_p2']))/data[i]['peso_p3'];
            
            //caso para 'Poesia para Engenheiros', em que mesmo tirando uma nota negativa a média seria atingida
            if(nota_p3<0){
                nota_p3 = 0;
            }
            document.getElementById(materias[i]+'Med').value = data[i]['media_pretendida'].toFixed(1);
            document.getElementById(materias[i]).innerHTML = 'Nota da P3 necessária: ' + nota_p3.toFixed(1);
        }
    };
};

getBtn.addEventListener('click', getData);