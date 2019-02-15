import { HttpClient } from "@angular/common/http";
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';


@Injectable()
export class LoginService {
    constructor(private httpClient: HttpClient) {}

    logarUsuario(dadosDoLoginDto : {email: string, password: string}) {
        return this.httpClient.post('http://localhost:3200/login', dadosDoLoginDto)
        .pipe(
            map((dadosDoServer: any) => {
                localStorage.setItem('TOKEN', dadosDoServer.token);
                console.log("Dados do server: ", dadosDoServer);
                console.log("Roteamento: ");
            })         
        );
    }
}