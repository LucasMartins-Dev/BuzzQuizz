let score = 0;
let d = 0;
let numdeperg, container, acerto, totalperg, dataquiz, f;
let j = 1;
let id2 = localStorage.getItem('id');

pegarQuiz(id2);

function pegarQuiz(idquiz){
    const pegando = axios.get(`https://mock-api.driven.com.br/api/v4/buzzquizz/quizzes/${idquiz}`);//${id
    pegando.then(exibirQuiz);
}
function exibirQuiz(quiz) {
    console.log(quiz.data);
    container = document.querySelector(".containerquiz");
    container.innerHTML += `<div class="imagemetituloquiz"><img src="${quiz.data.image}" class="mainimgquiz"><p class="tituloquiz">${quiz.data.title}</p></div>`;
    numdeperg = quiz.data.questions.length;
    dataquiz = quiz.data;
    
    
    for(let b = 0; b < quiz.data.questions.length ; b++) {
        let questionss= []
    container.innerHTML += `
    <div class="pergunta">
    <div class="textopergunta" style="background-color:${quiz.data.questions[b].color}">
    <p>${quiz.data.questions[b].title}</p>
    </div><div class="todasrespostas" id="${b}">
    </div></div>`;
    for(let i = 0; i < quiz.data.questions[b].answers.length ; i++){
        questionss.push(quiz.data.questions[b].answers[i])
        questionss.sort(()=> Math.random() - 0.5);
    }   
        for(let i = 0; i < quiz.data.questions[b].answers.length ; i++){ 
            
            let perguntas = document.getElementById(b);
            perguntas.innerHTML += `
            <div class="respostas p${questionss[i].isCorrectAnswer}" onclick="escolherResposta(${questionss[i].isCorrectAnswer}, this)">
            <img src="${questionss[i].image}" class="imagemdasresp">
            <p class=""> ${questionss[i].text} </p>
            </div>
            `;
            
    }
    for(let a = 0; a < quiz.data.levels.length ; a++){}
 }
}
function escolherResposta(certoerrado, respostaclickada) {
    if(respostaclickada.parentElement.classList.value === "todasrespostas jaescolheu"){
        alert("você já respondeu  essa pergunta");
    }
    else {
    console.log(respostaclickada.parentElement.classList.value);
    let parent = respostaclickada.parentElement;
    respostaclickada.classList.add("selecionada");
    parent.classList.add("jaescolheu");  
    
    
    for(let c = 0; c < parent.children.length; c++){
        parent.children[c].classList.add("opaco");
    }
    if(certoerrado === true){
        score++;
    }
    if(document.querySelectorAll(".jaescolheu").length === numdeperg){
        //alert("voce respondeu todas as perguntas");
        acerto = score / numdeperg;
        acerto = Math.round(acerto * 100);
        gerarResultados();
        
        
    } 
    let proxima = document.querySelectorAll(".todasrespostas");
    proxima[j].parentElement.scrollIntoView();
    j++
    
}
}


function reiniciarQuiz() {
    window.location.reload();
}
function voltarHome() {
    window.location.href = "index.html";
}

function gerarResultados() {
    console.log(acerto);
    console.log(dataquiz.levels.length);
    
    for (let i = 0; i < dataquiz.levels.length; i++) {
        if (acerto >= dataquiz.levels[i].minValue) {
            d = i;
            
        }
    }
    container.innerHTML += `<div class="resultado">
            <div class="tituloresultado"><p>${acerto}% de acertos: ${dataquiz.levels[d].title}</p></div>
            <div class="resultado2">
                <img class="imgresultado" src="${dataquiz.levels[d].image}">
                <div class="mensagemresultado">${dataquiz.levels[d].text}</div>
            </div>
        </div>
        <div class="reiniciar" onclick="reiniciarQuiz()"><p>Reiniciar Quizz</p></div>
        <div class="voltarhome" onclick="voltarHome()"><p>Voltar para home</p></div> `;

    const resultadoscrollintoview = document.querySelector(".resultado");
    resultadoscrollintoview.scrollIntoView();
}