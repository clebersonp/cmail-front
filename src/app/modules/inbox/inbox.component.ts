import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { EmailService } from './services/email.service';

@Component({
  selector: 'app-inbox',
  templateUrl: './inbox.component.html',
  styleUrls: ['./inbox.component.css']
})
export class InboxComponent {
  title = 'cmail-front';
  private _isNewEmailFormOpen = false;

  constructor(private emailService: EmailService) {}

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
    // recuperando a referencia da diretiva(objeto) ngForm passada da view
    if (formNovoEmail.invalid) {
      return;
    }
    
    const emailDTO = {
      to: this.email.destinatario,
      subject: this.email.assunto,
      content: this.email.conteudo
     };
     
      this.emailService.criarEmail(emailDTO)
        .subscribe((dadosDoServer) => {
            console.log(dadosDoServer);
            this.emails.push(this.email);
            eventoDoForm.preventDefault();
            formNovoEmail.resetForm(this.limparEmail());
      });
    
    // mudar o comportamento default do submit para dar refresh em toda pagina

    // criando uma nova instancia e limpando o objeto
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
