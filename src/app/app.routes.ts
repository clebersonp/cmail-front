import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './modules/login/login.component';
import { CadastroComponent } from './modules/cadastro/cadastro.component';
import { InboxComponent } from './modules/inbox/inbox.component';

const rotas : Routes = [
    { path: '', component: LoginComponent },
    { path: 'login', redirectTo: '' },
    { path: 'cadastro', component: CadastroComponent },
    { path: 'inbox', component: InboxComponent },
    { path: '*', redirectTo: ''}, // ou cria uma página 404
];

export const RouterModuleConfigurado = RouterModule.forRoot(rotas);