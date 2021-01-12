import { NgModule, APP_INITIALIZER } from '@angular/core';

import { CoreModule } from '@modules/core/core.module';
import {
    l10nConfig,
    initL10n,
    AppStorage,
    HttpTranslationLoader,
    LocaleValidation,
} from '@app/modules/l10n/l10n.config';
import { L10nTranslationModule, L10nIntlModule, L10nValidationModule, L10nLoader } from 'angular-l10n';
import { SharedModule } from '@modules/shared/shared.module';
import { RoutingModule } from '@modules/routing/routing.module';

import { AppComponent } from './app.component';

@NgModule({
    declarations: [AppComponent],
    imports: [
        L10nTranslationModule.forRoot(l10nConfig, {
            storage: AppStorage,
            translationLoader: HttpTranslationLoader,
        }),
        L10nIntlModule,
        L10nValidationModule.forRoot({ validation: LocaleValidation }),
        CoreModule,
        SharedModule,
        RoutingModule,
    ],
    providers: [
        {
            provide: APP_INITIALIZER,
            useFactory: initL10n,
            deps: [L10nLoader],
            multi: true,
        },
    ],

    bootstrap: [AppComponent],
})
export class AppModule {}
