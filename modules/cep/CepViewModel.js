import CepModel from "./CepModel.js";

export default class CepViewModel {
    constructor(cep) {
        this.cep = cep;
    }

    async buscarCep() {
        try {
            let cep = new CepModel(this.cep);
            let result = await cep.find();

            return JSON.parse(result.data);
        } catch (error) {
            console.error(error);

            throw error;            
        }
    }
}