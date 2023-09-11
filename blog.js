// HOME-BLOG

    var conteudo = document.querySelectorAll('.conteudo-postagem');
    var categorias = document.querySelectorAll('.categorias a');

    categorias.forEach((element) => {
        element.getAttribute("href").replace(' ', '-');
    })

    function elementConteudos(){
        conteudo.forEach((elementos) => {
            //Limitando TODOS(all) os conteudos para ter somente 200 caracteres

            if(elementos.innerHTML.length > 200) {
                elementos.innerHTML = elementos.innerHTML.substr(0,200)+"..."
            }
            // Fim

            var conteudoHtml = elementos.textContent;
            var conteudo = elementos;

            conteudo.innerHTML = conteudoHtml;
        })

    }

    elementConteudos();

    //Botão de Ver mais itens na tela
    $('.btn-ver-mais').click(function() {
        $('.postagens > a:hidden').slice(0,6).show();
        if($('.postagens > a').length == $('.postagens > a:visible').length) {
            $(this).addClass('disable');
        }

        if($('.postagens > a').length <= $('.postagens > a:visible').length) {
            $('.btn-ver-mais').css("display", "none");
        }
    });

    if($('.postagens > a .postagem').length <= $('.postagens > a .postagem:visible').length) {
        $('.btn-ver-mais').css("display", "none");
    }

    

// /HOME-BLOG

// VIDEO-BLOG

    var video = document.querySelector('#video-blog');

    if (document.querySelector('[name="pause"]') != null) {
        document.querySelector('[name="pause"]').style.display = "none"
    }

    const play = (e) => {
        if(video.paused){
            document.querySelector('[name="pause"]').style.display = "none"
            document.querySelector('[name="play"]').style.display = "block"
            document.querySelector('[name="play"]').style.transition = "opacity .5s"
            document.querySelector('[name="play"]').style.opacity = "0"
            video.style.opacity = "100%"
            video.play()
        }
        else{
            document.querySelector('[name="pause"]').style.display = "block"
            document.querySelector('[name="play"]').style.display = "none"
            document.querySelector('[name="pause"]').style.transition = "opacity .5s"
            video.style.opacity = "50%"
            video.pause()
        }
    }

    const fullScreen = (e) => {
        e.preventDefault();
        video.requestFullscreen();
        video.style.opacity = "100%"
        document.querySelector('[name="pause"]').style.display = "none"
    }

// /VIDEO-BLOG

// POSTAGENS

function scrollTo(e) {
    document.querySelector(e).scrollIntoView({behavior: "smooth"});
};

if (document.querySelector('.to-top') != null) {
    document.querySelector('.to-top').addEventListener('click', function(event) {
        event.preventDefault();

        scrollTo(".navbar");
});
}

// POSTAGENS

function scrollTo(e) {
    document.querySelector(e).scrollIntoView({behavior: "smooth"});
};

if (document.querySelector('.to-top') != null) {
    document.querySelector('.to-top').addEventListener('click', function(event) {
        event.preventDefault();

        scrollTo("#banner-postagem")
    });
}

// /POSTAGENS

// Enviar Formulário sem redirecionamento

var nomeNews = document.querySelector('#nome').value;
var emailNews = document.querySelector('#email').value;
var botaoFormNews = document.querySelector('#newsletter-blog .submitForm');

function validateEmail(email) 
                {
                    var re = /\S+@\S+\.\S+/;
                    return re.test(email);
                }

var emailNewsValidado = validateEmail(emailNews);

class FormSubmit {
    constructor(settings) {
        this.settings = settings;
        this.form = document.querySelector(settings.form);
        this.formButton = document.querySelector(settings.button);
        if (this.form) {
            this.url = this.form.getAttribute("action");
        }
        this.sendForm = this.sendForm.bind(this);
    }

    displaySuccess() {
        this.form.innerHTML = this.settings.success;
    }

    displayError() {
        this.form.innerHTML = this.settings.error;
    }

    getFormObject() {
        const formObject = {};
        const fields = this.form.querySelectorAll("[name]");
        fields.forEach((field) => {
            formObject[field.getAttribute("name")] = field.value;
        });

        return formObject;
    }

    onSubmission(event) {

        event.preventDefault();
        event.target.disabled = true;
        event.target.setAttribute('class', 'submitForm diminButtonForm retirandoAtributos d-flex align-items-center justify-content-center');
        event.target.innerHTML = "<i class='bx bxs-check-circle bx-tada bx-md' style='color:#ffc000' ></i>";

        event.target.setAttribute('style', 'padding: 0 !important;');

        setTimeout(() => {
            event.target.innerHTML = "<i class='bx bxs-check-circle bx-tada bx-md mb-4' style='color:#ffc000;' ></i>";
        }, 250)

        setTimeout(() => {
            event.target.setAttribute('style', 'padding: 0 !important; background-color: transparent;');
        }, 700);
    }

    async sendForm(event) {
        try {

            var nomeNewslatter = this.form.querySelectorAll("[name]")[0];
            var emailNewslatter = this.form.querySelectorAll("[name]")[1];

            if (nomeNewslatter.value.length >= 3 || nomeNewslatter.value != null || nomeNewslatter.value != undefined || nomeNewslatter.value == "" ||
                emailNewslatter.value != null || emailNewslatter.value != undefined || emailNewslatter.value == "") {
            
                this.onSubmission(event);
                await fetch(this.url, {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                        Accept: "application/json",
                    },
                    body: JSON.stringify(this.getFormObject()),
                });

            }

        } catch (error) {
            this.displayError();
            throw new Error(error);
        }
    }

    init() {
        if (this.form) {
            this.formButton.addEventListener("click", this.sendForm);
        }
        return this;
    }
}

const formSubmit = new FormSubmit({
    form: "[data-form]",
    button: "[data-button]",
    success: "<button type='submit' class='submitForm diminButtonForm' data-button>Enviando...</button>",
    error: "<p class='error'>Não foi possível enviar sua mensagem. <br>Atualize a sua página ou tente mais tarde.</p>",
});
formSubmit.init();


// /Enviar Formulário sem redirecionamento

// Envio do IP Usuário

fetch('https://ipapi.co/ip/')
.then(function(response) {
    response.text().then(txt => {
        let ip = txt;

        console.log(ip)

        document.querySelector('#ip').setAttribute('value', ip);
    });
})
.catch(function(error) {
    console.log(error)
});

// /Envio do IP Usuário