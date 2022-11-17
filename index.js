var numeroAleatorio= Math.floor(Math.random() * 100) + 1;

var palpites = document.querySelector('.palpites');
var ultimoResultado = document.querySelector('.ultimoResultado');
var baixoOuAlto = document.querySelector('.baixoOuAlto');

var envioPalpite = document.querySelector('#envioPalpite');
var campoPalpite = document.querySelector('#campoPalpite');

var contagemPalpites = 1;
var botaoReinicio;

let verificaNumero = () => {
    var palpiteUser = Number(campoPalpite.value);
    if (contagemPalpites === 1) {
        palpites.textContent = 'Palpites anteriores: ';
    }
    palpites.textContent += palpiteUser + ' ' ;

    if (palpiteUser === numeroAleatorio) {
        ultimoResultado.textContent = 'Parabéns você ganhou';
        ultimoResultado.style.backgroundColor = 'green';
        baixoOuAlto.textContent = '';
        encerraJogo();
    }
    else if (contagemPalpites === 10) {
        ultimoResultado.textContent = 'Fim de Jogo!!!';
        ultimoResultado.style.backgroundColor = 'red';
        baixoOuAlto.textContent = '';
        encerraJogo();
    }
    else {
        if (palpiteUser > numeroAleatorio) {
            ultimoResultado.textContent = 'Errado!';
            ultimoResultado.style.backgroundColor = 'red';
            baixoOuAlto.textContent = 'Digite um valor mais baixo';
        }
        else {
            ultimoResultado.textContent ='Errado';
            ultimoResultado.style.backgroundColor ='red';
            baixoOuAlto.textContent = 'Tente um valor maior';
        }
    
    }
    contagemPalpites++;
    campoPalpite.value = '';
    campoPalpite.focus();
}

let encerraJogo = () => {
    campoPalpite.disabled = true;
    envioPalpite.disabled = true;
    botaoReinicio = document.createElement('button');
    botaoReinicio.classList.add('.botao')
    botaoReinicio.textContent = 'Iniciar novo Jogo';
    document.body.appendChild(botaoReinicio);
    botaoReinicio.addEventListener('click', reiniciarJogo)
}



let reiniciarJogo = () => {
    contagemPalpites = 1;

    var resetarParagrafos = document.querySelectorAll('.paragrafos p')

    for (let i of resetarParagrafos) {
        i.textContent = '';
    }

    botaoReinicio.parentNode.removeChild(botaoReinicio);

    campoPalpite.disabled = false;
    envioPalpite.disabled = false;
    campoPalpite.value = '';
    campoPalpite.focus();

    ultimoResultado.style.backgroundColor = 'white';

    numeroAleatorio = Math.floor(Math.random() * 100) + 1;
}

envioPalpite.addEventListener('click', verificaNumero);
