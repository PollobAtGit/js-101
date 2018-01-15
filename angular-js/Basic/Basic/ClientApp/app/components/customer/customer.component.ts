import { Component } from '@angular/core';
import { customer } from '../app/class/customer';
import { CUSTOMERS } from '../app/dummydata/customerdata';

@Component({
    selector: 'app-customer',
    templateUrl: './customer.component.html'
})

export class CustomerComponent {

    customers: customer[];
    constructor() {
        this.customers = CUSTOMERS;
    }
}