


// Formulario ATT
    var select = document.querySelector('select');
    var cnpj = document.querySelector('input#cnpj');
    var cnpjdiv = document.querySelector('.cnpjdiv');
    var preRequisitos = document.querySelector('#preRequisitos')

    var opcaocnpj = document.querySelector('.opcaocnpj')

    var cpf = document.querySelector('#cpf')
    var cpfdiv = document.querySelector('.cpfdiv');

    function txtBoxFormat(strField, sMask, evtKeyPress) {
        var i, nCount, sValue, fldLen, mskLen,bolMask, sCod, nTecla;
    
        if(document.all) { // Internet Explorer
            nTecla = evtKeyPress.keyCode;
        }
        else if(document.layers) { // Nestcape
            nTecla = evtKeyPress.which;
        }
        else if(document.getElementById) { // FireFox
            nTecla = evtKeyPress.which;
        }
    
        if (nTecla != 8) {
    
        sValue = document.getElementById(strField).value;
    
        // Limpa todos os caracteres de formatação que
        // já estiverem no campo.
        sValue = sValue.toString().replace( "-", "" );
        sValue = sValue.toString().replace( "-", "" );
        sValue = sValue.toString().replace( ".", "" );
        sValue = sValue.toString().replace( ".", "" );
        sValue = sValue.toString().replace( "/", "" );
        sValue = sValue.toString().replace( "/", "" );
        sValue = sValue.toString().replace( "(", "" );
        sValue = sValue.toString().replace( "(", "" );
        sValue = sValue.toString().replace( ")", "" );
        sValue = sValue.toString().replace( ")", "" );
        sValue = sValue.toString().replace( " ", "" );
        sValue = sValue.toString().replace( " ", "" );
        sValue = sValue.toString().replace( ":", "" );
        fldLen = sValue.length;
        mskLen = sMask.length;
    
        i = 0;
        nCount = 0;
        sCod = "";
        mskLen = fldLen;
    
        while (i <= mskLen) {
        bolMask = ((sMask.charAt(i) == "-") || (sMask.charAt(i) == ".") || (sMask.charAt(i) == "/"))
        bolMask = bolMask || ((sMask.charAt(i) == "(") || (sMask.charAt(i) == ")") || (sMask.charAt(i) == " "))
        bolMask = bolMask || (sMask.charAt(i) == ":")
    
        if (bolMask) {
        sCod += sMask.charAt(i);
        mskLen++; }
        else {
        sCod += sValue.charAt(nCount);
        nCount++;
        }
    
        i++;
        }
    
        //objForm[strField].value = sCod;
        document.getElementById(strField).value = sCod;
    
        if (nTecla != 8) { // backspace
            if (sMask.charAt(i-1) == "9") { // apenas números...
                return ((nTecla > 47) && (nTecla < 58)); } // números de 0 a 9
            else { // qualquer caracter...
                return true;
            }
        }
        else {
            return true;
        }
        }
    }

    // Atualizações isntantâneas no formulário

    // Correção instantânea dos campos com erro.
    
    //Import dos erros;
    var erros = document.querySelector('.erros');
    var errosCpf = document.querySelector('.cpfErro');
    var errosCnpj = document.querySelector('.cnpjErro');
    var erroNome = document.querySelector('.nomeErro');
    var erroCidade = document.querySelector('.cidadeErro');
    var erroInteresse = document.querySelector('.interesseErro');
    var erroDdd = document.querySelector('.dddErro');
    var erroTelefone = document.querySelector('.telefoneErro');
    var erroEmail = document.querySelector('.emailErro');
    var erroTermo = document.querySelector('.aceiteTermoErro');

    var checkTermo = document.querySelector('.checkTermo');
    if (document.querySelector('#estouInteressadoEm') != null) {
        var selectInteresseValue = document.querySelector('#estouInteressadoEm').value;
    }

    // import inputs
    var nomeInput = document.querySelector('#nome');
    var cidadeInput = document.querySelector('#cidade');
    var cpfInput = document.querySelector('[name="cpf"]');
    var cnpjInput = document.querySelector('[name="cnpj"]');
    var dddInput = document.querySelector('#ddd');
    var telefoneInput = document.querySelector('#telefone');
    var emailInput = document.querySelector('#email');

    function correcaoNome() { $(document).on("input", "#nome", function() {
            let caracteresDigitados = nome.value.length;
            
            if(caracteresDigitados > 2) {
                erroNome.style.display = 'none';
            } else {
                erroNome.style.display = 'block';
                erroNome.style.color = '#ff6600';
            }
        });
    }

    function correcaoCidade() { $(document).on("input", "#cidade", function() {
            let caracteresDigitados = cidade.value.length;

            if(caracteresDigitados > 0) {
                if (erroCidade != null) {
                    erroCidade.style.display = 'none';
                }
            } else {
                if (erroCidade != null) {
                    erroCidade.style.display = 'block';
                    erroCidade.style.color = '#ff6600';
                }
            }
        });
    }

    function correcaoInteresse() {
        if (selectInteresseValue != "Selecione uma das opções") {
            erroInteresse.style.display = 'none';
        } else {
            erroInteresse.style.display = 'block';
            erroInteresse.style.color = '#ff6600';
        }
    }

    if (erroInteresse != null) {  
        var interesseSelect = document.querySelector('#estouInteressadoEm');

        interesseSelect.onchange = correcaoInteresse;
        correcaoInteresse();
    }

    function correcaoCpf() { $(document).on("input", "#cpf", function() {
            let caracteresDigitados = cpfInput.value.length;

            if(errosCpf) {
                if(caracteresDigitados < 1) {
                    errosCpf.style.display = 'block';
                    errosCpf.style.color = '#ff6600';
                } else {
                    errosCpf.style.display = 'none';
                }
            }
        });
    }

    function correcaoCnpj() { $(document).on("input", "#cpf", function() {

            if (cnpjInput) {
                var caracteresDigitadosCnpj = cnpjInput.value.length;
            }

            if(errosCnpj) {
                if(caracteresDigitadosCnpj && caracteresDigitadosCnpj < 1) {
                    errosCnpj.style.display = 'block';
                    errosCnpj.style.color = '#ff6600';
                } else {
                    errosCnpj.style.display = 'none';
                }
            }
        });
    }

    function correcaoDDD() { $(document).on("input", "#ddd", function() {
            let caracteresDigitados = ddd.value.length;
            
            if(caracteresDigitados > 1) {
                erroDdd.style.display = 'none';
            } else {
                erroDdd.style.display = 'block';
                erroDdd.style.color = '#ff6600';
            }
        });
    }

    function correcaoTelefone() { $(document).on("input", "#telefone", function() {
            let caracteresDigitados = telefone.value.length;
            
            if(caracteresDigitados > 7) {
                erroTelefone.style.display = 'none';
            } else {
                erroTelefone.style.display = 'block';
                erroTelefone.style.color = '#ff6600';
            }
        });
    }

    var errosTel = document.querySelectorAll(".errosTel");
    var errosTelChild1 = document.querySelector(".errosTel");

    if (errosTel != null && errosTel.length > 1) {
        errosTelChild1.setAttribute("style", "margin: 0 !important;");
    }

    function correcaoEmail() { $(document).on("input", "#email", function() {
            let caracteresDigitados = email.value.length;

            function validateEmail(email) {
                    var re = /\S+@\S+\.\S+/;
                    return re.test(email);
            }

            if(caracteresDigitados > 0 && validateEmail(email.value) == true){
                erroEmail.setAttribute('style', 'display: none;')
            } else {
                erroEmail.setAttribute('style', 'display: block; color: #ff6600;')
            }
        });
    } 

    if (checkTermo != null) {
        checkTermo.addEventListener('click', function(){
            if(checkTermo.checked) {
                erroTermo.style.display = 'none';
            } else {
                erroTermo.style.display = 'block';
                erroTermo.style.color = '#ff6600';
            }
        });
    }

    if (erroNome != null && nome != null) {
        correcaoNome();
    }
    if (cpfInput != null) {
        correcaoCpf();
    }
    if (cnpjInput != null) {
        correcaoCnpj();
    }
    if (cidadeInput != null) {
        correcaoCidade();
    }
    if (dddInput != null) {
        correcaoDDD();
    }
    if (telefoneInput != null) {
        correcaoTelefone();
    }
    if (emailInput != null) {
        correcaoEmail();
    }

  // Fim Correção instantânea dos campos com erro.

// Mudanças Entre CPF e CNPJ

    var cpf = document.querySelector('.cpfDiv');
    var interesse = document.getElementById("estouInteressadoEm");
    var ondeConheceu = document.querySelector("#porOndeNosConheceu");

    //Função para atualização instantânea de erros nos select(Estou interessado Em | Por Onde nos Conheceu)
    function updateSelectValue() {
        // variavel de erro do select Estou interessado Em
        if (document.querySelector('.interesseErro') != null) {
            var erroInteresse = document.querySelector('.interesseErro');
        }

        //estrutura de condição para saber se o erro do select interesse foi corrigido;
        if (erroInteresse) {
            if (interesse.value !=  "Selecione uma das opções") {
                erroInteresse.setAttribute("style", "display: none;");
            } else if (interesse.value ==  "Selecione uma das opções") {
                erroInteresse.setAttribute("style", "color: #FF6600; font-size: 14px; margin-bottom: 15px;");
            };
        }

        //variável de erro do select Por Onde nos Conheceu
        if (document.querySelector('.interesseErro') != null) {
            var erroOndeConheceu = document.querySelector('.porOndeNosConheceuErro');
        }

        //estrutura de condição para saber se o erro do select ondeConheceu foi corrigido;
        if (erroOndeConheceu) {
            if (ondeConheceu.value !=  "Selecione uma das opções") {
                erroOndeConheceu.setAttribute("style", "display: none;");
            } else if (ondeConheceu.value ==  "Selecione uma das opções") {
                erroOndeConheceu.setAttribute("style", "color: #FF6600; font-size: 14px; margin-bottom: 15px;");
            };
        }

        //Condição para controle dos erros de cpf e cnpj caso o interesse do usuário mude os mesmos(de cpf para cnpj e de cnpj da cpf);
        if (interesse.value == "Correspondente Bancário") {
            var errosCpf = document.querySelector('.cpfErro');

            //mudança do name input cpf para cnpj se for coban
            document.querySelector(".cpfdiv").innerHTML = 'CNPJ*';
            document.getElementById("cpf").setAttribute('name', 'cnpj');
            document.getElementById("cpf").setAttribute('onKeyPress', "return txtBoxFormat(this.id, '99999999999999',event);");
            document.getElementById("cpf").setAttribute('maxlength', '14');

            if (errosCpf) {
                errosCpf.setAttribute('style', 'display: none;');
            }
        } else {
            var errosCnpj = document.querySelector('.cnpjErro');

            document.querySelector(".cpfdiv").innerHTML = 'CPF*';
            document.getElementById("cpf").setAttribute('name', 'cpf');
            document.getElementById("cpf").setAttribute('onKeyPress', "return txtBoxFormat(this.id, '99999999999',event);");
            document.getElementById("cpf").setAttribute('maxlength', '11');

            if (errosCnpj) {
                errosCnpj.setAttribute('style', 'display: none;');
            }
        }
    };

    //aplicando função as variáveis de select 
    if (interesse != null) {
        interesse.onchange = updateSelectValue;
        updateSelectValue();
    }

    if (ondeConheceu != null) {
        ondeConheceu.onchange = updateSelectValue;
        updateSelectValue();
    }

// /Mudanças entre CPF e CNPJ

// /Formulario ATT

// Converter texto dos cartões de postagem
// var conteudoTexto = document.querySelectorAll(".conteudo-postagem");

// conteudoTexto.forEach((e) => {
//     e.innerHTML = e.textContent;
// });

// CONVERT-STRING-TO-HTML

    // var conteudoHtml = document.querySelectorAll('.conteudo').forEach(e => {
    //     var conteudoNaoFormatado = e.textContent;
    //     var conteudo = e;

    //     conteudo.innerHTML = conteudoNaoFormatado;
    // });

    // var conteudoNaoFormatado = document.querySelector('.conteudoNoFormat').textContent;

    // var conteudo = document.querySelector('.conteudo');

    // conteudo.innerHTML = conteudoNaoFormatado;

// /CONVERT-STRING-TO-HTML

// COBAN
    //1
    var tempoCnpjNao = document.querySelector('input#tempocnpjNao');
    var tempoCnpjSim = document.querySelector('input#tempocnpjSim');
    var dadosTempoCnpj = document.querySelector('#dadosTempoCnpj');

    var validadorTempoCnpj = document.querySelector('#validadorTempoCnpj');

    if(tempoCnpjNao) {
        tempoCnpjNao.addEventListener('click', tempoCNPJNAO);
    }

    if(tempoCnpjSim) {
        tempoCnpjSim.addEventListener('click', tempoCNPJSIM);
    }

    function tempoCNPJNAO() {

        choiceNao = tempoCnpjNao.value;

        if(choiceNao == 'Não') {
            validadorTempoCnpj.style.display = 'block';
            dadosTempoCnpj.style.display = 'none';
        } 
        
    }

    function tempoCNPJSIM() {

        choiceSim = tempoCnpjSim.value;
        
        if(choiceSim == 'Sim') {
            validadorTempoCnpj.style.display = 'none';
            dadosTempoCnpj.style.display = 'block';
            //ramoAtuacao.style.display = 'block';
        } 

    }

    //2
    var MEI = document.querySelector('input#MEI');
    var ME = document.querySelector('input#ME');
    var LTDA = document.querySelector('input#LTDA');
    var EPP = document.querySelector('input#EPP');

    var validadorMEI = document.querySelector('#validadorMEI');
    var restricao = document.querySelector('#restricao')

    if (MEI != null) {
        MEI.addEventListener('click', SimMEI);
    }

    if (ME != null) {
        ME.addEventListener('click', NaoMEI);
    }

    if (LTDA != null) {
        LTDA.addEventListener('click', NaoMEI);
    }

    if (EPP != null) {
        EPP.addEventListener('click', NaoMEI);
    }

    function SimMEI() {
        choiceMEI = MEI.value
        choiceME = ME.value;
        choiceLTDA = LTDA.value;
        choiceEPP = EPP.value;

        if(choiceMEI == 'MEI') {
            validadorMEI.style.display = 'block'
            //restricao.style.display = 'none'
        }

    }

    function NaoMEI() {
        choiceMEI = MEI.value
        choiceME = ME.value;
        choiceLTDA = LTDA.value;
        choiceEPP = EPP.value;

        if(choiceME == 'ME') {
            validadorMEI.style.display = 'none'
            //restricao.style.display = 'block'
        }
        
        if(choiceLTDA == 'LTDA') {
            validadorMEI.style.display = 'none'
            //restricao.style.display = 'block'
        }

        if(choiceEPP == 'EPP') {
            validadorMEI.style.display = 'none'
            //restricao.style.display = 'block'
        }
    }

    //3
    var restricaoSim = document.querySelector('input#restricaoSim');
    var restricaoNao = document.querySelector('input#restricaoNao');    

    var validadorRestricao = document.querySelector('#validadorRestricao')
    var correntista = document.querySelector('#correntista')

    if (restricaoSim != null) {
        restricaoSim.addEventListener('click', restSim);
    }

    if (restricaoNao != null) {
        restricaoNao.addEventListener('click', restNao);
    }

    function restSim() {
        
        choiceSim = restricaoSim.value;

        if(choiceSim == 'Sim') {
            validadorRestricao.style.display = 'block';
            correntista.style.display = 'none';
        } 
        
    }

    function restNao() {

        choiceNao = restricaoNao.value;
        
        if(choiceNao == 'Não') {
            validadorRestricao.style.display = 'none';
            correntista.style.display = 'block';
        } 

    }
// /COBAN

// Correção de Bug na home

var bannerCobanHome = document.querySelector('#banner-coban-home');

console.log(bannerCobanHome);
var teste = bannerCobanHome.getAttribute('tabindex');

bannerCobanHome.addEventListener("change", e => {
    console.log(e);
})

// Correção de Bug na home

// Carrossel Bootstrap
