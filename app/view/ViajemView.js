class ViajemView {
    constructor(elemento,elementoPassageiros) {
        this._elemento = elemento;
        this._elementoPassageiros = elementoPassageiros;
    }
    _templateViajens(model) {
        let cardsViajens = '';

        if (model.length == 0) {
            cardsViajens = `
            <div class="col-sm-4 col-md-3">    
                <p>Nehuma Viajem no Momento.</p>
            </div>`;
            return cardsViajens;
        }
        console.log('Renderizando template..');
        console.log(model);
        model.forEach(element => {
            cardsViajens += `
                <div class="col-sm-4 col-md-3">
                    <div class="card" style="width: 17rem;height:400px">
                        <img class="card-img-top" src="https://images.unsplash.com/photo-1517303650219-83c8b1788c4c?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=bd4c162d27ea317ff8c67255e955e3c8&auto=format&fit=crop&w=2691&q=80"
                            alt="Card image cap">
                        <h4 class="card-title"><a href="detalhesViajem.html" onclick="viajemController.detalheViajens(event,${element.viajemId})"> ${element.nomeViajem} </a></h4>
                        <h5 class="card-text"><b>Custos </b> R$ ${element.totalCusto} </h5>
                        <p class="card-text"><b>Saída </b>${element.dataInicio}</p>
                        <p class="card-text"><b>Pago até o momento R$ ${element.valorPago}</b></p>
                        <div class="align-self-center">
                        <div class="circle-card">${element.totalPassageiro} | ${element.qtdPassageiros}</div>
                    </div>
                    </div>
                </div>`
        });
        return cardsViajens;
    }
    _templatePassageiros(model) {
        let cardsPassageiros = '';

        if (model.length == 0) {
            cardsPassageiros = `
            <div class="col-sm-4 col-md-3">    
                <p>Nehum Passageiro no Momento.</p>
            </div>`;
            return cardsViajens;
        }
        model.forEach(element => {
            cardsPassageiros += `
            <div class="col-md-8">
                <div class="cardd">
                    <div class="row">
                        <div class="col-md-2  ">
                            <div class="profile-photo-small align-middle">
                                <img src="./assets/img/faces/avatar.jpg" alt="Circle Image" class="rounded-circle align-middle img-fluid float-left avatar-card">
                            </div>
                        </div>
                        <div class="col-md-8">
                            <h5 style="padding-top:0.5em;text-align: left;padding-bottom: 0;margin-bottom: 0">
                                <b>${element.nomePassageiro}</b>
                            </h5>
                            <p style="text-align: left;">${element.viajem.nomeViajem}</p>
                            <hr>
                            <p style="text-align: left;padding-top: 0;margin-top: 0;" class="text-warning">
                                <b>${element.statusPagamento}</b>
                            </p>
                        </div>
                        <div class="col-md-2">
                            <div class="p2" style="padding-top:4em">
                                <a href="historicoPagamentos.html" style="color:black"><i class="material-icons">format_list_bulleted</i></a>
                                <a href="#" style="color:black"><i class="material-icons">delete_forever</i></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>`
        });
        return cardsPassageiros;
    }
    _templatePerfilPassageiro(model) {
        let cardsPassageiros = `
        <div class="card-perfil">
            <a href="#pablo">
            <img src="./assets/img/faces/avatar.jpg" alt="Circle Image" class="img rounded-circle align-middle"
                style="height: 250px;  width: 250px;">
            </a>
            <div class="card-body">
                <h4 class="card-title">Ana Paula Silva</h4>
                <h5 class=" text-center" style="padding-left:2em">anapaula@gmail.com</h5>
                <p class="card-description text-left" style="padding-left:2em">
                    <b>Telefone:</b> 34 3322-6778 | <b>WhatsApp:</b> 34 98878-0065
                </p>
                <p class="card-description text-left" style="padding-left:2em">
                    Rua São MAteus 511 - Abadia - Uberaba
                </p>
                <p class="card-description">
                    <b>Já viajou 5 vezes</b>
                </p>
                <a href="#pablo" class="btn btn-danger btn-round"><i class="material-icons">edit</i> Editar Passageiro</a>
            </div>
        </div>
        `;


        return cardsPassageiros;
    }
    _templateEmpresa() {
        let nomeEmpresa = localStorage.getItem('empresa');
        let templateEmpresa = `<h3 class="text-center">${nomeEmpresa}</h3>`;

        return templateEmpresa;
    }

    atualizaViajens(model) {
        console.log('atualizaViajens');
        this._elemento.innerHTML = this._templateViajens(model);
    }

    atualizaEmpresa(model) {
        this._elemento.innerHTML = this._templateEmpresa();
    }
    atualizaPassageiros(model) {
        console.log(model)
        this._elementoPassageiros.innerHTML = this._templatePassageiros(model);
    }
    carregaModalNovaViajem(model) {
        let select = document.getElementById('tipoViajem');
        let opcoes = '<option>Escolha Tipo Viajem</option>';
        model.forEach(element => {
            opcoes += '<option value="' + element.id + '">' + element.descricao + '</option>';
        });
        select.innerHTML = opcoes;
    }
    carregaModalNovoPassageiro(model) {
        console.log('lista viajens');
        console.log(model);
        let select = document.getElementById('viajemPassageiro');
        let opcoes = '<option>Escolha Viajem</option>';
        model.forEach(element => {
            opcoes += '<option value="' + element.viajemId + '">' + element.nomeViajem + '</option>';
        });
        select.innerHTML = opcoes;
    }
}