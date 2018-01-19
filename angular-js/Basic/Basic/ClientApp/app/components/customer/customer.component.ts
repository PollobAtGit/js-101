import { Component, Inject } from '@angular/core';
import { Customer } from '../app/class/customer';
//import { CUSTOMERS } from '../app/dummydata/customerdata';
import { Http } from '@angular/http';

@Component({
    selector: 'app-customer',
    templateUrl: './customer.component.html'
})

export class CustomerComponent {

    customers: Customer[];
    curPage: number = 1;

    constructor(http: Http, @Inject('BASE_URL') baseUrl: string) {
        http
            .get(baseUrl + "api/Customer/GetCustomers")
            .subscribe(x =>
                this.customers = x.json() as Customer[]
                , x => console.log(x));
    }
}

/*
*/