import { Injectable } from "@angular/core";
import { CanActivate, Router } from '@angular/router';

@Injectable()
export class AuthGuardGeral implements CanActivate { // configurar tbm no app.routes.ts

    // injetando o sistema de rotas definido no app module
constructor( private router: Router) {}

    canActivate(): boolean {
        if (localStorage.getItem('TOKEN')) {
            console.log('Token é valido, pode seguir!')
            return true;
        } else {
            console.log('Token é invalido, redireciona para pagina de login!')
            this.router.navigate(['/']); // sera redirecionado para a tela de login
            return false;
        }
    }

}