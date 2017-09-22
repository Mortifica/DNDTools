import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
    selector: 'npctracker-comp',
    templateUrl: './npc_tracker.component.html'
})
export class NpcTrackerComponent implements OnInit, OnDestroy {

    constructor() {
        console.log("NpcTrackerComponent => constructor call");
    }

    ngOnInit() {
        console.log("NpcTrackerComponent => OnInit call");
    }

    ngOnDestroy() {
        console.log("NpcTrackerComponent => OnDestroy call");
    }
}