import { Component, OnInit }  from '@angular/core';
import { Router }             from '@angular/router';
import { Location }           from '@angular/common';

import { Client } from './client';
import { ClientService } from './client.service';

@Component({
    moduleId: module.id,
    selector: 'my-clients',
    templateUrl: 'clients.component.html'
})

export class ClientsComponent implements OnInit { 
    ngOnInit(): void {
        this.getClients();
    }
    
    errorMessage: string;
    clients: Client[];
    mode = 'Observable';
    
    constructor(
        private clientService: ClientService,
        private location: Location,
        private router: Router
        ) {}
    
    selectedClient: Client;

    onSelect(client: Client): void {
        this.selectedClient = client;
    }
    
    getClients(): void {
        this.clientService.getClients()
            .then(clients => {
                this.clients = clients;
                console.log("Component clients: " + clients);
            });
    }
    
    goBack(): void {
        this.location.back();
    }
    
    gotoDetail(): void {
        this.router.navigate(['/detail', this.selectedClient.id]);
    }
}