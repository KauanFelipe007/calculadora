const calcular = document.getElementById('calcular');

function imc () {
    const nome = document.getElementById('nome').value;
    const altura = +document.getElementById('altura').value;
    const peso = +document.getElementById('peso').value;
    const resultado = document.getElementById('resultado');

    if (nome !== '' && altura !== '' && peso !== '') {

        const valorIMC = (peso / (altura * altura)).toFixed(1);

        let classificacao = '';

        if (valorIMC < 18.5){
            classificacao = 'abaixo de media ideal.';
        }else if (valorIMC < 25) {
            classificacao = 'com peso ideal . Parabéns!!!';
        }else if (valorIMC < 30){
            classificacao = 'um pouco acima do peso, deveria fazer uma dieta.';
        }else if (valorIMC < 35){
            classificacao = 'com obesidade não muito seria.';
        }else if (valorIMC < 40){
            classificacao = 'com obesidade grau II, preocupante procure um nutricionistas';
        }else {
            classificacao = 'com obesidade grau III. Cuidado vc pode ter problemas graves!!';
        }

        resultado.textContent = `${nome} seu IMC é ${valorIMC} e você está ${classificacao}`;
       
    }else {
        resultado.textContent = 'Preencha todos os campos!!!';
    }

}

calcular.addEventListener('click', imc);