const etapas = ['escolhaMetodo','escolhaMaterias','displayNotas','fluxoManual','displayNotasManual','footer'];

function esconderEtapas(){
    var i;
    for(i=0;i<6;i++){
        document.getElementById(etapas[i]).style.display = 'none';
        console.log('escondendo etapa:'+ etapas[i]);
    }
};

function mostrarEtapa(numEtapa){
    document.getElementById(etapas[numEtapa]).style.display = 'flex';
    console.log('mostrando etapa ' + etapas[numEtapa]);

    //esconder processo manual se a etapa for do processo automático
    if(numEtapa!=5){
        document.getElementById('footer').style.display = 'none';
    }
    if(numEtapa != 4 && numEtapa != 5){
        document.getElementById('fluxoManual').style.display = 'none';
        document.getElementById('displayNotasManual').style.display = 'none';
    }
};

function startManual(){
    //esconder processo automático
    for(i=1;i<3;i++){
        document.getElementById(etapas[i]).style.display = 'none';
        console.log('escondendo etapa:'+ etapas[i]);
    }
    document.getElementById('fluxoManual').style.display = 'flex';
}

/*Esconder o botão vamos lá após ser clicado */
function hideMe(){
    var startBtn = document.getElementById('start-btn');
    startBtn.style.opacity = '.3';
    startBtn.style.color = 'black';
    startBtn.style.backgroundColor = '#ecf0f1';
    startBtn.style.cursor = 'default';
};