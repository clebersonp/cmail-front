import { HttpClient } from "@angular/common/http";
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';

// Criar essa classe para recuperar e converter as informações do servidor
class Email {
    assunto: string;
    destinatario: string;
    conteudo: string;
    dataCriacao: string;
    constructor(assunto, destinatario, conteudo, dataCriacao) {
        this.assunto = assunto;
        this.destinatario = destinatario;
        this.conteudo = conteudo;
        this.dataCriacao = dataCriacao;
    }
}

@Injectable()
export class EmailService {

    API_URL: string = 'http://localhost:3200/emails';
    DEFAULT_HEADERS: object = {
        headers: { authorization: localStorage.getItem('TOKEN') }
    };

    constructor( private httpClient: HttpClient ) {}

    criarEmail(emailDto: { to: string, subject: string, content: string }) {
        console.log('Devo criar um email: ', emailDto);
        return this.httpClient.post(this.API_URL, emailDto, this.DEFAULT_HEADERS).pipe(
            map((dadosDoServer: { subject: string, to: string, content: string, created_at: string }) => {
                return new Email(
                    dadosDoServer.subject,
                    dadosDoServer.to,
                    dadosDoServer.content,
                    dadosDoServer.created_at);
            })
        );
    }

    pegaTodos() {
        return this.httpClient.get(this.API_URL, this.DEFAULT_HEADERS).pipe(
            map((dadosDoServer: Array<{ subject: string, to: string, content: string, created_at: string }>) => {
                console.log(dadosDoServer);
                return dadosDoServer.map((emailQueVeioDoServer) => {
                    return new Email(
                        emailQueVeioDoServer.subject,
                        emailQueVeioDoServer.to,
                        emailQueVeioDoServer.content,
                        emailQueVeioDoServer.created_at
                    );
                })
            })
        );
    }

}