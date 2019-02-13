import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CadastroComponent } from './cadastro.component';

const rotasCadastro: Routes = [
    { path: '', component: CadastroComponent } // rota do http://localhost:4200/cadastro/
];

@NgModule({
    imports: [
        RouterModule.forChild(rotasCadastro) // forChild pois posso ter sub rotas de cadastro;
    ],
    exports: [
        RouterModule
    ]
})
export class CadastroRoutesModule {}