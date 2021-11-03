import { Component,ElementRef,ViewChild} from "@angular/core";

@Component({
    selector:'app-sss',
    templateUrl:'./sss.component.html',
})

export class SssComponent{


    sed?:string;
    maan?:string;

    @ViewChild('ref') elem!:ElementRef;

    SedMe(manas:string){

        this.sed=manas;

    }


    // getValue(h:HTMLInputElement){
    //     this.ank=h.value;

    // }
    getValue(){
        this.maan=this.elem.nativeElement.value;

    }
}