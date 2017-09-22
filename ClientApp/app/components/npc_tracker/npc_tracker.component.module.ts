import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NpcTrackerComponent } from './npc_tracker.component';

@NgModule({
    imports: [
        BrowserModule,
    ],
    declarations: [NpcTrackerComponent],
    providers: [],
    exports: [NpcTrackerComponent]

})
export class NpcTrackerModule { }