var currentImageIndex = 0;
var images = [
    "img/1.webp",
    "img/2.webp",
    "img/3.webp",
    "img/4.webp",
    "img/5.webp",
    "img/6.webp",
    "img/7.webp",
    "img/8.webp",
    "img/9.webp",
    "img/10.webp",
    "img/11.webp",
    "img/12.webp",
    "img/13.webp",
    "img/14.webp",
    "img/15.webp"
];

// Inicializar com a primeira imagem
$("#largeImage").attr("src", images[currentImageIndex]);

// Variável para rastrear a posição das miniaturas
var thumbnailsScrollLeft = 0;

function changeImage(direction) {
    currentImageIndex += direction;
    if (currentImageIndex < 0) {
        currentImageIndex = images.length - 1;
    } else if (currentImageIndex >= images.length) {
        currentImageIndex = 0;
    }

    var newImageSrc = images[currentImageIndex];
    $("#largeImage").attr("src", newImageSrc);

    // Remover a classe 'active' de todas as miniaturas
    $(".thumbnail").removeClass("active");
    // Adicionar a classe 'active' à miniatura correspondente à imagem grande
    $(".thumbnail").eq(currentImageIndex).addClass("active");

    // Calcular a posição das miniaturas para rolar para a direita
    thumbnailsScrollLeft = currentImageIndex * ($(".thumbnail").width() + 10); // Largura da miniatura + margem
    $(".carousel-thumbnails").animate({ scrollLeft: thumbnailsScrollLeft }, 500);
}

$(document).ready(function() {
    // Quando uma miniatura for clicada
    $(".thumbnail").click(function() {
        // Troca a imagem principal pela imagem da miniatura clicada
        var newImageSrc = $(this).attr("src");
        $("#largeImage").attr("src", newImageSrc);

        // Remove a classe 'active' de todas as miniaturas
        $(".thumbnail").removeClass("active");
        // Adiciona a classe 'active' à miniatura clicada
        $(this).addClass("active");
    });
});