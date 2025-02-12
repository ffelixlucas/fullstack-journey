document.addEventListener("DOMContentLoaded", function() {

let botao = document.getElementById('btn-calcular');
let resultado = document.getElementById('resultado');

botao.addEventListener('click', function() {
    let nota1 = parseFloat(document.getElementById('nota1').value);
    let nota2 = parseFloat(document.getElementById('nota2').value);
    let nota3 = parseFloat(document.getElementById('nota3').value);

    if (isNaN(nota1) || isNaN(nota2) || isNaN(nota3)) {
        resultado.innerHTML = 'Por favor, preencha todas as notas!';
        resultado.style.color = 'red';
        return;
    }    

    let media = (nota1 + nota2 + nota3) / 3;

    let corNota =  media >= 7 ? 'green' : 'red';

    if (media >= 7) {
        resultado.innerHTML = `Média final = <span style="color: ${corNota};">${media.toFixed(2)}</span> APROVADO! 🎉🎉🎉`; 
    } else {
        resultado.innerHTML = `Média final = <span style="color: ${corNota};">${media.toFixed(2)}</span> REPROVADO! 😢😢😢`;
    }
    
});


});