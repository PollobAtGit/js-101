import { Component } from '@angular/core'

@Component({
    selector: 'calculate',
    templateUrl: './calculate.component.html',
    styleUrls: ['./calculate.component.css']
})

export class CalculateComponent {

    firstNumber: number;
    secondNumber: number;
    result: number;

    constructor() { }

    add() {

        if (this.skipCalculation()) { return; }

        this.result = this.firstNumber + this.secondNumber;
    }

    sub() {

        if (this.skipCalculation()) { return; }
        this.result = Math.abs(this.firstNumber - this.secondNumber);
    }

    mul() {

        if (this.skipCalculation()) { return; }
        this.result = this.firstNumber * this.secondNumber;
    }


    private skipCalculation() {
        return Number.isNaN(this.firstNumber)
            || !Number.isFinite(this.firstNumber)
            || Number.isNaN(this.secondNumber)
            || !Number.isFinite(this.secondNumber);
    }

}
