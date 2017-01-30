import { Injectable } from '@angular/core';

@Injectable()
export class SoNaGracaService {


  participantes: string[] = ['Gustavo', 'Stefany', 'Tiago'];
  participanteAtual: string = 'Gustavo';
  // Isso será adquirido via get http
  
  
  constructor() { }

  getParticipante(){
    return this.participanteAtual;
  }

  getParticipantes(){
    return this.participantes;
  }

  addParticipante( parti: string){
    this.participantes.push(parti);
  }


}
