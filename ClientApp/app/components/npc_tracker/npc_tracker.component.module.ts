import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NpcTrackerComponent } from './npc_tracker.component';


@NgModule({
    imports: [
        BrowserModule,
        FormsModule
    ],
    declarations: [NpcTrackerComponent],
    providers: [],
    exports: [NpcTrackerComponent]

})
export class NpcTrackerModule { }