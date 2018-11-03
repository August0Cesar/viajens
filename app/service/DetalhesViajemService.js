class DetalhesViajemService {

    constructor() {
        this.http = new HttpService();
    }
    buscaDetalhesViajem(data) {
        let url = 'http://localhost:8080/detalhesViajem';

        return new Promise((resolve, reject) => {
            this.http.post(url, data).then(data => {
                data.json().then(function (data) {
                    resolve(data);
                });
            }).catch(error => {
                reject(error);
            })
        });
    }
    saveCusto(data) {
        let url = 'http://localhost:8080/custoViajem';

        return new Promise((resolve, reject) => {
            this.http.post(url, data).then(data => {
                data.json().then(function (data) {
                    resolve(data);
                });
            }).catch(error => {
                reject(error);
            })
        });
    }
}