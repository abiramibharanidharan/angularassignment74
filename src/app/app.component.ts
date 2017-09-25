import { Component,NgModule } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title :string;
  studentName:any[]; 
   // array value declare
   
  
  constructor()
  {
    this.title= 'Student Table';
    this.studentName=['Abirami','Anurag','Nikil','Sripriya','Gayathiri']; // to assign the values of array
  }
   
}