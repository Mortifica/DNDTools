import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
    selector: 'nav-menu',
    templateUrl: './navmenu.component.html',
    styleUrls: ['./navmenu.component.css']
})
export class NavMenuComponent implements OnInit, OnDestroy {

    constructor() {
        console.log("NavMenuComponent => constructor call");
    }

    ngOnInit() {
        console.log("NavMenuComponent => OnInit call");
    }

    ngOnDestroy() {
        console.log("NavMenuComponent => OnDestroy call");
    }
}