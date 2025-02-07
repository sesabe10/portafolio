import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContacComponent } from './contac/contac/contac.component';
import { PortafolioComponent } from './portafolio/portafolio.component';

const routes: Routes = [
  {path: '', redirectTo: '/home', pathMatch: 'full', data: {animation: 'home'}},
  {path: 'home', component: PortafolioComponent, data: {animation: 'home'}},
  {path: 'contac', component: ContacComponent, data: {animation: 'contac'}}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
