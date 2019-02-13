import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { InboxComponent } from './modules/inbox/inbox.component';
import { LoginComponent } from './modules/login/login.component';
import { ModuloRoteamento } from './app.routes';
// import { CadastroModule } from './modules/cadastro/cadastro.module';

@NgModule({
  declarations: [ // aceita components, diretivas
    AppComponent,
    HeaderComponent,
    InboxComponent
  ],
  imports: [ // modulos
    BrowserModule,
    FormsModule,
    ModuloRoteamento
    // CadastroModule // importando o cadastroModule, será carregado pelo roteamento do cadastro.routes.ts
  ],
  providers: [], // servicos
  bootstrap: [AppComponent]
})
export class AppModule { }
