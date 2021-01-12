import { Component } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { takeUntil } from 'rxjs/operators';

import { BaseComponent } from '@modules/shared/components/base.component';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
})
export class AppComponent extends BaseComponent {
    constructor(private router: Router) {
        super();
        this.router.events.pipe(takeUntil(this.unsubscribe$)).subscribe(evt => {
            if (evt instanceof NavigationEnd) {
                window.scrollTo(0, 0);
            }
        });
    }
}
