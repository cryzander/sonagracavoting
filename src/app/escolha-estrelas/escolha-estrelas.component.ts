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

  imagensEstrelasDic = {'estrela-ruim.png':false, 'estrela-fraco.png':false, 'estrela-bom.png':false, 'estrela-excelente.png':false, 'estrela-incrivel.png':false };

  indiceEstrela: number = 0;
  quantidadeEstrelas: number = 0;

  constructor( private _soNaGracaService: SoNaGracaService ) {

    this.participantes = _soNaGracaService.getParticipantes();

  }

  ngOnInit() {

  }

  // Escolher estrelas para modificar o DOM
  escolherEstrelas( _indiceEstrela: number ){
    this.indiceEstrela = _indiceEstrela;
    for (let estrela in this.imagensEstrelasDic){
        
        console.log(estrela)
        console.log(_indiceEstrela);
    }

  }

  // Vota no candidato com a quantidade de estrelas escolhidas
  votarCandidato( _quantidadeEstrelas: number ){
    this.quantidadeEstrelas = _quantidadeEstrelas;
  }



}
