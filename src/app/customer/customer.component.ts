import { Component, OnInit } from '@angular/core';
import { Customer } from 'src/projectmodules/customer';

@Component({
  selector: 'customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent  {
 
  selectedCustomer:Customer=new Customer();
 flag=false;

  carr:Customer[]=[{cname:"komal",cadd:"pune",cmob:"912458623",email:"komal@gmail",pname:"Watch"},
  {cname:"pooja",cadd:"latur",cmob:"926558623",email:"pooja@gmail",pname:"Mobile"},
  {cname:"mona",cadd:"baner",cmob:"982458623",email:"mona@gmail",pname:"Cloth"},
  {cname:"vikas",cadd:"aurangabad",cmob:"972458623",email:"vikas@gmail",pname:"Electrinic Product"},
  {cname:"vishwa",cadd:"Solapur",cmob:"969458623",email:"vishwa@gmail",pname:"Flower"},
  {cname:"seeta",cadd:"Mumbai",cmob:"9782458623",email:"seeta@gmail",pname:"cosmatic"}
];

ngOnInit():void{}

showCustomerDetail(c:Customer)
{
   // console.log(c);
    this.selectedCustomer=c;
    this.flag=!this.flag;
    console.log( this.selectedCustomer);

}

}
