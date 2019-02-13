import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { CmailFormGroupComponent } from 'src/app/components/cmail-form-group/cmail-form-group.component';
import { CmailFormInpuDirective } from 'src/app/components/cmail-form-group/cmail-form-input.directive';
import { CadastroComponent } from './cadastro.component';
import { CommonModule } from '@angular/common';

@NgModule({
    declarations: [
        CmailFormGroupComponent,
        CmailFormInpuDirective,
        CadastroComponent,
    ],
    imports: [
        CommonModule, // E para utilizar o ngIf, ngFor e os pipes etc.....
        ReactiveFormsModule,
        HttpClientModule
    ]
})
export class CadastroModule {}