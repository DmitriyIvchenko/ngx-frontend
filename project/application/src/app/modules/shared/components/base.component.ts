import { Component, OnDestroy } from '@angular/core';
import { Subject } from 'rxjs';

@Component({
    template: '',
})
export class BaseComponent implements OnDestroy {
    protected unsubscribe$: Subject<boolean> = new Subject<boolean>();

    constructor() {}

    ngOnDestroy() {
        this.unsubscribe$.next(true);
        this.unsubscribe$.unsubscribe();
    }
}
