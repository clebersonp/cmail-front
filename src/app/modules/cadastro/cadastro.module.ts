import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { CadastroComponent } from './cadastro.component';
import { CommonModule } from '@angular/common';
import { CadastroRoutesModule } from './cadastro-routes.module';
import { SharedThingsModule } from 'src/app/shared/shared-things.module';

@NgModule({
    declarations: [
        CadastroComponent
    ],
    imports: [
        CommonModule, // E para utilizar o ngIf, ngFor e os pipes etc.....
        ReactiveFormsModule,
        HttpClientModule,
        CadastroRoutesModule,
        SharedThingsModule
    ]
})
export class CadastroModule {}