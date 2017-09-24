import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
    selector: 'topbar-comp',
    templateUrl: './topbar.component.html',
    styleUrls: ['./topbar.component.css']
})
export class TopbarComponent implements OnInit, OnDestroy {

    constructor() {
        console.log("TopbarComponent => constructor call");
    }

    ngOnInit() {
        console.log("TopbarComponent => OnInit call");
    }

    ngOnDestroy() {
        console.log("TopbarComponent => OnDestroy call");
    }
}