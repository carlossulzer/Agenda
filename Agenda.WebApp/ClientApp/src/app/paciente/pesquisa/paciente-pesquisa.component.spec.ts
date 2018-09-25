import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PacientePesquisaComponent } from './paciente-pesquisa.component';

describe('PacientePesquisaComponent', () => {
  let component: PacientePesquisaComponent;
  let fixture: ComponentFixture<PacientePesquisaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PacientePesquisaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PacientePesquisaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
