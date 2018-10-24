class ViajemController {
    constructor() {
        let $ = document.querySelector.bind(document);
        //fazendo bind dos inputs do formulario
        this.inputNomeViajem = $('#nomeViajem');
        this.inputValorPassagem = $('#valorPassagem');
        this.inputQtdPassageiros = $('#qtdPassageiros');
        this.inputDataInicio = $('#dataInicio');
        this.inputDataFinal = $('#dataInicio');
        this.inputDescricaoViajem = $('#descricaoViajem');


        this.listaViajens = new ListaViajem();
        this._viajemView = new ViajemView($('#container-onibus'));
        this._viajemView.atualiza(this.listaViajens);
    }
    criaViajem(event) {
        event.preventDefault();

        //instancia viajem
        let viajem = new Viajem(this.inputNomeViajem.value, this.inputValorPassagem.value,  this.inputDataInicio.value, this.inputDataFinal.value,
           this.inputDescricaoViajem.value, this.inputQtdPassageiros.value,
        );

        this.listaViajens.adicionaViajem(viajem);//adiciona a viajem na lista
        this._viajemView.atualiza(this.listaViajens);
        $('#modalViajem').modal('hide');

    }
    closeDialog(event) {
        event.preventDefault();
        $('#modalPassageiro').modal('hide');
    }
}