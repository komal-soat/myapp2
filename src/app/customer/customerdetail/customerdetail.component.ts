import {Component,Input } from '@angular/core';
import { Customer } from 'src/projectmodules/customer';
@Component
({
    selector:"customerdetail",
    templateUrl:'./customerdetail.component.html',
    styleUrls: ['./customerdetail.component.css']

})

export class customerdetail
{
        @Input() customer:Customer;

        @Input() flag:boolean;
}