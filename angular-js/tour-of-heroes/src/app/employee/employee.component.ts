import { Component } from '@angular/core'

@Component({
    // POI: 'app-root' because Employee is used as the start up element
    selector: "app-root",
    templateUrl: "employee.component.html"
})

export class EmployeeComponent {
    firstName: string = "John";
    lastName: string = "Midrik";
    gender: string = "Male";
    age: number = 10;

    webPage: string = "https://www.w3schools.com/css/img_fjords.jpg";

    getFullName(): string {
        return this.firstName + " " + this.lastName;
    }
}