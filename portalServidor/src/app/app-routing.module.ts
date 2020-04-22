import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ExemploComponent } from './modules/exemplo/paginas/exemplo/exemplo.component';

const routes: Routes = [
  { 
    path: '', 
    component: ExemploComponent
  },
  { 
    path: 'exemplo', 
    component: ExemploComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
