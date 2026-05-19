function mudarTema() {
    var body = document.body;
    if (body.classList.contains("claro")) {
        body.classList.remove("claro");
        body.classList.add("escuro");
    } else {
        body.classList.remove("escuro");
        body.classList.add("claro");
    }
}

function abrirlightbox(element) {
    var lightbox = document.getElementById("lightbox");
    var lightbox_img = document.getElementById("lightbox-img");

    lightbox_img.src = element.src;
    lightbox.style.display = "flex";
}


function fecharlightbox() {
    document.getElementById("lightbox").style.display = "none";
}


function exbir_noticias() {
    const section = document.getElementById("noticias");
    var noticias = [
        {
            imagem: "../img/Play_Tv.png",
            titulo: "TI",
            descricao: "Sob essa perspectiva, a articulação entre os diferentes níveis institucionais talvez venha a ressaltar a relatividade do retorno esperado a longo prazo. Conforme apontado por diversos estudos, a consulta aos diversos militantes auxilia a preparação e a composição das posturas dos órgãos dirigentes com relação às suas atribuições. Assim mesmo, a estrutura atual da organização ressalta a relevância da participação ativa da gestão inovadora da qual fazemos parte",
            link: "http://127.0.0.1:5500/html/noticia.html"
        },
        {
            imagem: "../img/Sexta-feira.jpg",
            titulo: "Play TV",
            descricao: "Neste sentido, a utilização racional de ativos intangíveis acarreta um processo de reformulação e modernização da gestão inovadora da qual fazemos parte. O incentivo ao avanço tecnológico, assim como a revolução dos costumes cumpre um papel essencial na formulação das novas proposições. À luz dos acontecimentos recentes, a valorização da diversidade de pensamento estende o alcance e a importância do fluxo de informações. Acima de tudo, é fundamental ressaltar que o consenso sobre a necessidade de qualificação ilustra as tensões entre tradição e inovação dos conhecimentos estratégicos para atingir a excelência.",
            link: "http://127.0.0.1:5500/html/noticia.html"
        }
    ];

    var html = "";
    noticias.forEach(noticia => {
        html += `
         <article class="noticia">
            <img src="${noticia.imagem}" onclick="abrirlightbox(this)" alt="${noticia.titulo}"> 
            <h2>${noticia.titulo} </h2>
            <p>${noticia.descricao}</p>
            <a href="${noticia.link}">Leia mais...</a>
        </article>
        `
    });

    section.innerHTML = html;

}

function mudar_titulo(element) {
    element.innerText = "Sexta-feira";

}

