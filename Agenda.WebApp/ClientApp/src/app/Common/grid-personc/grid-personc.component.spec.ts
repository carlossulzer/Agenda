import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { GridPersoncComponent } from './grid-personc.component';


describe('GridPersoncComponent', () => {
  let component: GridPersoncComponent;
  let fixture: ComponentFixture<GridPersoncComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GridPersoncComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GridPersoncComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
