let respostas =[]
let texto = []
let imagem = []
let perguntas =[]

let titulodoquizz;
let urlimagemdoquizz;
let numerodeperguntas;
let numerodeniveis;
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
let leveis = []
let titulolevel = []
let imglevel = []
let desclevel = []
let valorlevel = []
let titulonivel = []
let acertominimo = []
let urlimgnivel = []
let descrinivel = []
let level={}

function criarperguntas(){
	
	let cont = 0;
	titulodoquizz = document.querySelector('.tituloquizz').value
	if(titulodoquizz.length >= 20 && titulodoquizz.length <= 65){
		cont++
	}else{
		alert('Titulo de 20 a 65 caracteres')
	}
	urlimagemdoquizz = document.querySelector('.urlquizz').value

	let regex = new RegExp("^(http[s]?:\\/\\/(www\\.)?|ftp:\\/\\/(www\\.)?|www\\.){1}([0-9A-Za-z-\\.@:%_\+~#=]+)+((\\.[a-zA-Z]{2,3})+)(/(.)*)?(\\?(.)*)?");

if(regex.test(urlimagemdoquizz)){
	cont++
}else{
  alert('Url incorreta')
}
	numerodeperguntas = document.querySelector('.qtdperguntas').value
	if(numerodeperguntas>=3){
		cont++
	}else{
		alert('No minimo 3 perguntas')
	}
	numerodeniveis = document.querySelector('.qtdniveis').value
	if(numerodeniveis>=2){
		cont++
	}else{
		alert('No minimo 2 niveis')
	}
	if(cont === 4){  
for(let i=0; i<numerodeperguntas;i++){
	const per = document.querySelector('.criar-perguntas')
	per.innerHTML += `
<div class="pergunta-01"id="p${i+1}">
<div class="pergunta">
  <h1>Pergunta ${i+1}</h1>
  <input id="text-p${i}"type="text" placeholder="Texto da pergunta">
  <div class ="color"id="${i}">
  <input type="text" placeholder="Cor de fundo da pergunta"disabled ="">
  <input type="color">
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

	let começo = document.querySelector('.criar-inicio')
	começo.classList.remove('exibir')
    let pergunta = document.querySelector('.criar-perguntas')
    pergunta.classList.add('exibir')
	declararcor()
}


}
function declararcor(){
	for(i=0;i<numerodeperguntas;i++){
		let teste = document.getElementById(i)
	console.log(teste.children[1].value)
	teste.children[0].value = teste.children[1].value	
	}
	
}


function criarniveis(){
	let conti = 0;
	let regex = new RegExp("^(http[s]?:\\/\\/(www\\.)?|ftp:\\/\\/(www\\.)?|www\\.){1}([0-9A-Za-z-\\.@:%_\+~#=]+)+((\\.[a-zA-Z]{2,3})+)(/(.)*)?(\\?(.)*)?");
	
	for(i=0;i<numerodeperguntas;i++){
		 txt_pergunta[i]=document.getElementById('text-p'+i)
		 txt_pergunta[i]=txt_pergunta[i].value
		 if(txt_pergunta[i].length >= 20){
			conti++
		}else{
			alert('Titulo da pergunta'+i+' de 20 a 65 caracteres')
		}
		 color_pergunta[i]=document.getElementById(i)
		 color_pergunta[i] = color_pergunta[i].children[0].value
		 console.log(color_pergunta)
		 correct_txt[i]=document.getElementById('resposta-correta'+i)
		 correct_txt[i]=correct_txt[i].value
		 if(correct_txt[i] !== ''){
			conti++
		}else{
			alert('Texto da pergunta'+(i+1)+'-resposta correta estão errados.')
		}
		 correct_img[i]=document.getElementById('url-correta'+i)
		 correct_img[i]= correct_img[i].value
		 if(regex.test(correct_img[i])){
			conti++
		}else{
		  alert('Url da pergunta'+(i+1)+'-resposta correta estão errados.')
		}
		 incorrect1_txt[i]=document.getElementById('resposta1-incorreta'+i)
		 incorrect1_txt[i]=incorrect1_txt[i].value
		 if(incorrect1_txt[i] !== ''){
			conti++
		}else{
			alert('Texto da pergunta'+(i+1)+'-resposta incorreta1 estão errados.')
		}
		 incorrect1_img[i]=document.getElementById('url1-incorreta'+i)
		 incorrect1_img[i]= incorrect1_img[i].value
		 if(regex.test(incorrect1_img[i])){
			conti++
		}else{
		  alert('Url da pergunta'+(i+1)+'-resposta incorreta1 estão errados.')
		}
		 incorrect2_txt[i]=document.getElementById('resposta2-incorreta'+i)
		 incorrect2_txt[i]=incorrect2_txt[i].value
		 incorrect2_img[i]=document.getElementById('url2-incorreta'+i)
		 incorrect2_img[i]=incorrect2_img[i].value
		 if(regex.test(incorrect2_img[i])||(incorrect2_img[i] ==='' && incorrect2_txt[i]==='')){
			conti++
		}else{
		  alert('Url ou texto da pergunta'+(i+1)+'-resposta incorreta2 estão errados.')
		}
		 incorrect3_txt[i]=document.getElementById('resposta3-incorreta'+i)
		 incorrect3_txt[i]= incorrect3_txt[i].value
		 incorrect3_img[i]=document.getElementById('url3-incorreta'+i)
		 incorrect3_img[i]= incorrect3_img[i].value
		 if(regex.test(incorrect3_img[i])||(incorrect3_img[i] === '' && incorrect3_txt[i]=== '')){
			conti++
		}else{
		  alert('Url ou texto da pergunta'+(i+1)+'-resposta incorreta3 estão errados.')
		}
		
	}
	if(conti === numerodeperguntas*7){
	

	for(i=0;i<numerodeniveis;i++){
		const lvl = document.querySelector('.criar-niveis')
	lvl.innerHTML += `
	<div class="nivel-01">
	<h1>Nivel ${i+1}</h1>
	<input id="titulonivel${i}" type="text" placeholder="Título do nível">
	<input id="acertominimo${i}" type="text" placeholder="% de acerto mínima">
	<input id="urlimgnivel${i}" type="text" placeholder="URL da imagem do nível">
	<input id="descrinivel${i}" type="text" placeholder="Descrição do nível">
  </div>
	`
	}
	const lvl = document.querySelector('.criar-niveis')
	lvl.innerHTML+=`
	<div class="button" onclick="finalizarquizz()">Finalizar Quizz</div>
	`
		let perguntas = document.querySelector('.criar-perguntas')
    perguntas.classList.remove('exibir')
    let niveis = document.querySelector('.criar-niveis')
    niveis.classList.add('exibir')
	}
    
}


function finalizarquizz(){
	let regex = new RegExp("^(http[s]?:\\/\\/(www\\.)?|ftp:\\/\\/(www\\.)?|www\\.){1}([0-9A-Za-z-\\.@:%_\+~#=]+)+((\\.[a-zA-Z]{2,3})+)(/(.)*)?(\\?(.)*)?");
	let conti = 0
	for(i=0;i<numerodeniveis;i++){
		titulonivel[i]=document.getElementById('titulonivel'+i)
		 titulonivel[i]=titulonivel[i].value
		 if(titulonivel[i].length >= 10){
			conti++
		}else{
			alert('No minimo 10 caracteres')
		}
		 acertominimo[i]=document.getElementById('acertominimo'+i)
		 acertominimo[i] = acertominimo[i].value
		 if(i===0){
			if(acertominimo[i]==0){
				conti++
			}else{
				alert('O primeiro acerto minimo deve ser zero')
			}
		 }else if(acertominimo[i]>=0 && acertominimo[i]<=100 ){
			conti++
		}else{
			alert('% de acerto do nivel '+(i+1)+' deve estar entre 0 e 100')
		}
		 urlimgnivel[i]=document.getElementById('urlimgnivel'+i)
		 urlimgnivel[i]=urlimgnivel[i].value
		  if(regex.test(urlimgnivel[i])){
			conti++
		}else{
		  alert('Url do nivel '+(i+1)+'esta errado.')
		}
		 descrinivel[i]=document.getElementById('descrinivel'+i)
		 descrinivel[i]= descrinivel[i].value
		 if(descrinivel[i].length >= 30){
			conti++
		}else{
			alert('Descrição do nivel '+(i+1)+' com no minimo 30 caracteres')
		}
	}
	if (conti === numerodeniveis*4 ){
		cadastrarquizz()
		$('.quizz-finalizado').css({'background-image': 'linear-gradient(180deg, rgba(255, 255, 255, 0) 0%, rgba(0, 0, 0, 0.5) 70%, #000000 100%),url('${urlimagemdoquizz}');'});
		let finalizado = document.querySelector('.finalizar-quizz')
		finalizado.innerHTML +=`
		<div class="tittle">Seu quizz está pronto!</div>
    <div class="quizz-finalizado">
      <img src="${urlimagemdoquizz}">
	  <h1>${titulodoquizz}</h1>
  </div>
    <div class="button">Acessar Quizz</div>
    <a href="listadequiz.html"><h2>Voltar pra home</h2></a>
	`
		let niveis = document.querySelector('.criar-niveis')
		niveis.classList.remove('exibir')
		let finalizar = document.querySelector('.finalizar-quizz')
		finalizar.classList.add('exibir')
	}
	impremi()
}




function IsUrl(url){
    var regex = new RegExp("^(http[s]?:\\/\\/(www\\.)?|ftp:\\/\\/(www\\.)?|www\\.){1}([0-9A-Za-z-\\.@:%_\+~#=]+)+((\\.[a-zA-Z]{2,3})+)(/(.)*)?(\\?(.)*)?");

if(regex.test(url)){
	alert('Url correta')
}else{
  alert('Url incorreta')
}}





function cadastrarquizz(){
	let aux;
	
	for(i=0; i<numerodeperguntas;i++){
		let answers = []
		let pergunta = {}
	aux = numerodeperguntas - 1 ;
	console.log(aux)

		
		answers.push({   
			text: correct_txt[i],
			image: correct_img[i],
			isCorrectAnswer: true
		})
		answers.push({   
			text: incorrect1_txt[i],
			image: incorrect1_img[i],
			isCorrectAnswer: false
		})
		
			
			if(incorrect2_txt[i] !== ''&& incorrect2_img[i]!==''){
			answers.push({   
			text: incorrect2_txt[i],
			image: incorrect2_img[i],
			isCorrectAnswer: false
				})
		
			}
			if(incorrect3_txt[i] !== ''&& incorrect3_img[i]!==''){
				answers.push({   
					text: incorrect3_txt[i],
					image: incorrect3_img[i],
					isCorrectAnswer: false
				})
		
			}
		
			
		
	
		  pergunta = {
			title: txt_pergunta[i],
			color: color_pergunta[i],
			answers: answers
		}
		
	perguntas.push(pergunta)
	}
let auxi;
	for(i=0;i<numerodeniveis;i++){
		auxi = numerodeniveis-1;
		if(auxi !== i){
			level={
				title:  titulonivel[i],
				image: urlimgnivel[i],
				text: descrinivel[i],
				minValue: acertominimo[i]
			}
		}
		
		leveis.push(level)
	}

}







function impremi(){
	console.log(titulodoquizz)
	let envio = axios.post("https://mock-api.driven.com.br/api/v4/buzzquizz/quizzes",{
		title: titulodoquizz,
		image: urlimagemdoquizz,
		questions: perguntas,
		levels: leveis
	})
	envio.then(receberdoserver);
}
let responseserver = []
let responser = []
function receberdoserver(response){
	const listaSerializada = localStorage.getItem("listasz"); // Pegando de volta a string armazenada na chave "lista"
	let datadoquiz = responde.data;
	localStorage.setItem('idlocal', datadoquiz);
	if(listaSerializada!== null){
		responseserver = JSON.parse(listaSerializada); // Transformando a string de volta na array original
	console.log(response.data)
responseserver.push(response.data)
const exemploSerializado = JSON.stringify(responseserver); // Array convertida pra uma string

localStorage.setItem("listasz", exemploSerializado); // Armazenando a string na chave "lista" do Local Storage
	}else{
		responseserver.push(response.data)
const exemploSerializado = JSON.stringify(responseserver); // Array convertida pra uma string

localStorage.setItem("listasz", exemploSerializado); // Armazenando a string na chave "lista" do Local Storage
	}

}

