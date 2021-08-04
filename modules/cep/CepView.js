import CepViewModel from "./CepViewModel.js";

export default class CepView {
    constructor() {

    }

    async render(param = '') {
        let html = '';

        if (param.toString().length == 8) {

            let cepViewModel = new CepViewModel(param);

            html = `
            <div class="container">
                <div class="spinner-border" role="status">
                    <span class="visually-hidden">Carregando...</span>
                </div>
            </div>`;
            document.getElementById('resultado').innerHTML = html;

            let result = await cepViewModel.buscarCep();

            if (!result.erro) {
                html = `
                <div class="container">
                                                    
                    <div class="row">
                        <div class="col-md-2">
                            <div class="item">
                                <span class="label">CEP</span>
                                <span class="value">${result.cep}</span>
                            </div>
                        </div>
                        <div class="col-md-2">
                            <div class="item">
                                <span class="label">Cidade</span>
                                <span class="value">${result.localidade}</span>
                            </div>
                        </div>
                        <div class="col-md-2">
                            <div class="item">
                                <span class="label">UF</span>
                                <span class="value">${result.uf}</span>
                            </div>
                        </div>
                        <div class="col-md-2">
                            <div class="item">
                                <span class="label">Bairro</span>
                                <span class="value">${result.bairro}</span>
                            </div>
                        </div>
                        <div class="col-md-2">
                            <div class="item">
                                <span class="label">Logradouro</span>
                                <span class="value">${result.logradouro}</span>
                            </div>
                        </div>
                        <div class="col-md-2">
                            <div class="item">
                                <span class="label">DDD</span>
                                <span class="value">${result.ddd}</span>
                            </div>
                        </div>
                        <div class="col-md-2">
                            <div class="item">
                                <span class="label">GIA</span>
                                <span class="value">${result.gia}</span>
                            </div>
                        </div>
                        <div class="col-md-2">
                            <div class="item">
                                <span class="label">IBGE</span>
                                <span class="value">${result.ibge}</span>
                            </div>
                        </div>
                        <div class="col-md-2">
                            <div class="item">
                                <span class="label">IBGE</span>
                                <span class="value">${result.ibge}</span>
                            </div>
                        </div>
                        <div class="col-md-2">
                            <div class="item">
                                <span class="label">SIAFI</span>
                                <span class="value">${result.siafi}</span>
                            </div>
                        </div>
                    </div>
      
                </div>`;
            } else {
                html = `
                <div class="container">
                    <div class="alert alert-warning" role="alert">
                        OPS! CEP não encontrado.
                    </div>
                </div>`;
            }

            document.getElementById('resultado').innerHTML = html;
        }

        document.getElementById('resultado').innerHTML = html;
    }
}

document.getElementById("input-cep").onkeyup = function () {
    let cepView = new CepView();
    cepView.render(this.value);
}