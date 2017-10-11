import { Component, OnInit, OnDestroy, AfterViewInit, Inject } from '@angular/core';
import { Message, FileUpload } from 'primeng/primeng';
import { LocalStorage } from '../../local.storage';

@Component({
    selector: 'token_generator-comp',
    templateUrl: './token_generator.component.html'
})
export class TokenGeneratorComponent implements OnInit, OnDestroy, AfterViewInit {

    private storageName = 'tokenImage';

    msgs: Message[];

    constructor(@Inject(LocalStorage) private localStorage: any) {
        console.log("TokenGeneratorComponent => constructor call");

        // If I ever want to remove the old item...
        //this.localStorage.removeItem(this.storageName);

    }

    ngOnInit() {
        console.log("TokenGeneratorComponent => OnInit call");
    }

    ngAfterViewInit() {
        let file = JSON.parse(this.localStorage.getItem(this.storageName));
        this.drawImage(file)
    }

    ngOnDestroy() {
        console.log("TokenGeneratorComponent => OnDestroy call");
    }

    drawImage(file: any) {
        console.log('DrawImage')
        console.log(file)
        var myCanvas = document.getElementById('canvas') as HTMLCanvasElement;
        if (myCanvas == null) return;
        var ctx = myCanvas.getContext('2d');
        var img = new Image;
        img.src = file.objectURL;
        img.onload = function () {
            if (ctx == null) return;

            // At this point, the image is fully loaded
            // So do your thing!
            console.log('ctx not null')
            ctx.drawImage(img, 0, 0); // Or at whatever offset you like
        };
    }

    onUpload(event: any) {
        let file = event.files[0];
        this.localStorage.setItem(this.storageName, JSON.stringify(file))
        this.drawImage(file)

        // if I ever need to upload multiple files
        //for (let file of event.files) {
        //    this.uploadedFiles.push(file);
        //}

        this.msgs = [];
        this.msgs.push({ severity: 'info', summary: 'File Uploaded', detail: '' });
    }



}