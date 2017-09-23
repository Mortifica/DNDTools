import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
//import { InputTextModule } from 'primeng/primeng';
import { NpcTrackerComponent } from './npc_tracker.component';

@NgModule({
    imports: [
        BrowserModule,
        //InputTextModule
    ],
    declarations: [NpcTrackerComponent],
    providers: [],
    exports: [NpcTrackerComponent]

})
export class NpcTrackerModule { }