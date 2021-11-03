import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.css']
})
export class ServerComponent implements OnInit {

  xyz:number=10;

  xz:string='Helloooo I am Akhil sir';

   xxx=false;


   name:string='Akhil';


  constructor() { }

  ngOnInit(): void {
  }

  getValue()
  {
    this.xxx=true;
  }

  Mwonuse(x:any){
    this.name=x.target.value;
    console.log(x.target.value);

  }



}
