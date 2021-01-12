import { NgModule, LOCALE_ID } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { registerLocaleData } from '@angular/common';
import localeRu from '@angular/common/locales/ru';
import localeFr from '@angular/common/locales/fr';
import { LayoutsModule } from '@modules/core/layouts/layouts.module';

const LOCALE_IDS = {
    RU: 'ru',
    FR: 'fr',
};

registerLocaleData(localeRu, LOCALE_IDS.RU);
registerLocaleData(localeFr, LOCALE_IDS.FR);

@NgModule({
    imports: [BrowserModule, BrowserAnimationsModule, LayoutsModule],
    exports: [LayoutsModule],
    providers: [{ provide: LOCALE_ID, useValue: LOCALE_IDS.RU }],
})
export class CoreModule {}
