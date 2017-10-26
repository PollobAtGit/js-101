import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { PostComponent } from "./Post.component";

@Component({
    selector: 'an',
    template: `<h1>{{s}}</h1>`
})
export class InputComponent implements OnChanges {
    @Input() s: string;

    ngOnChanges(changes: SimpleChanges) {
        for (let c in changes) {
            let change = changes[c];
            console.log("C: " + JSON.stringify(change.currentValue) + " => P: " + JSON.stringify(change.previousValue));
        }
    }
}
