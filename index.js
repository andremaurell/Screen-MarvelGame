const personagens = document.querySelectorAll(".Selected")

personagens.forEach((Selected) => {
    Selected.addEventListener('mouseenter', () =>{
        const idSelecionado = Selected.attributes.id.value;
        
        if (idSelecionado === 'ultron'){ 
            return;
        }
       
        const personagemSelecionado = document.querySelector('.Person-P1')
       
        personagemSelecionado.classList.remove('Person-P1')
       
        Selected.classList.add('Person-P1')
        
        const imagemJogador = document.getElementById('Personagem-P1')
        
        imagemJogador.src = `./imagens/${idSelecionado}.png`
        
        const nomeJogador = document.getElementById('nome-jogador-1')
       
        const nomeSelecionado = Selected.getAttribute('data-name')
        
        nomeJogador.innerHTML = nomeSelecionado

    })  
})

