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

function abrirlightbox(element){
    var lightbox = document.getElementById("lightbox");
    var lightbox_img = document.getElementById("lightbox-img");

    lightbox_img.src = element.src;
    lightbox.style.display = "flex";
} 


function fecharlightbox() {
    document.getElementById("lightbox").style.display = "none";
}