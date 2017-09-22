import { NgModule } from '@angular/core';
import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LayoutComponent } from './layout.component';
import { HomeComponent } from '../home/home.component';
import { TokenGeneratorComponent } from '../token_generator/token_generator.component';
import { NpcTrackerComponent } from '../npc_tracker/npc_tracker.component';

const routes: Routes = [
    { path: '', redirectTo: 'Home', pathMatch: 'full' },
    { path: 'Home', component: HomeComponent },
    { path: 'TokenGenerator', component: TokenGeneratorComponent },
    { path: 'NpcTracker', component: NpcTrackerComponent }
];

export const LayoutRoutes: ModuleWithProviders = RouterModule.forRoot(routes);