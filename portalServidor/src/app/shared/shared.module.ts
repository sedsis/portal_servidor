import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ModalModule } from 'ngx-bootstrap/modal';
import { AlertModule } from 'ngx-bootstrap/alert';

import { MensagemTelaComponent } from './util/mensagem-tela/mensagem-tela.component';
import { MensagemConfirmacaoComponent } from './util/mensagem-confirmacao/mensagem-confirmacao.component';
import { ModalMensagemTelaComponent } from './util/modal-mensagem-tela/modal-mensagem-tela.component';


@NgModule({
  declarations: [
    MensagemTelaComponent, 
    MensagemConfirmacaoComponent, 
    ModalMensagemTelaComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ModalModule.forRoot(),
    AlertModule.forRoot()
  ],
  exports: [
    MensagemTelaComponent, 
    MensagemConfirmacaoComponent, 
    ModalMensagemTelaComponent
  ]
})
export class SharedModule { }
