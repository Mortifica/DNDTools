import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { LayoutRoutes } from './layout.component.routes';
import { HomeModule } from '../home/home.component.module';
import { TokenGeneratorModule } from '../token_generator/token_generator.component.module';
import { NpcTrackerModule } from '../npc_tracker/npc_tracker.component.module';
import { LayoutComponent } from './layout.component';
import { NavMenuComponent } from './navmenu/navmenu.component';

@NgModule({
    imports: [
        BrowserModule,
        CommonModule,
        FormsModule,
        HttpModule,
        RouterModule,
        LayoutRoutes,
        HomeModule,
        TokenGeneratorModule,
        NpcTrackerModule
    ],
    declarations: [
        LayoutComponent,
        NavMenuComponent
    ],
    providers: [ ],
    exports: [LayoutComponent]
})
export class LayoutModule {
}