import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ExemploComponent } from './paginas/exemplo/exemplo.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { ExibirNoticiaComponent } from './paginas/exibir-noticia/exibir-noticia.component';
import { PushNotificationComponent } from './paginas/push-notification/push-notification.component';
import { PdfViewerModule } from 'ng2-pdf-viewer';

@NgModule({
  declarations: [ExemploComponent, ExibirNoticiaComponent, PushNotificationComponent],
  imports: [
    CommonModule,
    SharedModule,
    PdfViewerModule
  ]
})
export class ExemploModule { }
