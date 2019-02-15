import { NgModule } from '@angular/core';
import { InboxComponent } from './inbox.component';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { InboxRoutesModule } from './inbox-routes.module';
import { FormsModule } from '@angular/forms';
import { SharedThingsModule } from 'src/app/shared/shared-things.module';
import { EmailService } from './services/email.service';
import { CmailFormGroupComponent } from 'src/app/components/cmail-form-group/cmail-form-group.component';
import { CmailFormGroupModule } from 'src/app/components/cmail-form-group/cmail-form-group.module';
import { HeaderComponent } from 'src/app/components/header/header.component';

@NgModule({
    declarations:[
        InboxComponent,
        HeaderComponent
    ],
    imports: [
        CommonModule,
        HttpClientModule,
        InboxRoutesModule,
        FormsModule,
        SharedThingsModule,
        CmailFormGroupModule
    ],
    exports: [

    ],
    providers: [
        EmailService
    ]
})
export class InboxModule {}