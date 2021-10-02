import { Component, OnInit } from '@angular/core';
//import { Arithematic } from 'Seema/ArithematicServer';
//import { Arithematic } from '@angular/core/seema/ArithematicServer';
//import { Arithematic } from '@angular/seema/ArithematicServer';
//import { Arithematic } from '@angular/ArithematicServer';
//import { Arithematic } from '@angular/core';


@Component({
  selector: 'app-demo-component',
  templateUrl: './demo-component.component.html',
  styleUrls: ['./demo-component.component.css']
})
export class DemoComponentComponent implements OnInit {

  // ret : number = 0;
  // obj1 = new Arithematic(10, 11);
  // obj2 = new Arithematic(20,11);
  name : string = "";
  fun(value : string)
  {
      return this.name = value;
  }
  
  constructor() 
  {
    // this.ret = this.obj1.Addition();
    // console.log("Addition of obj1 is : ", this.ret);
    
    // this.ret = this.obj2.Addition();
    // console.log("Addition of obj2 is : ",this.ret);
  }

  ngOnInit(): void {
  }

}
