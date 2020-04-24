import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-exibir-noticia',
  templateUrl: './exibir-noticia.component.html',
  styleUrls: ['./exibir-noticia.component.css']
})
export class ExibirNoticiaComponent implements OnInit {

  caminhoNoticia:string = '/assets/pdfs/noticiaTeste.pdf';
  exibirPDF: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  exibirPDFExemplo() {
    this.exibirPDF = !this.exibirPDF;
  }
}
