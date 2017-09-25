import { NgModule } from '@angular/core';
import { Title } from '@angular/platform-browser';

import {
    GradleForHerokuSharedLibsModule,
    JhiAlertComponent,
    JhiAlertErrorComponent
} from './';

@NgModule({
    imports: [
        GradleForHerokuSharedLibsModule
    ],
    declarations: [
        JhiAlertComponent,
        JhiAlertErrorComponent
    ],
    providers: [
        Title
    ],
    exports: [
        GradleForHerokuSharedLibsModule,
        JhiAlertComponent,
        JhiAlertErrorComponent
    ]
})
export class GradleForHerokuSharedCommonModule {}
