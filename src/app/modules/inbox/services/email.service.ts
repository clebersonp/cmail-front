import { HttpClient } from "@angular/common/http";
import { Injectable } from '@angular/core';

@Injectable()
export class EmailService {

    constructor( private httpClient: HttpClient ) {}

    criarEmail(emailDto: { to: string, subject: string, content: string }) {
        console.log('Devo criar um email: ', emailDto);
        return this.httpClient.post('http://localhost:3200/emails', emailDto, {
            headers: { autorizations: localStorage.getItem('TOKEN') }
        });
    }

}