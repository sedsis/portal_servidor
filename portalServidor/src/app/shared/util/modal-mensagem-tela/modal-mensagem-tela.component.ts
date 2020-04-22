import { ModalDirective, BsModalRef, ModalBackdropComponent, BsModalService } from 'ngx-bootstrap/modal';
import { Component, OnInit, Input, Output, EventEmitter, SimpleChanges, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-modal-mensagem-tela',
  templateUrl: './modal-mensagem-tela.component.html',
  styleUrls: ['./modal-mensagem-tela.component.css']
})
export class ModalMensagemTelaComponent implements OnInit {

  @Input() msg_id: any;
  @Input() mensagem: string;
  @Input() mensagens: string[];
  @Input() tipoMensagem: string = "primary";
  @Input() exibeMensagem: boolean;
  color: string;
  display: string = 'none';
  @ViewChild('mdl_msg_fechar') buttonFechar: ElementRef;
  @Output() respostaOut = new EventEmitter();

  constructor() {
  }

  ngOnInit() {

    this.color = this.tipoMensagem;
    /*
    if (this.tipoMensagem == "danger") {
      this.color = "red";
    } else if (this.tipoMensagem == "success") {
      this.color = "green";
    } else if (this.tipoMensagem == "warning") {
      this.color = "yellow";
    } else if (this.tipoMensagem == "info") {
      this.color = "aqua";
    } else {
      this.color = "blue";
    }*/
  }

  fecharModal() {
    this.display = 'none';
    this.respostaOut.emit(true);
  }

  abrirModal() {
    this.color = this.tipoMensagem;
    this.display = 'block';

    setTimeout(() => {
      this.buttonFechar.nativeElement.focus();
    }, 400);

  }

  isNotEmpty(array) {
    if (typeof array != "undefined" && array != null && array.length != null && array.length > 0) {
      return true
    }
    return false
  }


  ngOnChanges(changes: SimpleChanges) {
    if (this.exibeMensagem) {
      this.abrirModal();
    } else {
      this.fecharModal();
    }
  }
}
