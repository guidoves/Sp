import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TablaclientesComponent } from './tablaclientes.component';

describe('TablaclientesComponent', () => {
  let component: TablaclientesComponent;
  let fixture: ComponentFixture<TablaclientesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TablaclientesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TablaclientesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
