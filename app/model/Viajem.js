class Viajem {
    constructor(nomeViajem,valorViajem,dataInicio,dataFinal,descricao,qtdPassageiros) {
        this._nomeViajem = nomeViajem ;
        this._valorViajem = valorViajem;
        this._custo = [];
        this._dataInicio = dataInicio;
        this._dataFinal = dataFinal;
        this._descricao = descricao;
        this._qtdPassageiros = qtdPassageiros;
        Object.freeze(this);
    }
    get nomeViajem() {
        return this._nome;
    }
    get valorViajem() {
        return
    }
    get custo() {
        return this._custo;
    }
    get dataInicio() {
        return this._dataInicio;
    }
    get dataFinal() {
        return this._dataFinal;
    }
    get observacao() {
        return this._descricao;
    }
    get qtdPassageiros() {
        return this._qtdPassageiro;
    }
}