import { Component, OnInit, Input, SimpleChanges, ViewChild, ElementRef, Output, EventEmitter } from '@angular/core';
import { BsModalRef, ModalDirective } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-mensagem-tela',
  templateUrl: './mensagem-tela.component.html',
  styleUrls: ['./mensagem-tela.component.css'],
})
export class MensagemTelaComponent implements OnInit {

  @Input() mensagem: string;
  @Input() mensagens: string[];
  @Input() tipoMensagem: string = "info";
  @Output() respostaOut = new EventEmitter();
  exibeMensagem: boolean = false;
  timeout: number = 5000;

  constructor() { }

  ngOnInit() {
  }

  isNotEmpty(array) {
    return (typeof array != "undefined" && 
            array != null && 
            array.length != null 
            && array.length > 0) ? true : false;
  }

  ngOnChanges(changes: SimpleChanges) {
    this.exibeMensagem = (this.mensagem || this.isNotEmpty(this.mensagens)) ? true : false; 
    console.log(changes);
    console.log(this.exibeMensagem);
  }

  limpa(){
    this.exibeMensagem = false;
    this.respostaOut.emit(true);
  }
}
