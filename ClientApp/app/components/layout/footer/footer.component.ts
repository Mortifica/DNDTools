import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
    selector: 'footer-comp',
    templateUrl: './footer.component.html',
    styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit, OnDestroy {

    constructor() {
        console.log("FooterComponent => constructor call");
    }

    ngOnInit() {
        console.log("FooterComponent => OnInit call");
    }

    ngOnDestroy() {
        console.log("FooterComponent => OnDestroy call");
    }
}