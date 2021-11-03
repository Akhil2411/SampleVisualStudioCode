import { Component, OnInit } from '@angular/core';

import { Info } from '../info';

@Component({
  selector: 'app-event',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.css']
})
export class EventComponent implements OnInit {

  dis=true;
  ss:string='The button was not clicked';


  item:string[]=['monkey','donkey','yakshi'];


  student:Info={};

  server=false;

  variable:string='elephant';





  mathanga:string='sodaKuppi';

  constructor() { 
    console.log('heloooooooooooooooo')
  }

  ngOnInit(): void {
    console.log('Welcome');

    this.student.id=1;
    this.student.address="Kannoor";
    this.student.name="Japanese Anaconda";
    this.student.phone=98979907;


  }


  sooryan(x:any){
    this.dis=!this.dis;



   


  }


  getText(data:any){

    this.ss=data.target.value

  }


  getValues(){
    return 'abc';
  }


  getColor(){
   return this.variable==='maanikan'?'green':'blue';
  }


  getVal(){
    return this.variable==='maanikan';
  }


}
