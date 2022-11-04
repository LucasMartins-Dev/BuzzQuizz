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
  <input id="text-p${i}"type="text" placeholder="Texto da pergunta">
  <div class ="color"id="${i}">
  <input type="text" placeholder="Cor de fundo da pergunta">
  <input type="color" placeholder="Cor de fundo da pergunta">
  <div onclick= "declararcor()">OK</div>
  </div>
  
</div>
<div class="correta-01">
  <h1>Resposta correta</h1>
  <input id="resposta-correta${i}"type="text" placeholder="Resposta correta">
  <input id="url-correta${i}"type="text" placeholder="URL da imagem">
</div>
<div class="incorretas-01">
  <div class="incorreta-01">
	<h1>Respostas incorretas</h1>
	<input id="resposta1-incorreta${i}" type="text" placeholder="Resposta incorreta 1">
	<input id="url1-incorreta${i}"type="text" placeholder="URL da imagem 1">
  </div>
  <div class="incorreta-02">
	<input id="resposta2-incorreta${i}" type="text" placeholder="Resposta incorreta 2">
  <input id="url2-incorreta${i}"type="text" placeholder="URL da imagem 2">
  </div>
  <div class="incorreta-03">
	<input id="resposta3-incorreta${i}" type="text" placeholder="Resposta incorreta 3">
  <input id="url3-incorreta${i}"type="text" placeholder="URL da imagem 3">
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
	for(i=0;i<numerodeperguntas;i++){
		let teste = document.getElementById(i)
	console.log(teste.children[1].value)
	teste.children[0].value = teste.children[1].value	
	}
	
}


function criarniveis(){
	
	let txt_pergunta = []
	let color_pergunta = []
	let correct_txt = []
	let correct_img = []
	let incorrect1_txt = []
	let incorrect1_img = []
	let incorrect2_txt = []
	let incorrect2_img = []
	let incorrect3_txt = []
	let incorrect3_img = []
	for(i=0;i<numerodeperguntas;i++){
		 txt_pergunta[i]=document.getElementById('text-p'+i)
		 txt_pergunta[i]=txt_pergunta[i].value
		 console.log(txt_pergunta)
		 color_pergunta[i]=document.getElementById(i)
		 color_pergunta[i] = color_pergunta[i].children[0].value
		 console.log(color_pergunta)
		 correct_txt[i]=document.getElementById('resposta-correta'+i)
		 correct_txt[i]=correct_txt[i].value
		 console.log(correct_txt)
		 correct_img[i]=document.getElementById('url-correta'+i)
		 correct_img[i]= correct_img[i].value
		 console.log(correct_img)
		 incorrect1_txt[i]=document.getElementById('resposta1-incorreta'+i)
		 incorrect1_txt[i]=incorrect1_txt[i].value
		 console.log(incorrect1_txt)
		 incorrect1_img[i]=document.getElementById('url1-incorreta'+i)
		 incorrect1_img[i]= incorrect1_img[i].value
		 console.log(incorrect1_img)
		 incorrect2_txt[i]=document.getElementById('resposta2-incorreta'+i)
		 incorrect2_txt[i]=incorrect2_txt[i].value
		 console.log(incorrect2_txt)
		 incorrect2_img[i]=document.getElementById('url2-incorreta'+i)
		 incorrect2_img[i]=incorrect2_img[i].value
		 console.log(incorrect2_img)
		 incorrect3_txt[i]=document.getElementById('resposta3-incorreta'+i)
		 incorrect3_txt[i]= incorrect3_txt[i].value
		 console.log(incorrect3_txt)
		 incorrect3_img[i]=document.getElementById('url3-incorreta'+i)
		 incorrect3_img[i]= incorrect3_img[i].value
		 console.log(incorrect3_img)
	}
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




