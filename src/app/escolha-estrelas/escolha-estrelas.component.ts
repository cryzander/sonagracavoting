import { Component, OnInit, Input } from '@angular/core';

import { SoNaGracaService } from '../shared/so-na-graca.service';


@Component({
  selector: 'component-escolha-estrelas',
  templateUrl: './escolha-estrelas.component.html',
  styleUrls: ['./escolha-estrelas.component.css']
})
export class EscolhaEstrelasComponent implements OnInit {

  @Input() caminhoImagens: string = '';
  participantes: string[] = [];

  pastaEstrelas = 'estrelas/';
  pastaRostinhos = 'emotions/';

  imagensEstrelas = ['estrela-ruim.png', 'estrela-fraco.png', 'estrela-bom.png', 'estrela-excelente.png', 'estrela-incrivel.png' ];
  imagensRostinhos = [ 'emo-ruim.png ', 'emo-fraco.png', 'emo-bom.png', 'emo-excelente.png', 'emo-incrivel.png' ];


  constructor( private _soNaGracaService: SoNaGracaService ) {

    this.participantes = _soNaGracaService.getParticipantes();

  }

  ngOnInit() {

  }

}
