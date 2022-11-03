

pegarQuiz();

function pegarQuiz(){
    const pegando = axios.get("https://mock-api.driven.com.br/api/v4/buzzquizz/quizzes/1");
    pegando.then(exibirQuiz);
}

function exibirQuiz(quiz) {
    console.log(quiz.data);

    //perguntas.innerHTML = "";
    let container = document.querySelector(".containerquiz");
    container.innerHTML += `<img src="${quiz.data.imagem}" class="mainimgquiz">`;
    for(let b = 0; b < quiz.data.questions.length ; b++) {
    container.innerHTML += `
    <div class="pergunta">
    <div class="textopergunta">
    <p>${quiz.data.questions[b].title}</p>
    </div><div class="todasrespostas" id="${b}">
    </div></div>`;
        for(let i = 0; i < quiz.data.questions[b].answers.length ; i++){ 
            let perguntas = document.getElementById(b);
            perguntas.innerHTML += `
            <div class="respostas">
            <img src="${quiz.data.questions[b].answers[i].image}" width="330px" height="175px">
            <p class=""> ${quiz.data.questions[b].answers[i].text} </p>
            </div>
            `;
    }
    for(let a = 0; a < quiz.data.levels.length ; a++){}

 }
}


