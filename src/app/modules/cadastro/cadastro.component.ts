import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

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
      nome: new FormControl('Nome inicial'),
      senha: new FormControl('Senha inicial'),
      avatar: new FormControl('Avatar Incial'),
      usuario: new FormControl('Usuario inicial'),
      telefone: new FormControl('Telefone inicial')
    });
  }


}
