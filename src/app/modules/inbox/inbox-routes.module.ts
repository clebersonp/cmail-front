import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InboxComponent } from './inbox.component';

const rotasInbox: Routes = [
    { path: '', component: InboxComponent } // rota do http://localhost:4200/inbox/
];

@NgModule({
    imports: [
        RouterModule.forChild(rotasInbox) // forChild pois posso ter sub rotas de inbox;
    ],
    exports: [
        RouterModule
    ]
})
export class InboxRoutesModule {}