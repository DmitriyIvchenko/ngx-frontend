import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from '@modules/shared/shared.module';
import { MainRoutingModule } from '@pages/main/main-routing.module';

import { MainComponent } from '@pages/main/main.component';
import { HeaderModule } from '@modules/components/header/header.module';

@NgModule({
    declarations: [MainComponent],
    imports: [CommonModule, SharedModule, MainRoutingModule, HeaderModule],
})
export class MainModule {}
