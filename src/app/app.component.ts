import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  title:string = 'ANGULAR CRUD';
  
  employees = [
    {name: 'Fazt', position: 'manager'},
    {name: 'Isaac', position: 'Designer'},
    {name: 'Maria', position: 'Programmer'}
  ];

  model:any = {};
  model2:any = {};
  msg:string = '';
  hideUpdate:boolean = true;  

  addEmployee():void{
    this.employees.push(this.model);
    this.model = {};
    this.msg = 'Record is successfully Added';
  }

  deleteEmployee(i):void {
    this.employees.splice(i, 1);
    this.msg = 'Record is successfully Delete';
  }

  myValue;
  editEmployee(i){
    this.hideUpdate = false;
    this.model2.name = this.employees[i].name;
    this.model2.position = this.employees[i].position;
    this.myValue = i;  
  }

  updateEmployee(){
    let i = this.myValue;
    for(let j=0; j <this.employees.length; j++){
      if(i == j){
        this.employees[i] = this.model2;
        this.model2 = {};
        this.msg = 'Record is successfully Updated';
      }
    }
    this.hideUpdate = true;
  }

  closeAlert(){
    this.msg = '';
  }

}
