"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
const core_1 = require('@angular/core');
const http_1 = require('@angular/http');
const Observable_1 = require('rxjs/Observable');
require('./rxjs-operators');
let ClientService = class ClientService {
    // private clientsUrl = 'https://mean-client-internal-db-holmstn.c9users.io:8080/api/clients';
    constructor(http) {
        this.http = http;
        this.clientsUrl = "app/clientele";
    }
    getClients() {
        return this.http.get(this.clientsUrl)
            .toPromise()
            .then(response => {
            response.json().data;
            console.log("Service Clients: " + response.json().data);
        })
            .catch(this.handleError);
    }
    getClient(id) {
        const url = `${this.clientsUrl}/${id}`;
        return this.http.get(url)
            .map(this.extractData)
            .catch(this.handleError);
    }
    handleError(error) {
        // In a real world app, we might use a remote logging infrastructure
        let errMsg;
        if (error instanceof http_1.Response) {
            const body = error.json() || '';
            const err = body.error || JSON.stringify(body);
            errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
        }
        else {
            errMsg = error.message ? error.message : error.toString();
        }
        console.error(errMsg);
        return Observable_1.Observable.throw(errMsg);
    }
    extractData(res) {
        console.log("Hit extractData: " + res);
        let body = res.json();
        return body;
    }
};
ClientService = __decorate([
    core_1.Injectable(), 
    __metadata('design:paramtypes', [http_1.Http])
], ClientService);
exports.ClientService = ClientService;
//# sourceMappingURL=client.service.js.map