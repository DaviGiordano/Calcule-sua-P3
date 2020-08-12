const etapas = ['escolhaMetodo','escolhaMaterias','displayNotas','fluxoManual','displayNotasManual'];

function esconderEtapas(){
    var i;
    for(i=0;i<5;i++){
        document.getElementById(etapas[i]).style.display = 'none';
        console.log('escondendo etapa:'+ etapas[i]);
    }
};

function mostrarEtapa(numEtapa){
    document.getElementById(etapas[numEtapa]).style.display = 'flex';
    console.log('mostrando etapa ' + etapas[numEtapa]);

    //esconder processo manual se a etapa for do processo automático
    if(numEtapa != 4){
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
