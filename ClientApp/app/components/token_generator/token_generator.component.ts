import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
    selector: 'token_generator-comp',
    templateUrl: './token_generator.component.html'
})
export class TokenGeneratorComponent implements OnInit, OnDestroy {

    constructor() {
        console.log("TokenGeneratorComponent => constructor call");
    }

    ngOnInit() {
        console.log("TokenGeneratorComponent => OnInit call");
    }

    ngOnDestroy() {
        console.log("TokenGeneratorComponent => OnDestroy call");
    }
}