import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { LoginService } from './login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  constructor(
    private httpClient: HttpClient,
    private loginService: LoginService,
    private router: Router) {
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

      const dadosLoginDto = {
            email: this.dadosLogin.email,
            password: this.dadosLogin.senha
          };

      this.loginService.logarUsuario(dadosLoginDto)
        .subscribe(() => {
          console.log('redirecionando para a pagina de inbox');
          this.router.navigate(['/inbox'])
        });
      formLoginEmail.resetForm(this.limparFormularioLogin());
    } else {
      console.log('Força todos os campos a ficarem Touched');
    }
  }

  limparFormularioLogin() {
    this.dadosLogin = {
      email : '',
      senha : ''
    };
  }

}
