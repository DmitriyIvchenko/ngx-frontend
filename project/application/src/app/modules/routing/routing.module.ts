import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppWrapperComponent } from '@modules/core/layouts/app-wrapper/app-wrapper.component';

import { L10nResolver } from 'angular-l10n';

export const routes: Routes = [
    {
        path: '',
        loadChildren: () => import('../../pages/main/main.module').then(m => m.MainModule),
        resolve: { l10n: L10nResolver },
        data: {
            l10nProviders: [{ name: 'main', asset: './assets/i18n/main', options: { version: '0.0.1' } }],
        },
    },
    {
        path: '**',
        loadChildren: () => import('../../pages/not-found/not-found.module').then(m => m.NotFoundModule),
        resolve: { l10n: L10nResolver },
        data: {
            l10nProviders: [{ name: 'not-found', asset: './assets/i18n/not-found', options: { version: '0.0.1' } }],
        },
    },
    {
        path: '',
        redirectTo: 'main',
        pathMatch: 'full',
    },
];

@NgModule({
    imports: [
        RouterModule.forRoot(routes, {
            relativeLinkResolution: 'corrected',
            /* useHash: true */
        }),
    ],
    exports: [RouterModule],
})
export class RoutingModule {}
