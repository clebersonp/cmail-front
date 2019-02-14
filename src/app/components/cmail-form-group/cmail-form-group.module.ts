import { NgModule } from '@angular/core';
import { CmailFormGroupComponent } from './cmail-form-group.component';
import { CmailFormInpuDirective } from './cmail-form-input.directive';
import { CommonModule } from '@angular/common';

@NgModule({
    declarations: [
        CmailFormGroupComponent,
        CmailFormInpuDirective
    ],
    imports: [
        CommonModule
    ],
    exports: [
        CmailFormGroupComponent,
        CmailFormInpuDirective
    ]
})
export class CmailFormGroupModule {}