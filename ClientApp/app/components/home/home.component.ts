import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
    selector: 'home-comp',
    templateUrl: './home.component.html'
})
export class HomeComponent implements OnInit, OnDestroy {

    constructor() {
        console.log("HomeComponent => constructor call");
    }

    ngOnInit() {
        console.log("HomeComponent => OnInit call");
    }

    ngOnDestroy() {
        console.log("HomeComponent => OnDestroy call");
    }
}