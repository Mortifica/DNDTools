import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { TokenGeneratorComponent } from './token_generator.component';
import { GrowlModule, FileUploadModule } from 'primeng/primeng';

@NgModule({
    imports: [
        BrowserModule,
        GrowlModule,
        FileUploadModule
    ],
    declarations: [TokenGeneratorComponent],
    providers: [],
    exports: [TokenGeneratorComponent]

})
export class TokenGeneratorModule { }