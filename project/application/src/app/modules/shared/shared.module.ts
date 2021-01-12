import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { L10nTranslationModule } from 'angular-l10n';

const LIBRARIES = [];
const MODULES = [L10nTranslationModule];
const SERVICES = [];
const DIRECTIVES = [];

@NgModule({
    imports: [CommonModule, RouterModule, HttpClientModule, ...LIBRARIES, ...MODULES],
    declarations: [...DIRECTIVES],
    providers: [...SERVICES],
    exports: [CommonModule, RouterModule, ...MODULES, ...DIRECTIVES],
})
export class SharedModule {}
