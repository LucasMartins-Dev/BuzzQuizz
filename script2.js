let perguntas = document.querySelector(".todasrespostas");

pegarQuiz();

function pegarQuiz(){
    const pegando = axios.get("https://mock-api.driven.com.br/api/v4/buzzquizz/quizzes/1");
    pegando.then(exibirQuiz());
}

function exibirQuiz(quiz) {
    console.log(quiz.data);
    perguntas.innerHTML = "";
    for(let i = 0; i < quiz.data.questions.answers.length ; i++){ 
        perguntas.innerHTML += `<div class="respostas"><img src="${quiz.data.questions.answers[i].image}" width="330px" height="175px"><p class="${quiz.data.questions.answers[i].text}"> Gatíneo </p></div>`;
    }
    for(let a = 0; a < quiz.data.levels.length ; a++){}


}

//testando commit
