import { NgModule } from '@angular/core';
import { LayoutModule } from './components/layout/layout.component.module';
import { AppRoutes } from './app.routes';
import { AppComponent } from './app.component';

@NgModule({
    imports: [
        AppRoutes,
        LayoutModule
    ],
    declarations: [
        AppComponent
    ]
})
export class AppModuleShared { }

