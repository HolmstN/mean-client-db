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
const client_1 = require('./client');
require('rxjs/add/operator/switchMap');
let ClientDetailComponent = class ClientDetailComponent {
    constructor(clientService, route, location) {
        this.clientService = clientService;
        this.route = route;
        this.location = location;
    }
    ngOnInit() {
        this.route.params
            .switchMap((params) => this.clientService.getClient(+params['id']))
            .subscribe(client => this.client = client);
    }
    goBack() {
        this.location.back();
    }
};
__decorate([
    core_1.Input(), 
    __metadata('design:type', client_1.Client)
], ClientDetailComponent.prototype, "client", void 0);
ClientDetailComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'my-client-detail',
        templateUrl: 'client-detail.component.html'
    }), 
    __metadata('design:paramtypes', [client_service_1.ClientService, router_1.ActivatedRoute, common_1.Location])
], ClientDetailComponent);
exports.ClientDetailComponent = ClientDetailComponent;
//# sourceMappingURL=client-detail.component.js.map