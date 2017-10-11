import { NgModule } from '@angular/core';
import { LayoutModule } from './components/layout/layout.component.module';
import { AppRoutes } from './app.routes';
import { AppComponent } from './app.component';
import { LocalStorage } from './local.storage';

@NgModule({
    imports: [
        AppRoutes,
        LayoutModule
    ],
    declarations: [
        AppComponent
    ],
    providers: [
        { provide: LocalStorage, useValue: { getItem() { } } }
    ]
})
export class AppModuleShared { }

