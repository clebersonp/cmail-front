import { NgModule } from '@angular/core';
import { LoginComponent } from './login.component';
import { CommonModule } from '@angular/common';
import { LoginRoutesModule } from './login-routes.module';
import { FormsModule } from '@angular/forms';
import { SharedThingsModule } from 'src/app/shared/shared-things.module';
import { HttpClientModule } from '@angular/common/http';
import { LoginService } from './login.service'

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
    ],
    providers: [
        LoginService // o angular vai gerenciar essa classe de service para nos
    ]
})
export class LoginModule {}