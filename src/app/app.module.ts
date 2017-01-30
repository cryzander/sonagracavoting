import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { EscolhaEstrelasComponent } from './escolha-estrelas/escolha-estrelas.component';

import { SoNaGracaService } from './shared/so-na-graca.service';

@NgModule({
  declarations: [
    AppComponent,
    EscolhaEstrelasComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [ SoNaGracaService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
