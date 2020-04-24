import { ModalDirective, BsModalRef, ModalBackdropComponent, BsModalService } from 'ngx-bootstrap/modal';
import { Component, OnInit, Input, Output, EventEmitter, SimpleChanges, ViewChild, ElementRef, TemplateRef } from '@angular/core';

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
  @ViewChild('mdl_msg_fechar') buttonFechar: ElementRef;
  @Output() respostaOut = new EventEmitter();
  modalRef: BsModalRef;
  @ViewChild('template') template: TemplateRef<any>;

  constructor(private modalService: BsModalService) {}

  ngOnInit() {
  }

  fecharModal() {
    this.respostaOut.emit(true);
    this.modalRef.hide();
  }

  abrirModal() {
    this.modalRef = this.modalService.show(this.template, {class: 'modal-sm'});

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
