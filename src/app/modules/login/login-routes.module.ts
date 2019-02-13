import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login.component';

const rotasLogin: Routes = [
    { path: '', component: LoginComponent } // rota do http://localhost:4200/login/
];

@NgModule({
    imports: [
        RouterModule.forChild(rotasLogin) // forChild pois posso ter sub rotas de login;
    ],
    exports: [
        RouterModule
    ]
})
export class LoginRoutesModule {}