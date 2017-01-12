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
const router_1 = require('@angular/router');
const common_1 = require('@angular/common');
const client_service_1 = require('./client.service');
let ClientsComponent = class ClientsComponent {
    constructor(clientService, location, router) {
        this.clientService = clientService;
        this.location = location;
        this.router = router;
        this.mode = 'Observable';
    }
    ngOnInit() {
        this.getClients();
    }
    onSelect(client) {
        this.selectedClient = client;
    }
    getClients() {
        this.clientService.getClients()
            .then(clients => {
            this.clients = clients;
            console.log("Component clients: " + clients);
        });
    }
    goBack() {
        this.location.back();
    }
    gotoDetail() {
        this.router.navigate(['/detail', this.selectedClient.id]);
    }
};
ClientsComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'my-clients',
        templateUrl: 'clients.component.html'
    }), 
    __metadata('design:paramtypes', [client_service_1.ClientService, common_1.Location, router_1.Router])
], ClientsComponent);
exports.ClientsComponent = ClientsComponent;
//# sourceMappingURL=clients.component.js.map