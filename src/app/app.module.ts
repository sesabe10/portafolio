import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PortafolioComponent } from './portafolio/portafolio.component';
import { NavComponent } from './components/nav/nav.component';
import { ContacComponent } from './contac/contac/contac.component';
import { provideRouter, withViewTransitions } from '@angular/router';


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
    
],
  providers: [
    provideRouter(withViewTransitions),    
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
