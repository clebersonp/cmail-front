import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ModuloRoteamento } from './app.routes';
import { AuthGuardGeral } from './shared/auth/auth-guard-geral';
import { FiltraPorAssuntoPipe } from './shared/pipes/filtraPorAssunto.pipe';
import { InboxModule } from './modules/inbox/inbox.module';
// import { CadastroModule } from './modules/cadastro/cadastro.module';

@NgModule({
  declarations: [ // aceita components, diretivas
    AppComponent
  ],
  imports: [ // modulos
    BrowserModule,
    FormsModule,
    ModuloRoteamento
    // CadastroModule // importando o cadastroModule, será carregado pelo roteamento do cadastro.routes.ts
  ],
  providers: [AuthGuardGeral], // servicos e outras classes
  bootstrap: [AppComponent]
})
export class AppModule { }
