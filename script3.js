let todosquiz = document.querySelector(".quizesserver");
let a;
let quizescriadosz = localStorage.getItem('listaquizz');
let quizescriados = JSON.parse(quizescriadosz)
let meusquizes = document.querySelector(".meusquizes");
buscarQuizes();
carregarMeusquizes();
function redirecionar(id){
    localStorage.setItem('id', id);
    window.location.href = "paginadoquiz.html";
}
function buscarQuizes() {
    let pegando = axios.get(`https://mock-api.driven.com.br/api/v4/buzzquizz/quizzes/`);
    pegando.then(carregarQuizes);

}

function carregarQuizes(quizes) {
    a = quizes.data;
    for(let i = 0; i < a.length; i++){
        todosquiz.innerHTML +=  `<div class="quiz-02" onclick="redirecionar(${a[i].id})"><p class="nomequiz">
        ${a[i].title}</p>
        <img class="imgquizes" src="${a[i].image}">
    </div>`;
    }

}

function carregarMeusquizes() {
    if (quizescriados === null){
       let mq = document.querySelector('.tituloseus')
       mq.classList.remove('aparece')
       let smq = document.querySelector('.semquizz')
       smq.classList.add('aparece')
    }
    else{
    for(let i = 0; i < quizescriados.length; i++){
        meusquizes.innerHTML +=  `<div class="quiz-02" onclick="redirecionar(${quizescriados[i].id})"><p class="nomequiz">
        ${quizescriados[i].title}</p>
        <img class="imgquizes" src="${quizescriados[i].image}">
    </div>`;
    }
}
}
