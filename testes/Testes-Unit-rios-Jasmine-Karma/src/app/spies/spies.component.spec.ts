import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpiesComponent } from './spies.component';

describe('SpiesComponent', () => {
  let component: SpiesComponent;
  let fixture: ComponentFixture<SpiesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SpiesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SpiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  const calculadora = {
    somar: function(n1: number, n2:number){
      return n1+n2;
    }
  }

  beforeAll(() => {
    spyOn(calculadora, 'somar')
  });
  

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  // it('deve ser avaliado como undefined o metodo somar', () => {
  //   expect(calculadora.somar(1, 2)).toBeUndefined();
  // });

  // it('deve chamar o metodo somar pelo menos uma vez', () => {
  //   calculadora.somar(17,19);

  //   expect(calculadora.somar).toHaveBeenCalled();
  // });

  // it('deve chamar o metodo somar pelo menos 7 vezes', () => {
  //   calculadora.somar(17,19);
  //   calculadora.somar(12,10);
  //   calculadora.somar(1,9);

  //   expect(calculadora.somar).toHaveBeenCalledTimes(5);
  // });

  // it('deve chamar o metodo somar e valdiar seus parametros', () => {
  //   calculadora.somar(17,19);
  //   calculadora.somar(12,10);

  //   expect(calculadora.somar).toHaveBeenCalledWith(17,19);
  //   expect(calculadora.somar).toHaveBeenCalledWith(12,10);
  // });

  it('deve chamar todos os metodos quando o ngOninit for chamado', () => {
    const spies = [
      spyOn(component, 'aluno'),
      spyOn(component, 'diretor'),
      spyOn(component, 'professor'),
    ]

    component.ngOnInit();

    spies.forEach((spy) => expect(spy).toHaveBeenCalled());
  });

  it('deve chamar o metodo privado turma() quando o metodo publico sala()  for chamado', () => {
    const turma = 'turma';
    spyOn<any>(component, 'turma');

    component.sala();
    expect(component[turma]).toHaveBeenCalled();
  });

});
