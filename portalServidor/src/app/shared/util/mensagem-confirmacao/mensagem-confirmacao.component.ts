import { Component, OnInit, Input, Output, EventEmitter, TemplateRef, SimpleChanges, ViewChild } from '@angular/core';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-mensagem-confirmacao',
  templateUrl: './mensagem-confirmacao.component.html',
  styleUrls: ['./mensagem-confirmacao.component.css']
})
export class MensagemConfirmacaoComponent implements OnInit {

  @Input() msg_id: any;
  @Input() msg_class: any = "primary";
  @Input() tipo: any;
  @Input() pergunta: any;
  @Input() exibe: boolean = false;
  color: string;
  modalRef: BsModalRef;
  @ViewChild('template') template: TemplateRef<any>;

  @Output() respostaOut = new EventEmitter();

  constructor(private modalService: BsModalService) {}

  ngOnInit() {
    this.color = this.msg_class;
  }

  confirma(resposta : boolean){
    this.respostaOut.emit(resposta);
    this.modalRef.hide();
  }
 
  openModal() {
    this.modalRef = this.modalService.show(this.template, {class: 'modal-sm'});
  }

  ngOnChanges(changes: SimpleChanges) {
    if (this.exibe && this.tipo == "modal"){
      this.openModal();
    } 
  }


}
