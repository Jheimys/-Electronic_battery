
//Seleciona todas as teclas do teclado (array de button)
const listaDeTeclas = document.querySelectorAll('.tecla')


//Loop for para percorrer todas as teclas.
for( let contador = 0; contador < listaDeTeclas.length; contador++) {
    
    const tecla = listaDeTeclas[contador]    //Seleciona uma tecla do teclado
    
    const instrumento = tecla.classList[1]   // tecla_pom,tecla_clap, tecla_tim ...tecla_tom

    const idAudio = `#som_${instrumento}`   // id de cada audio: #som_tecla_pom,...,#som_tecla_tom

    tecla.onclick = function () {           //Aos o click chama a função tocaSom
        tocaSom(idAudio)
    }

    tecla.onkeydown = function (e) {     // evento de apertar a tecla
        if(e.code === 'Space' || e.code === 'Enter'){ //Se apertar as teclas espaço ou enter
            tecla.classList.add('ativa') // adiciona a classe ativa e o bt fica vermelho
        }
    }
    
    tecla.onkeyup = function (e) {      // evento de soltar a tecla
        if(e.code === 'Space' || e.code === 'Enter') { //Se apertar as teclas espaço ou enter
            tecla.classList.remove('ativa') // remove a classe ativa e o bt fica branco
        }
    }

}

function tocaSom(seletorDeAudio) {                              // função para tocar o som 
    const elemento = document.querySelector(seletorDeAudio)     //seleciona o áudio

    if(elemento && elemento.localName === 'audio'){             //se satisfazer essa condição
        elemento.play()                                         //toca o som da tecla 
    } else {
        console.log('Elemento não encontrado ou seletor inválido!')
    }
}


