import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { CadastroComponent } from './modules/cadastro/cadastro.component';
import { InboxComponent } from './modules/inbox/inbox.component';
import { LoginComponent } from './modules/login/login.component';
import { RouterModuleConfigurado } from './app.routes';
import { CmailFormGroupComponent } from './components/cmail-form-group/cmail-form-group.component';
import { CmailFormInpuDirective } from './components/cmail-form-group/cmail-form-input.directive';

@NgModule({
  declarations: [ // aceita components, diretivas
    AppComponent,
    HeaderComponent,
    CadastroComponent,
    InboxComponent,
    LoginComponent,
    CmailFormGroupComponent,
    CmailFormInpuDirective
  ],
  imports: [ // modulos
    BrowserModule,
    FormsModule,
    RouterModuleConfigurado,
    ReactiveFormsModule
  ],
  providers: [], // servicos
  bootstrap: [AppComponent]
})
export class AppModule { }
