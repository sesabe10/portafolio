import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContacComponent } from './contac/contac/contac.component';
import { PortafolioComponent } from './portafolio/portafolio.component';

const routes: Routes = [
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  {path: 'home', component: PortafolioComponent, data:{animation: 'homePage'}},
  {path: 'contac', component: ContacComponent, data: {animation: 'contacPage'}}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
