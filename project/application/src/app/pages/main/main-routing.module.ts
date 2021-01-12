import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MainComponent } from '@pages/main/main.component';
import { L10nTranslationModule } from 'angular-l10n';

export const routes: Routes = [
    {
        path: '',
        component: MainComponent,
    },
];

@NgModule({
    imports: [L10nTranslationModule, RouterModule.forChild(routes)],
})
export class MainRoutingModule {}
