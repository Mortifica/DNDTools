import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
    selector: 'layout-comp',
    templateUrl: './layout.component.html',
    styleUrls: ['./layout.component.css']
})
export class LayoutComponent implements OnInit, OnDestroy {

    constructor() {
        console.log("LayoutComponent => constructor call");
    }

    ngOnInit() {
        console.log("LayoutComponent => OnInit call");
    }

    ngOnDestroy() {
        console.log("LayoutComponent => OnDestroy call");
    }
}