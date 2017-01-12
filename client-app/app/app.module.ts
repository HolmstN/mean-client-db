import { NgModule }       from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { FormsModule }    from '@angular/forms';
import { RouterModule }   from '@angular/router';
import { HttpModule, JsonpModule }     from '@angular/http';

// Imports for loading & configuring the in-memory web api
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { ClienteleData }  from './clientele-data';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent }   from './app.component';
import { ClientsComponent } from './clients.component';
import { ClientDetailComponent } from './client-detail.component';
import { DashboardComponent } from './dashboard.component';

import { ClientService } from './client.service';

@NgModule({
  imports:      [ 
    BrowserModule,
    FormsModule,
    HttpModule,
    JsonpModule,
    InMemoryWebApiModule.forRoot(ClienteleData),
    AppRoutingModule
  ],
  declarations: [ 
      AppComponent,
      ClientsComponent,
      ClientDetailComponent,
      DashboardComponent
    ],
  providers: [
    ClientService
  ],
  bootstrap:    [ AppComponent ]
})


export class AppModule { }
