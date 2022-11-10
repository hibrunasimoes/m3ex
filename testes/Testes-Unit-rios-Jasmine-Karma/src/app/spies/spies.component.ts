import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-spies',
  templateUrl: './spies.component.html',
  styleUrls: ['./spies.component.css']
})
export class SpiesComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    this.aluno('');
    this.diretor('');
    this.professor('');
  }

  calcular = {
    somar : function(n1: number, n2: number){
      return n1 + n2;
    }
  }

  aluno(value: string):string{
    return value;
  }

  professor(value:string):string{
    return value;
  }

  diretor(value: string):string{
    return value;
  }

  sala():void{
   this.turma('');
  }

 private turma(value: string):string{
    return value;
  }
















}
