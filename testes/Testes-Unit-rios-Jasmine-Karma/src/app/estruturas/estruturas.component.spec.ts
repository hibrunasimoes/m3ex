import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EstruturasComponent } from './estruturas.component';

xdescribe('EstruturasComponent', () => {
  let component: EstruturasComponent;
  let fixture: ComponentFixture<EstruturasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EstruturasComponent ],
      imports: [], //modulos
      providers: [] //serviços
    })
    .compileComponents();

    fixture = TestBed.createComponent(EstruturasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges(); //inicializa o componente
  });
  let contador = 0;

  beforeAll(() => {
    contador = 10;
  });
  
  // beforeEach(() => {
  //   contador++;
  // });

  // afterEach(() => {
  //   contador++;
  // });
  
  it('should create', () => {
    expect(component).toBeTruthy();
  });

  // it('deve incrementar o contador para 2 no beforeEach', () => {
  //   expect(contador).toEqual(2);
  // });

  // it('deve incrementar o contador para 1 no afterEach', () => {
  //   expect(contador).toEqual(1); //
  // });

  it('deve incrementar o contador para 10 no beforeAll', () => {
    expect(contador).toEqual(12); 
  });
  

  




});
