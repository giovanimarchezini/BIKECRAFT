const links = document.querySelectorAll(".header-menu a");


function ativarlink(link) {
    const url = location.href;
    const href = link.href;

    url.includes

    if (url.includes(href)) {
        link.classList.add('ativo');
    }
}



links.forEach(ativarlink);

//ativar itens do orçamento


const parametros = new URLSearchParams(location.search);


function ativarproduto(parametro) {
    const elemento = document.getElementById(parametro);

    if (elemento) {
        elemento.checked = true;
    }
}


parametros.forEach(ativarproduto);


//perguntas frequentes

const perguntas = document.querySelectorAll('.perguntas button');



function ativarpergunta(event) {
    const pergunta = event.currentTarget;
    const controls = pergunta.getAttribute('aria-controls');
    const resposta = document.getElementById(controls);


    resposta.classList.toggle("ativa");
    const ativa = resposta.classList.contains("ativa");
    pergunta.setAttribute('aria-expanded', ativa);


}

function eventosperguntas(pergunta) {
    pergunta.addEventListener("click", ativarpergunta);
}


perguntas.forEach(eventosperguntas);


const galeria = document.querySelectorAll('.bicicleta img'); /*Variavel para selecionar as imagens dentro da classe bicicleta*/
const galeriacontainer = document.querySelector('.bicicleta-imagem');/*Variavel para selecionar a div com a classe bicicleta*/


function trocarimagem(event) /*Função para trocar a imagem com o click*/ {
    const img = event.currentTarget; /*define que a variavel imagem é igual ao current-target*/ 
    galeriacontainer.prepend(img) /*prepend() insere o conteúdo especificado no início dos elementos selecionados.*/ 
    console.log(img);
}

function eventosgaleria(img) { /*Função que define o tipo de evento*/ 
    img.addEventListener('click', trocarimagem); /*Adicionando o evento á função que troca a imagem*/ 
}

galeria.forEach(eventosgaleria);/*loop na função do evento*/ 
 console.log();
