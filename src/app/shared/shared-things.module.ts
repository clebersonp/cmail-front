import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common'

import { CmailFormGroupModule } from '../components/cmail-form-group/cmail-form-group.module';

@NgModule({
    imports: [
        CommonModule,
        CmailFormGroupModule
    ],
    exports: [
        CmailFormGroupModule
    ]
})
export class SharedThingsModule {}
