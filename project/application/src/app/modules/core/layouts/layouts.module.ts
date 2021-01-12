import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppWrapperComponent } from './app-wrapper/app-wrapper.component';
import { RouterModule } from '@angular/router';
// import { HeaderModule } from '@modules/components/header/header.module';

@NgModule({
    declarations: [AppWrapperComponent],
    imports: [CommonModule, RouterModule],
    exports: [AppWrapperComponent],
})
export class LayoutsModule {}
