import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, ValidationErrors } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent {

  // passando para o html a instancia de FormGroup atraves do variavel formCadastro
  formCadastro: FormGroup;

// injetar o HttpClient -> HttpClientModule para fazer requisicoes async tipo XmlHttpRequest do javascript para carregar a img do avatar

// private no construtor por debaixo dos panos gera um atributo de classe httpClient
  constructor(private httpClient: HttpClient) {
    console.log(httpClient);
    

    // Observable

    // por padrão o retorno de QUALQUER operação do Http Client é o body do reponse, para alterar precisamos passar uma configuração com obj
    // httpClient.head('https://avatars3.githubusercontent.com/u/9445673?s=460&v=4', { observe : 'response' })
    //   .pipe( // Estruturar nossa lógica aqui no meio
    //     map(function(dadoQueVeioDoServer) {
    //       console.log('dadoQueVeioDoServer: ', dadoQueVeioDoServer);
    //       return dadoQueVeioDoServer.status;
    //     })
    // )
    // .subscribe(function(dadoQueVeioDoFluxoQueNesseCasoTemOMap) {
    //   // Estamos se inscrevendo na operação que está acontecendo
    //   // E um gatilho para disparar a requisição
    //   console.log('dadoQueVeioDoMap: ', dadoQueVeioDoFluxoQueNesseCasoTemOMap);
    // });



    // nome será o nome dado para o control no input do html
    this.formCadastro = new FormGroup({
      nome: new FormControl('', [Validators.required, Validators.minLength(3)]),
      username: new FormControl('', [Validators.required]),
      senha: new FormControl('', [Validators.required]),
      telefone: new FormControl('', [Validators.required, Validators.pattern('^[0-9]{4}-?[0-9]{4}[0-9]?$')]),
      avatar: new FormControl('', [Validators.required], this.validaImagen.bind(this)),
    });
  }


  // validaImagem(elementoHtml).subscribe();

  validaImagen(formControl) {
    console.log(formControl);
    const evento = this.httpClient.head(formControl.value), { observe: 'response' })
      .pipe( // Estruturar nossa lógica aqui no meio
           map(function(dadoQueVeioDoServer) {
            const isValidImage = dadoQueVeioDoServer.headers.get('Content-Type').includes('jpeg');
           })
       )
  }


  handleCadastraUsuario() {

    if (this.formCadastro.valid) {
      console.log("Manda para o banco de dados");
    } else {
      // preciso tocar todos os campos para poder validar tbm
      console.log("Faz um redirect");
      const campos = this.formCadastro.controls;
      // const errors: ValidationErrors = this.formCadastro.errors

      
      Object.keys(campos).forEach(function(controlNameCampoAtual) {
        // campos.nome do java = campos[controlNameCampoAtual]
        campos[controlNameCampoAtual].markAsTouched({onlySelf : true});
      })
    }

  }

}
