let todosquiz = document.querySelector(".quizesserver");
let a;
let quizescriados = localStorage.getItem('idlocal');
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
    for(let i = 0; i < meusquizes.length; i++){
        todosquiz.innerHTML +=  `<div class="quiz-02" onclick="redirecionar(${meusquizes[i].id})"><p class="nomequiz">
        ${meusquizes[i].title}</p>
        <img class="imgquizes" src="${meusquizes[i].image}">
    </div>`;
    }
}
