import { NgModule, Optional, SkipSelf } from '@angular/core';
import { CommonModule } from '@angular/common';
import { XSRFStrategy, CookieXSRFStrategy } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';

import { throwIfAlreadyLoaded } from './module-import-guard';
import { ApiService } from './api.service';

@NgModule({
    imports: [
        CommonModule,
        HttpClientModule
    ],
    providers: [
        ApiService,
        {
            provide: XSRFStrategy,
            useFactory: xsrfFactory
        }
    ]
})
export class CoreModule {
    constructor( @Optional() @SkipSelf() parentModule: CoreModule) {
        throwIfAlreadyLoaded(parentModule, 'CoreModule');
    }
}
export function xsrfFactory() {
    return new CookieXSRFStrategy('csrftoken', 'X-CSRFToken');
}
