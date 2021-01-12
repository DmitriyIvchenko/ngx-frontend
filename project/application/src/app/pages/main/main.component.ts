import { Component, OnInit, Inject } from '@angular/core';
import { L10N_LOCALE, L10nLocale, L10N_CONFIG, L10nConfig } from 'angular-l10n';

import { BaseComponent } from '@modules/shared/components/base.component';

@Component({
    selector: 'app-main',
    templateUrl: './main.component.html',
    styleUrls: ['./main.component.scss'],
})
export class MainComponent extends BaseComponent implements OnInit {
    constructor(@Inject(L10N_LOCALE) public locale: L10nLocale, @Inject(L10N_CONFIG) private l10nConfig: L10nConfig) {
        super();
    }

    ngOnInit() {
        console.log(this.l10nConfig.providers);
    }
}
