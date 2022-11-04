let respostas =[]
let texto = []
let imagem = []
let perguntas =``
let numerodeperguntas;

function criarperguntas(){
	numerodeperguntas = document.querySelector('.qtdperguntas').value
	console.log(numerodeperguntas)
    let começo = document.querySelector('.criar-inicio')
    começo.classList.remove('exibir')
for(let i=0; i<numerodeperguntas;i++){
	const per = document.querySelector('.criar-perguntas')
	per.innerHTML += `
<div class="pergunta-01"id="p${i+1}">
<div class="pergunta">
  <h1>Pergunta ${i+1}</h1>
  <input type="text" placeholder="Texto da pergunta">
  <div class ="color">
  <input type="text" placeholder="Cor de fundo da pergunta">
  <input type="color" placeholder="Cor de fundo da pergunta">
  </div>
  
</div>
<div class="correta-01">
  <h1>Resposta correta</h1>
  <input type="text" placeholder="Resposta correta">
  <input type="text" placeholder="URL da imagem">
</div>
<div class="incorretas-01">
  <div class="incorreta-01">
	<h1>Respostas incorretas</h1>
	<input type="text" placeholder="Resposta incorreta 1">
	<input type="text" placeholder="URL da imagem 1">
  </div>
  <div class="incorreta-02">
	<input type="text" placeholder="Resposta incorreta 2">
  <input type="text" placeholder="URL da imagem 2">
  </div>
  <div class="incorreta-03">
	<input type="text" placeholder="Resposta incorreta 3">
  <input type="text" placeholder="URL da imagem 3">
  </div>
  
</div>

</div>
`
}
const per = document.querySelector('.criar-perguntas')
per.innerHTML +=`
<div class="button" onclick="criarniveis()">Prosseguir pra criar niveis</div>
`

    let pergunta = document.querySelector('.criar-perguntas')
    pergunta.classList.add('exibir')
	declararcor()
}
function declararcor(){
	let teste = document.querySelector('.color')
	console.log(teste.children[1].value)
	teste.children[0].value = teste.children[1].value
}
setInterval(declararcor,1000)

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





for(i=1 ; i<=numerodeperguntas;i++){

	let addcorreta = `
			{   
				text: 1,
				image: 1,
				isCorrectAnswer: true
			}           
	`
	respostas[i] = respostas[i]+ addcorreta
	for(j=2 ; j<5;j++){
		texto[j]= j;
		imagem [j]= j+1;
		if(texto !== ''&& imagem !==''){
			let adderradas = `
			{   
				text: ${texto[j]},
				image: ${imagem[j]},
				isCorrectAnswer: false
			}           
	`
	respostas[i] = respostas[i]+ adderradas
		}
	}

	let pergunta =`
		{
			title: "Título da pergunta ${i}",
			color: "#123456",
			answers: [
				${respostas[i]} 
			]
		},S
`
perguntas = perguntas + pergunta
}



				
 let exemplo = `
 
 {
	title: "Título do quizz",
	image: "https://http.cat/411.jpg",
	questions: [
		${perguntas}
	],
	levels: [
		{
			title: "Título do nível 1",
			image: "https://http.cat/411.jpg",
			text: "Descrição do nível 1",
			minValue: 0
		},
		{
			title: "Título do nível 2",
			image: "https://http.cat/412.jpg",
			text: "Descrição do nível 2",
			minValue: 50
		}
	]
} `

console.log(exemplo)
console.log(texto)
console.log(imagem)


