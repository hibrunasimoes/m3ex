import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-matchers',
  templateUrl: './matchers.component.html',
  styleUrls: ['./matchers.component.css']
})
export class MatchersComponent implements OnInit {
  numero!: number;
  constructor() { }

  ngOnInit(): void {
  }

  multiplicar(): number{
    if (this.numero <= 0){
      throw new TypeError("deve ser maior que o")
    }
    return this.numero * this.numero
  }

  soma(n1:number, n2:number):number{
    if(n1 <=0 || n2 <= 0){
      throw new TypeError("deve ser maior que o")
    }
    return n1+n2;
  }

  transform(value:string): string{
    if(!value){
      return '-';
    }
    return value;
  }

  transformNull(value:null): null{
    if(!value){
      return null;
    }
    return value;
  }

  fruits(): string[]{
    return ["maçã", "pera", "jaboticaba", "melância", "carambola"];
  }

  shouldBeGreater(): number{
    return 20;
  }

  

}
