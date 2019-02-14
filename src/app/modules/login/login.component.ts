import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  constructor(private httpClient: HttpClient) {
    console.log(httpClient);
  }

  // email sera usado com o way 2 data binding
  dadosLogin = {
    email : '',
    senha : ''
  };

  handleLogarEmail(evento: Event, formLoginEmail: NgForm) {
    console.log("Tentando logar o email: ", formLoginEmail.value);
    console.log("Verificando se o formulario eh valido: ", formLoginEmail.valid);
    if (formLoginEmail.valid) {
      
    }
  }

  limparFormularioLogin() {
    this.dadosLogin = {
      email : '',
      senha : ''
    };
  }

}
