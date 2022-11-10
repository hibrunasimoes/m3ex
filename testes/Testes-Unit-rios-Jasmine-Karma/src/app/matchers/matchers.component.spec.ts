import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MatchersComponent } from './matchers.component';

describe('MatchersComponent', () => {
  let component: MatchersComponent;
  let fixture: ComponentFixture<MatchersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MatchersComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(MatchersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('deve validar o matcher toEqual', () => {
    const aluno = { value: true };
    const professor = { value: true };

    expect(aluno).toEqual(professor);
  });

  it('validar o uso do toBe', () => {
    const aluno = { value: true };
    const professor = { value: true };

    //expect(aluno).toBe(professor); //vai quebrar
    expect(aluno).toBe(aluno); //vai passar
  });

  it('validar o uso do toMatch - CEP', () => {
    const cep = "12345-678";
    const texto = "oi turma";
    expect(texto).toMatch(/oi turma$/);

    expect(cep).toMatch(/^\d{5}-\d{3}$/);
  });

  it('validar o uso do toBeDefined', () => {
    let nota = 10;
    expect(nota).toBeDefined();
  });

  it('validar o uso do toBeUndefined', () => {
    let nota;
    expect(nota).toBeUndefined();
  });

  it('validar o uso do toBeNull', () => {
    let nota = null;
    expect(nota).toBeNull();
  });

  it('validar o uso do toBeTrue', () => {
    let nota = true;
    expect(nota).toBeTrue();
  });

  it('validar o uso do toBeTruthy', () => {
    let nota = true;
    expect(nota).toBeTruthy();
  });

  it('validar o uso do toBeFalse', () => {
    let nota = false;
    expect(nota).toBeFalse();
  });

  it('validar o uso do not', () => {
    let nota = true;
    expect(nota).not.toBeFalse();
  });

  it('validar o uso do toContain', () => {
    let frutas = ["laranja", "pera", "uva"];
    //expect(frutas).toContain("banana"); vai quebrar
    expect(frutas).toContain("laranja"); //vai passar 
  });

  it('validar o uso do toBeLessThan', () => {
    let pi = 3.1415;
    expect(pi).toBeLessThan(10);
  });

  it('validar o uso do toBeGreaterThan', () => {
    let pi = "20";
    expect(pi).toBeGreaterThan(10);
  });

  it('validar o uso do toThrow', () => {
    expect(component.multiplicar).toThrow();
  });

  it('validar o uso do toThrowError', () => {
   expect(function () {component.soma(0,0)}).toThrowError(TypeError); //tipo da exceção
   expect(function () {component.soma(0,0)}).toThrowError("deve ser maior que o"); //valor da mensagem contida 
   expect(function () {component.soma(0,0)}).toThrowError(/maior que/);
  });

  it('validar o value quando o metodo transform foi chamado',() => {
    expect(component.transform('0')).toBe('0');
  });

  it('validar o value quando o metodo transformNull foi chamado',() => {
    expect(component.transformNull(null)).toBeNull();
  });

  it('validar se todas as frutas estão contida no array', () => {
    expect(component.fruits()).toContain("jaboticaba");
    expect(component.fruits()).toContain("maçã");
    expect(component.fruits()).toContain("pera");
    expect(component.fruits()).toContain("melância");
    expect(component.fruits()).toContain("carambola");
  });

  it('validar se 20 é maior que 19', () => {
    expect(component.shouldBeGreater()).toBeGreaterThan(19);
  });







});
