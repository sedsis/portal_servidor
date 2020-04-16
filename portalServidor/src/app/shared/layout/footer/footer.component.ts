import { Constantes } from './../../util/constantes';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  versao: string;
  constructor() { }

  ngOnInit() {
    this.versao = Constantes.versaoAtual;
  }

  recebe(resposta){
    
  }
}
