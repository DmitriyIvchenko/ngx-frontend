import { NgModule } from '@angular/core';
import { SharedModule } from '@modules/shared/shared.module';

import { HeaderComponent } from './header.component';

@NgModule({
    declarations: [HeaderComponent],
    imports: [SharedModule],
    exports: [HeaderComponent],
})
export class HeaderModule {}
