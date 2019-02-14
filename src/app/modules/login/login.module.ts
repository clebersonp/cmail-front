import { NgModule } from '@angular/core';
import { LoginComponent } from './login.component';
import { CommonModule } from '@angular/common';
import { LoginRoutesModule } from './login-routes.module';
import { FormsModule } from '@angular/forms';
import { SharedThingsModule } from 'src/app/shared/shared-things.module';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
    declarations: [
        LoginComponent
    ],
    imports: [
        CommonModule,
        LoginRoutesModule,
        FormsModule,
        SharedThingsModule,
        HttpClientModule
    ]
})
export class LoginModule {}