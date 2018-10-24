class ViajemView {
    constructor(elemento) {
        this._elemento = elemento;
    }
    _templateViajens(model) {
        let cardsViajens = '';
        model._viajens.forEach(element => {
            cardsViajens +=  `<div class="col-sm-4 col-md-3">
                    <div class="card" style="width: 17rem;height:400px">
                        <img class="card-img-top" src="https://images.unsplash.com/photo-1517303650219-83c8b1788c4c?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=bd4c162d27ea317ff8c67255e955e3c8&auto=format&fit=crop&w=2691&q=80"
                            alt="Card image cap">
                        <h4 class="card-title"><a href="detalhesViajem.html"> ${element._nomeViajem} </a></h4>
                        <h5 class="card-text"><b>Custos </b> R$ 800,00 </h5>
                        <p class="card-text"><b>Saída </b>${element._dataInicio}</p>
                        <p class="card-text"><b>Pago até o momento R$ 800,00</b></p>
                        <div class="align-self-center">
                        <div class="circle-card">26/${element._qtdPassageiros}</div>
                    </div>
                    </div>
                </div>`
        });
       // console.log(model);
        return cardsViajens;
    }
    atualiza(model) {
        this._elemento.innerHTML = this._templateViajens(model);
    }
}