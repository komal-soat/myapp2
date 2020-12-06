import { Component } from '@angular/core';

@Component({
  selector: 'product',
 templateUrl: './product.component.html',
 //template:`<h1>Welcom To Anguler!</h1>
 //<h2>{{title}} This is my First Project</h2>`,
 styleUrls: ['./product.component.css']
// styles:['h1{color:red}','h2{color:blue}']

})


export class productcomponent
{
  parr=[{id:61,name:'Watch',price:2000,quentity:2},
{id:62,name:'mobile',price:19000,quentity:2},
{id:63,name:'TV',price:340000,quentity:2},
{id:64,name:'Electronic',price:4000,quentity:2}
]
}