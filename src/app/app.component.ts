import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'cmail-front';
  private _isNewEmailFormOpen = false;

  emails = [
    {assunto : "Assunto 1", destinatario : "joao.silva@cmail.com", conteudo : "Conteúdo do email"},
    {assunto : "Assunto 2", destinatario : "carlos.aleman@cmail.com", conteudo : "Conteúdo do email"},
  ];
  
  toogleNewEmailForm() {
    this._isNewEmailFormOpen = !this._isNewEmailFormOpen;
  }

// ctrl + D ou F2 ajuda na refatoracao do codigo

  get isNewEmailFormOpen() {
    return this._isNewEmailFormOpen;
  }
}
