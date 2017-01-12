import { Injectable }               from '@angular/core';
import { Headers, Http, Response }  from '@angular/http';
import { Observable }               from 'rxjs/Observable';

import './rxjs-operators';
import { Client } from './client';

@Injectable()
export class ClientService {
    private clientsUrl = "app/clientele";
    // private clientsUrl = 'https://mean-client-internal-db-holmstn.c9users.io:8080/api/clients';
    
    constructor(private http: Http) {}

    getClients(): Promise<Client[]> {
        return this.http.get(this.clientsUrl)
                    .toPromise()  
                    .then(response => {
                        response.json().data as Client[];
                        console.log("Service Clients: " + response.json().data);
                    })
                    .catch(this.handleError);
    }

    getClient(id: number): Observable<Client> {
        const url = `${this.clientsUrl}/${id}`;
        
        return this.http.get(url)
                    .map(this.extractData)
                    .catch(this.handleError);
    }
    
     private handleError (error: Response | any) {
        // In a real world app, we might use a remote logging infrastructure
        let errMsg: string;
        if (error instanceof Response) {
          const body = error.json() || '';
          const err = body.error || JSON.stringify(body);
          errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
        } else {
          errMsg = error.message ? error.message : error.toString();
        }
        console.error(errMsg);
        return Observable.throw(errMsg);
     }
    
    private extractData(res: Response) {
        console.log("Hit extractData: " + res);
        let body = res.json();
        return body;
    }
}