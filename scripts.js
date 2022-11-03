function criarperguntas(){
    let começo = document.querySelector('.criar-inicio')
    começo.classList.remove('exibir')
    let perguntas = document.querySelector('.criar-perguntas')
    perguntas.classList.add('exibir')
}

function criarniveis(){
    let perguntas = document.querySelector('.criar-perguntas')
    perguntas.classList.remove('exibir')
    let niveis = document.querySelector('.criar-niveis')
    niveis.classList.add('exibir')
}

function finalizarquizz(){
    let niveis = document.querySelector('.criar-niveis')
    niveis.classList.remove('exibir')
    let finalizar = document.querySelector('.finalizar-quizz')
    finalizar.classList.add('exibir')
}


function exibirQuiz(quiz) {
    for(let i = 0; i < quiz.data.questions.length ; i++){}
    for(let a = 0; a < quiz.data.levels.length ; a++){}


}
