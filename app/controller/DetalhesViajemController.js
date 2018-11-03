class DetalhesViajemController {
    //http://www.fabiobmed.com.br/excelente-codigo-para-mascara-e-validacao-de-cnpj-cpf-cep-data-e-telefone/
    constructor() {
        let $ = document.querySelector.bind(document);

        this.nomeEmpresa = $('#nomeEmpresa');

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

        //fazendo bind dos inputs do formulario Custo
        this._inputDescricaoCusto = $('#descricaoCusto');
        this._inputValorCusto = $('#valorCusto');

        //this._viajemViewEmpresa = new ViajemView($('#nomeEmpresa'));

        this._detalhesViajemView = new DetalhesViajemView($('#container'));

        this._passageiroService = new PassageiroService();
        this._detalhesViajemService = new DetalhesViajemService();
        this._detalheRequest = new Object();

        this.buscaDetalhesViajem();
    }


    buscaDetalhesViajem() {
        this._detalheRequest.empresaId = localStorage.getItem('empresaId');
        this._detalheRequest.viajemId = localStorage.getItem('viajemAtiva');
        this._detalhesViajemService.buscaDetalhesViajem(JSON.stringify(this._detalheRequest))
            .then(data => {
                this._detalhesViajemView.inicializaContainer(data);
            }).catch(error => {
                console.log(error);
            });
    }

    cadastroCusto(event){
        event.preventDefault();
        let viajemId = localStorage.getItem('viajemAtiva');
        let custo = new Custo(this._inputDescricaoCusto.value, this._inputValorCusto.value,viajemId);
        $('#modalCusto').modal('hide');
        this._detalhesViajemService.saveCusto(JSON.stringify(custo))
        .then(data =>{
            console.log(data);
            this.buscaDetalhesViajem();
        })
        .catch(error =>{
            console.log(error);
            alert('Erro ao tentar cadastrar novo custo.');
        })
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
                //this._viajemView.atualizaPassageiros(data);
                this.buscaDetalhesViajem();
            }).catch(error => {
                console.log(error);
                alert('Erro ao tentar cadastrar novo passageiro.');
            });
    }

    excluiPassageiro(event, passageiroId) {
        event.preventDefault();
        let viajemId = localStorage.getItem('viajemAtiva');
        this._passageiroService.deletePassageiro(passageiroId,viajemId)
            .then(data => {
                this.buscaDetalhesViajem();
            })
            .catch(error => {
                console.log(error);
                alert('Erro ao tentar excluir passageiro');
            });
    }

    excluiCusto(event, custoId) {
        event.preventDefault();
        alert(custoId);
    }

    detalheViajens(event, data) {
        event.preventDefault();
        localStorage.setItem('viajemAtiva', data);
        window.location.replace("detalhesViajem.html");
    }

}