function calcularIMC() {
    const peso = parseFloat(document.getElementById('peso').value);
    const altura = parseFloat(document.getElementById('altura').value);
    const resultadoDiv = document.getElementById('resultado');

    if (!peso || !altura) {
        resultadoDiv.textContent = "por favor, preencha todos os campos"
        resultadoDiv.style.color = "red";
        return
}
const imc = (peso / (altura ** 2)).toFixed(2);
let classificacao = '';

if (imc < 18.5) {
    classificacao = 'Abaixo do peso';
} else if ( imc>= 18.5 && imc< 25) {
    classificacao = 'peso normal';
} else if ( imc>= 25 && imc< 30) {
    classificacao = 'sobrepeso';
} else if ( imc>= 30 && imc< 35) {
    classificacao = 'obesidade grau I';
} else if ( imc>= 35 && imc< 40) {
    classificacao = 'obesidade grau II (severa)';
} else {
    classificacao = 'Obesidade grau III (mórbida)';
}

resultadoDiv.textContent = `seu IMC é ${imc}. você está ${classificacao}.`;
resultadoDiv.style.color = 'black';

}

document.getElementById('calcularBtn').addEventListener('click', calcularIMC);