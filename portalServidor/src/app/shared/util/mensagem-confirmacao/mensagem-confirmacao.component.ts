import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

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
  @Input() exibe: boolean;
  color: string;

  @Output() respostaOut = new EventEmitter();

  constructor() { }

  ngOnInit() {

    this.color = this.msg_class;
    /*
    if (this.msg_class == "danger"){
      this.color = "red";
    }else if (this.msg_class == "success"){
      this.color = "green";
    }else if (this.msg_class == "warning"){
      this.color = "yellow";
    }else if (this.msg_class == "info"){
      this.color = "aqua";
    }else{
      this.color = "blue";
    }
    */
  }

  confirma(resposta : boolean){
    this.respostaOut.emit(resposta);
    this.exibe = false;
  }

}
