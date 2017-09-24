import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
    selector: 'sidebar-comp',
    templateUrl: './sidebar.component.html',
    styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit, OnDestroy {

    constructor() {
        console.log("SidebarComponent => constructor call");
    }

    ngOnInit() {
        console.log("SidebarComponent => OnInit call");
    }

    ngOnDestroy() {
        console.log("SidebarComponent => OnDestroy call");
    }
}