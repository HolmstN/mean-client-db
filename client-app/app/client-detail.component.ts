import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Params }   from '@angular/router';
import { Location }                 from '@angular/common';

import { ClientService }            from './client.service';

import { Client }                   from './client';

import 'rxjs/add/operator/switchMap';


@Component({
    moduleId: module.id,
    selector: 'my-client-detail',
    templateUrl: 'client-detail.component.html'
})

export class ClientDetailComponent implements OnInit {
    @Input()
    client: Client;
    
    constructor(
        private clientService: ClientService,
        private route: ActivatedRoute,
        private location: Location
    ) {}
    
    ngOnInit(): void {
        this.route.params
            .switchMap((params:Params) => this.clientService.getClient(+params['id']))
            .subscribe(client => this.client = client);
    }
    
    goBack(): void {
        this.location.back();
    }

}