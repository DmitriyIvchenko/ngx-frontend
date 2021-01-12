import { Component, Inject, ChangeDetectionStrategy } from '@angular/core';
import { L10N_LOCALE, L10nLocale } from 'angular-l10n';

import { BaseComponent } from '@modules/shared/components/base.component';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeaderComponent extends BaseComponent {
    constructor(@Inject(L10N_LOCALE) public locale: L10nLocale) {
        super();
    }
}
