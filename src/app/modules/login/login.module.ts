import { NgModule } from '@angular/core';
import { LoginComponent } from './login.component';
import { CommonModule } from '@angular/common';
import { LoginRoutesModule } from './login-routes.module';

@NgModule({
    declarations: [
        LoginComponent
    ],
    imports: [
        CommonModule,
        LoginRoutesModule
    ],
    exports: [

    ]
})
export class LoginModule {}