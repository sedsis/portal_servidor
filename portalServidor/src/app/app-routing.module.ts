import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ExemploComponent } from './modules/exemplo/paginas/exemplo/exemplo.component';
import { PushNotificationComponent } from './modules/exemplo/paginas/push-notification/push-notification.component';
import { ExibirNoticiaComponent } from './modules/exemplo/paginas/exibir-noticia/exibir-noticia.component';

const routes: Routes = [
  { 
    path: '', 
    component: ExemploComponent
  },
  { 
    path: 'exemplo', 
    component: ExemploComponent
  },
  { 
    path: 'noticia', 
    component: ExibirNoticiaComponent
  },
  { 
    path: 'push-notification', 
    component: PushNotificationComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
