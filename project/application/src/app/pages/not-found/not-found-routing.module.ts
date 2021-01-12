import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NotFoundComponent } from '@pages/not-found/not-found.component';

export const routes: Routes = [
    {
        path: '',
        component: NotFoundComponent,
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
})
export class NotFoundRoutingModule {}
