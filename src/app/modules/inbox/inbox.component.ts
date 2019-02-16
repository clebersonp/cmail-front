import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { EmailService } from './services/email.service';

@Component({
  selector: 'app-inbox',
  templateUrl: './inbox.component.html',
  styleUrls: ['./inbox.component.css']
})
export class InboxComponent implements OnInit {
  
  title = 'cmail-front';
  private _isNewEmailFormOpen = false;
  emails = [];
  // email sera usado com o way 2 data binding
  email = {
    assunto : '',
    destinatario : '',
    conteudo : '',
    dataCriacao: ''
  };

  constructor(private emailService: EmailService) {}

  ngOnInit() { // é executado logo apos carregar os componentes da pagina, depois do constructor
    console.log("Carregando os email do server");
    this.emailService.pegaTodos().subscribe((emailsDoServer) => {
      this.emails = emailsDoServer;
    });
  }

  handleCriarEmail(eventoDoForm: Event, formNovoEmail: NgForm) {
    // recuperando a referencia da diretiva(objeto) ngForm passada da view
    eventoDoForm.preventDefault();
    if (formNovoEmail.invalid) {
      return;
    }
    
    const emailDTO = {
      to: this.email.destinatario,
      subject: this.email.assunto,
      content: this.email.conteudo
     };
     
      this.emailService.criarEmail(emailDTO)
        .subscribe((emailDoServer) => {
            console.log("Dados do server", emailDoServer);
            this.emails.push(emailDoServer);
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
      conteudo : '',
      dataCriacao: ''
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
