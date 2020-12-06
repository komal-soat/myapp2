import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
 templateUrl: './app.component.html',
 //template:`<h1>Welcom To Anguler!</h1>
 //<h2>{{title}} This is my First Project</h2>`,
 styleUrls: ['./app.component.css']
// styles:['h1{color:red}','h2{color:blue}']
})
export class AppComponent {
  title = 'myapp2';
}
