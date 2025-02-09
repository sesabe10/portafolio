import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PortafolioComponent } from './portafolio/portafolio.component';
import { NavComponent } from './components/nav/nav.component';
import { ContacComponent } from './contac/contac/contac.component';

// /imports
import {HttpClient} from '@angular/common/http';
import { ReactiveFormsModule} from '@angular/forms';



@NgModule({
  declarations: [
    AppComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    PortafolioComponent,
    NavComponent,
    ContacComponent,     
    ReactiveFormsModule    
],
  providers: [  
    HttpClient
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
