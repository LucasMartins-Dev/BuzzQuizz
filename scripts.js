let respostas =[]
let texto = []
let imagem = []
let perguntas =``
let titulodoquizz;
let urlimagemdoquizz;
let numerodeperguntas;
let numerodeniveis;


function criarperguntas(){
	titulodoquizz = document.querySelector('.tituloquizz').value
	urlimagemdoquizz = document.querySelector('.urlquizz').value
	numerodeperguntas = document.querySelector('.qtdperguntas').value
	numerodeniveis = document.querySelector('.qtdniveis').value
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
function criarniveis(){
	
	
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
	cadastrarquizz()
	gerarexemplo()
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










function cadastrarquizz(){
	

	for(i=0; i<numerodeperguntas;i++){
	

		let addcorreta = `
				{   
					text: ${correct_txt[i]},
					image: ${correct_img[i]},
					isCorrectAnswer: true
				}           
		`
		respostas[i] = addcorreta
		
			if(incorrect1_txt[i] !== ''&& incorrect1_img[i]!==''){
				let adderradas = `
				{   
					text: ${incorrect1_txt[i]},
					image: ${incorrect1_img[i]},
					isCorrectAnswer: false
				}           
		`
		respostas[i] = respostas[i]+ adderradas
			}
			if(incorrect2_txt[i] !== ''&& incorrect2_img[i]!==''){
				let adderradas2 = `
				{   
					text: ${incorrect2_txt[i]},
					image: ${incorrect2_img[i]},
					isCorrectAnswer: false
				}           
		`
		respostas[i] = respostas[i]+ adderradas2
			}
			if(incorrect3_txt[i] !== ''&& incorrect3_img[i]!==''){
				let adderradas3 = `
				{   
					text: ${incorrect3_txt[i]},
					image: ${incorrect3_img[i]},
					isCorrectAnswer: false
				}           
		`
		respostas[i] = respostas[i]+ adderradas3
			}
		
	
		let pergunta =`
			{
				title: ${txt_pergunta[i]},
				color: ${color_pergunta[i]},
				answers: [
					${respostas[i]} 
				]
			},
	`
	perguntas = perguntas + pergunta
	}
	console.log(perguntas)
}



function gerarexemplo(){
	let exemplo = `
 
	{
	   title: ${titulodoquizz},
	   image: ${urlimagemdoquizz},
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
   
   
}
				
 