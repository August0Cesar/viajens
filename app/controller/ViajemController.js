class ViajemController {
    //http://www.fabiobmed.com.br/excelente-codigo-para-mascara-e-validacao-de-cnpj-cpf-cep-data-e-telefone/
    constructor() {
        let $ = document.querySelector.bind(document);

        this.nomeEmpresa = $('#nomeEmpresa');


        //fazendo bind dos inputs do formulario Viajens
        this.inputNomeViajem = $('#nomeViajem');
        this.inputValorPassagem = $('#valorPassagem');
        this.inputQtdPassageiros = $('#qtdPassageiros');
        this.inputDataInicio = $('#dataInicio');
        this.inputDataFinal = $('#dataFinal');
        this.inputDescricaoViajem = $('#descricaoViajem');
        this.tipoViajem = $('#tipoViajem');

        //fazendo bind dos inputs do formulario Viajens
        this._inputNomePassageiro = $('#nomePassageiro');
        this._inputEmail = $('#emailPassageiro');
        this._inputTelefone = $('#telefonePassageiro');
        this._inputWhatsApp = $('#whatsappPassageiro');
        this._inputRua = $('#ruaPassageiro');
        this._inputNumeroRua = $('#numeroRuaPassageiro');
        this._inputBairro = $('#bairroPassageiro');
        this._inputCidade = $('#cidadePassageiro');
        this._inputDataNascimento = $('#dataNascimentoPassageiro');
        this._inputCpf = $('#cpfPassageiro');
        this._inputRg = $('#rgPassageiro');
        this._inputViajemId = $('#viajemPassageiro');
        this._inputEstado = $('#estadoPassageiro');

        //remove
        localStorage.removeItem('viajemAtiva');

        this._listaViajens = new ListaViajem();
        this._viajemViewEmpresa = new ViajemView($('#nomeEmpresa'));
        this._viajemView = new ViajemView($('#container-viajens'), $('#painel-passageiros'));
        this._passageiroService = new PassageiroService();
        this._viajemService = new ViajemService();
        this._tipoViajens = [];
        this._viajemService.buscaViajens('onibus').then(data => {
            console.log(data);
            localStorage.setItem('empresa', data.nomeEmpresa);
            localStorage.setItem('empresaId', data.empresaId);

            this._listaViajens = data.viajens;
            this.nomeEmpresa.value = data.nomeEmpresa;
            this._viajemView.atualizaViajens(this._listaViajens);
            this._viajemViewEmpresa.atualizaEmpresa(data);
            this._viajemView.carregaModalNovaViajem(data.tipoViajens);
            this._viajemView.carregaModalNovoPassageiro(this._listaViajens);
        }).catch(error => {
            console.log(error);
        });
    }
    buscaViajens(tipoViajem) {
        this._listaViajens = [];
        this._viajemService.buscaViajens(tipoViajem).then(data => {
            this._listaViajens = data.viajens;
            this._viajemView.atualizaViajens(this._listaViajens);
        }).catch(error => {
            alert(error);
            console.log(error);
        });
    }
    cadastraViajem(event) {
        event.preventDefault();

        let viajem = new Viajem(this.inputNomeViajem.value, this.inputValorPassagem.value, this.inputDataInicio.value, this.inputDataFinal.value,
            this.inputDescricaoViajem.value, this.inputQtdPassageiros.value, this.tipoViajem.value, localStorage.getItem('empresaId')
        );

        let dados = JSON.stringify(viajem);
        $('#modalViajem').modal('hide');
        //let retorno =
        this._viajemService.saveViajens(dados)
            .then(data => {
                console.log(data);
                this._viajemView.atualizaViajens(data);
                //return data;

                /* let response = data.json();
                if (response != null || response.length != 0) {
                    this._viajemView.atualizaViajens(response);
                    alert('Viajem cadastrada com sucesso.');

                } */
            }).catch(error => {
                console.log(error);
                alert('Erro ao cadastrar viajem.');

            });
        //console.log('Teste'+JSON.parse(retorno));
    }
    buscaPassageiros() {
        let empresaId = localStorage.getItem('empresaId');
        //console.log(empresaId);
        this._passageiroService.buscaPassageiros(empresaId)
            .then(data => {
                this._viajemView.atualizaPassageiros(data);
            }).catch(error => {
                console.log(error);
            });
    }
    cadastroPassageiro(event) {
        event.preventDefault();
        let passageiro = new Passageiro(this._inputNomePassageiro.value, this._inputEmail.value, this._inputTelefone.value, this._inputWhatsApp.value,
            this._inputRua.value, this._inputNumeroRua.value, this._inputBairro.value, this._inputCidade.value, this._inputDataNascimento.value,
            this._inputRg.value, this._inputCpf.value, this._inputViajemId.value, this._inputEstado.value
        );
        $('#modalPassageiro').modal('hide');
        let dados = JSON.stringify(passageiro);
        this._passageiroService.savePassageiro(dados)
            .then(data => {
                this._viajemView.atualizaPassageiros(data);
            }).catch(error => {
                console.log(error);
            });
    }
    detalheViajens(event, data) {
        event.preventDefault();
        localStorage.setItem('viajemAtiva', data);
        window.location.replace("detalhesViajem.html");
    }
    /******************/
    validateTelefone(tel) {
        /*  exp = /\(\d{2}\)\ \d{4}\-\d{4}/
         if (!exp.test(tel.value))
             alert('Numero de Telefone Invalido!'); */
    }

    MascaraTelefone(event) {
        //console.log(event);
        /* if (mascaraInteiro(event) == false) {
            event.returnValue = false;
        }
        return MascUtiuls.formataCampo(tel, '(00) 0000-0000', event); */
    }
    mascaraInteiro(event) {
        console.log(event);
        if (event.keyCode < 48 || event.keyCode > 57) {
            //event.returnValue = false;
            return false;
        }
        return true;
    }
}