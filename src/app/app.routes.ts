import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './modules/login/login.component';
import { CadastroComponent } from './modules/cadastro/cadastro.component';
import { InboxComponent } from './modules/inbox/inbox.component';
import { NgModule } from '@angular/core';
import { AuthGuardGeral } from './shared/auth/auth-guard-geral';

const rotas : Routes = [
    { path: '',
        // component: LoginComponent
        loadChildren: 'src/app/modules/login/login.module#LoginModule'
    },
    { path: 'login', redirectTo: '' },
    // { path: 'cadastro', component: CadastroComponent },
    { path: 'cadastro', loadChildren: 'src/app/modules/cadastro/cadastro.module#CadastroModule' }, // vai carregar sobre demanda, ou seja, somente quando chamar a url http://localhost:4200/cadastro
    { path: 'inbox', component: InboxComponent,
        canActivate: [ AuthGuardGeral ] // passando autenticacao da rota para a pagina do inbox
    },
    { path: '*', redirectTo: ''}, // ou cria uma página 404
];

// export const RouterModuleConfigurado = RouterModule.forRoot(rotas);


// exportando o modulo de roteamento seguindo o padrao da comunidade angular

@NgModule({
    imports: [
        RouterModule.forRoot(rotas)
    ],
    exports: [
        RouterModule
    ]
})
export class ModuloRoteamento {}