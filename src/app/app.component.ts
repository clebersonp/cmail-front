import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

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

  // email sera usado com o way 2 data binding
  email = {
    assunto : '',
    destinatario : '',
    conteudo : ''
  };

  handleCriarEmail(eventoDoForm: Event, formNovoEmail: NgForm) {
    // mudar o comportamento default do submit para dar refresh em toda pagina
    eventoDoForm.preventDefault();
    this.emails.push(this.email);

    // recuperando a referencia da diretiva(objeto) ngForm passada da view
    if (formNovoEmail.invalid) {
      return;
    }

    // criando uma nova instancia e limpando o objeto
    formNovoEmail.resetForm(this.limparEmail());
    this.toogleNewEmailForm();
  }

  limparEmail() {
    this.email = {
      assunto : '',
      destinatario : '',
      conteudo : ''
    }
  }
  
  toogleNewEmailForm() {
    this._isNewEmailFormOpen = !this._isNewEmailFormOpen;
  }

// ctrl + D ou F2 ajuda na refatoracao do codigo

  get isNewEmailFormOpen() {
    return this._isNewEmailFormOpen;
  }
}
