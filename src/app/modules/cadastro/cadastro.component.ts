import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent {

  // passando para o html a instancia de FormGroup atraves do variavel formCadastro
  formCadastro: FormGroup;

  constructor() {
    // nome será o nome dado para o control no input do html
    this.formCadastro = new FormGroup({
      nome: new FormControl('', [Validators.required]),
      username: new FormControl('', [Validators.required]),
      senha: new FormControl('', [Validators.required]),
      avatar: new FormControl('', [Validators.required]),
      telefone: new FormControl('', [Validators.required])
    });
  }

  handleCadastraUsuario() {

    if (this.formCadastro.valid) {
      console.log("Manda para o banco de dados");
    } else {
      // preciso tocar todos os campos para poder validar tbm
      console.log("Faz um redirect");
      const campos = this.formCadastro.controls;
      Object.keys(campos).forEach(function(controlNameCampoAtual) {
        // campos.nome do java = campos[controlNameCampoAtual]
        campos[controlNameCampoAtual].markAsTouched({onlySelf : true});
      })
    }

  }

}
