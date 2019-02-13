import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common'

import { CmailFormGroupComponent } from '../components/cmail-form-group/cmail-form-group.component';
import { CmailFormInpuDirective } from '../components/cmail-form-group/cmail-form-input.directive';

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
export class SharedThingsModule {}
