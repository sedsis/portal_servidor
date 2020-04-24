import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-exemplo',
  templateUrl: './exemplo.component.html',
  styleUrls: ['./exemplo.component.css']
})
export class ExemploComponent implements OnInit {

  mensagem: string;
  tipoMensagem: string;
  count = 0;
  mensagem2: string;
  tipoMensagem2: string;
  count2 = 0;

  exibeModalConfirmacao: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  abrirAlerta(){
    if (this.count % 4 == 0) this.setarMensagem("Lote excluído com sucesso.", "success");
    if (this.count % 4 == 1) this.setarMensagem("Lote não foi excluído.", "danger");
    if (this.count % 4 == 2) this.setarMensagem("Lote excluído com problemas.", "warning");
    if (this.count % 4 == 3) this.setarMensagem("Lote excluído.", "info");

    this.count++;
  }

  setarMensagem(mensagem: string, tipo: string) {
    this.mensagem = null;
    this.mensagem = mensagem;
    this.tipoMensagem = tipo;
  }

  recebeRespostaModalMensagem(){

  }

  abrirAlertaModal(){
    if (this.count2 % 4 == 0) this.setarMensagemModal("Lote excluído com sucesso.", "success");
    if (this.count2 % 4 == 1) this.setarMensagemModal("Lote não foi excluído.", "danger");
    if (this.count2 % 4 == 2) this.setarMensagemModal("Lote excluído com problemas.", "warning");
    if (this.count2 % 4 == 3) this.setarMensagemModal("Lote excluído.", "info");

    this.count2++;
  }

  setarMensagemModal(mensagem: string, tipo: string) {
    this.mensagem2 = null;
    this.tipoMensagem2 = tipo;
    this.mensagem2 = mensagem;
  }

  confirmaPergunta(resposta) {
    if (resposta) {
      this.setarMensagem("Lote excluído com sucesso.", "success");
    }
    this.exibeModalConfirmacao = false;
  }

  abrirModalConfirmacao(){
    this.exibeModalConfirmacao = true;
  }

  limpaMensagem(){
    this.setarMensagem("","");
  }

}
