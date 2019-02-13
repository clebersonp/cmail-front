import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { InboxComponent } from './modules/inbox/inbox.component';
import { LoginComponent } from './modules/login/login.component';
import { RouterModuleConfigurado } from './app.routes';
import { CadastroModule } from './modules/cadastro/cadastro.module';
@NgModule({
  declarations: [ // aceita components, diretivas
    AppComponent,
    HeaderComponent,
    InboxComponent,
    LoginComponent
  ],
  imports: [ // modulos
    BrowserModule,
    FormsModule,
    RouterModuleConfigurado,
    CadastroModule // importando o cadastroModule
  ],
  providers: [], // servicos
  bootstrap: [AppComponent]
})
export class AppModule { }
