import HttpRequest from '../../services/HttpService.js';

export default class CepModel {
    constructor(cep) {
        this.cep = cep;
    }

    find() {
        try {
            let http = new HttpRequest(`https://viacep.com.br/ws/${this.cep}/json/`, 'GET');

            return http.request();
        } catch (error) {
            console.error(error);

            throw error;            
        }
    }
}