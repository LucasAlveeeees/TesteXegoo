// POSTAGEM UNICA

// Encontra qual o endereço que contem a palavra blog
var enderecoSite = document.baseURI;
var verificaEndereco = enderecoSite.indexOf('blog');

var body = document.querySelector('body');
var anuncios = document.querySelector('.anuncios');
var artigoPost = document.querySelector('.artigo-post');
var modalAnunciosCel = document.querySelector('.anuncios-cel > div > div');
var anunciosCel = document.querySelector('.anuncios-cel');
var fundoAnunciosCel = document.querySelector('.fundo-anuncios-cel');
var buttonNewsletterCel = document.querySelector('#newsletter-modal-cel article > div > button');

if ((body.clientWidth <= 991)) {

    if ((anuncios != null) && (artigoPost != null)) {
        anuncios.setAttribute('class', 'd-none anuncios');
        artigoPost.setAttribute('class', 'artigo-post-cel');
    }

    setTimeout(() => {
        if (anunciosCel != null) {
            anunciosCel.setAttribute('class', 'd-flex anuncios-cel');
            anunciosCel.setAttribute('style', '');
            fundoAnunciosCel.setAttribute('style', 'background-color: #00000046; z-index: 1002 !important;');
        }
    }, 20000);

} else {

    if ((anuncios != null) && (artigoPost != null)) {
        anuncios.setAttribute('class', 'd-flex anuncios');
        artigoPost.setAttribute('class', 'artigo-post');
    }

    if (anunciosCel != null) {
        anunciosCel.setAttribute('class', 'd-none anuncios-cel');
        fundoAnunciosCel.setAttribute('class', 'fundo-anuncios-cel');
    }

}

window.addEventListener('resize', (e) => {

    var widthScreen = body.clientWidth;

    if (widthScreen <= 991) {

        if ((anuncios != null) && (artigoPost != null)) {
            anuncios.setAttribute('class', 'd-none anuncios');
            artigoPost.setAttribute('class', 'artigo-post-cel');
        }

    } else {

        if ((anuncios != null) && (artigoPost != null)) {
            anuncios.setAttribute('class', 'd-flex anuncios');
            artigoPost.setAttribute('class', 'artigo-post');
        }

        if (anunciosCel != null) {
            anunciosCel.setAttribute('class', 'd-none anuncios-cel');
        }

    }

    // Ocultando visualização do form para celular quando for para computador ou vise-verso.
    if ((widthScreen <= 991)) {
        if (anunciosCel != null) {
            anunciosCel.setAttribute('class', 'd-flex anuncios-cel');
            anunciosCel.removeAttribute('style');
            fundoAnunciosCel.setAttribute('style', 'background-color: #00000046; z-index: 1002 !important;');
        }
    }

});

function clickParaSair(element, naoFechar) {
    element.addEventListener('click', () => {
        element.setAttribute('style', 'display: none !important;');
        naoFechar.setAttribute('style', 'display: none !important;');
    });

    naoFechar.addEventListener('click', () => {
        naoFechar.setAttribute('style', 'display: flex !important;');
    });
}

if (anunciosCel != null) {
    clickParaSair(fundoAnunciosCel, anunciosCel);
}

function clickButtonNewsletterCel() {
    if (anunciosCel != null) {
        fundoAnunciosCel.setAttribute('style', 'background-color: #00000046; z-index: 1002 !important;');
    }

    setTimeout(() => {
        anunciosCel.setAttribute('class', 'd-flex anuncios-cel');
        anunciosCel.setAttribute('style', 'display: flex;');
    }, 100);

    artigoPost.setAttribute('class', 'artigo-post-cel');
}

// /POSTAGEM UNICA

// Conteudo convertido para HTML

var conteudoPostUnico = document.querySelector('#banner-postagem article .conteudo');

if (conteudoPostUnico) {
    conteudoPostUnico.innerHTML = conteudoPostUnico.textContent;
}

// /Conteudo convertido para HTML

// Responsividade em imagens do conteudo

var conteudoImage = document.querySelectorAll('.conteudo p img');

conteudoImage.forEach(e => {
    e.setAttribute('style', 'max-width: 1296px !important; width: 100%;');
});

// /Responsividade em imagens do conteudo