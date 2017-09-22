import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { TokenGeneratorComponent } from './token_generator.component';

@NgModule({
    imports: [
        BrowserModule,
    ],
    declarations: [TokenGeneratorComponent],
    providers: [],
    exports: [TokenGeneratorComponent]

})
export class TokenGeneratorModule { }