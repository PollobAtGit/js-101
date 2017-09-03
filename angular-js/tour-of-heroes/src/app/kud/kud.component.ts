import { Component } from "@angular/core";

@Component({
    selector: "app-root",
    templateUrl: "kud.component.html",
    styleUrls: ["./kud.component.css"]
})
export class KudComponent {

    firstName: string = "Tom";
    lastName: string = "Hopkins";
    gender: string = "Male";
    age: number = 10;

    isShowDetails = false;

    employees = [
        { code: "EMP 101", name: "Tom", gender: "Female", annualSalary: 5625.02, dateOfBirth: "9/6/1982" },
        { code: "EMP 102", name: "Alex", gender: "Male", annualSalary: 5.02, dateOfBirth: "9/7/1982" },
        { code: "EMP 103", name: "Mike", gender: "Female", annualSalary: .02, dateOfBirth: "9/8/1982" },
        { code: "EMP 104", name: "Mary", gender: "Male", annualSalary: 0.02, dateOfBirth: "9/9/1982" }
    ];

    mainIdClick(): void {
        this.isShowDetails = !this.isShowDetails;
    }

    mouseOverEvent(): void {
        console.log("Hovered");
    }

    getEmployees(): any {
        return this.employees;
    }

    addEmployee(): void {
        let highestCode = this.employees.length + 1;

        // POI: Pushing is almost same as tracking & ng is intelligent enough to handle that
        this.employees.push({ code: `EMP 10${highestCode}`, name: "X", gender: "XFemale", annualSalary: -100.02, dateOfBirth: "1/1/1900" });
    }

    getNewSetOfEmployees(): any {
        this.employees = [
            { code: "EMP 101", name: "Tom", gender: "Female", annualSalary: 5625.02, dateOfBirth: "9/6/1982" },
            { code: "EMP 102", name: "Alex", gender: "Male", annualSalary: 5.02, dateOfBirth: "9/7/1982" },
            { code: "EMP 103", name: "Mike", gender: "Female", annualSalary: .02, dateOfBirth: "9/8/1982" },
            { code: "EMP 104", name: "Mary", gender: "Male", annualSalary: 0.02, dateOfBirth: "9/9/1982" },
            { code: "EMP 105", name: "X", gender: "X", annualSalary: 0.02, dateOfBirth: "" }
        ];
    }

    trackByEmpCode(e: any) {
        return e.code;
    }
}