export default class HttpService {
    constructor(url, method) {
        this.url = url;
        this.method = method;
    }

    request() {
        try {
            return new Promise((resolve, reject) => {
                let http = new XMLHttpRequest();
                http.open(this.method, this.url, true);
                http.onload = function () {
                    var status = http.status;
                    if (status >= 200 && status <= 299) {
                        resolve({
                            status: status,
                            message: "Sucesso",
                            data: http.response,
                        });
                    } else {
                        reject({ status: status, message: http.response });
                    }
                };
                http.send();
            });
        } catch (error) {
            console.error(error);

            throw error;
        }
    }
}