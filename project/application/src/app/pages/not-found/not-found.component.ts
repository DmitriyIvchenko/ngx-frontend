import { Component, OnInit, Inject } from '@angular/core';
import { L10N_LOCALE, L10nLocale, L10N_CONFIG, L10nConfig } from 'angular-l10n';

import { BaseComponent } from '@modules/shared/components/base.component';

@Component({
    selector: 'app-not-found',
    templateUrl: './not-found.component.html',
    styleUrls: ['./not-found.component.scss'],
})
export class NotFoundComponent extends BaseComponent implements OnInit {
    constructor(@Inject(L10N_LOCALE) public locale: L10nLocale, @Inject(L10N_CONFIG) private l10nConfig: L10nConfig) {
        super();
    }

    ngOnInit() {
        console.log(this.l10nConfig.providers);
    }
}
