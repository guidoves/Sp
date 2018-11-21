import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AltaservicioComponent } from './altaservicio.component';

describe('AltaservicioComponent', () => {
  let component: AltaservicioComponent;
  let fixture: ComponentFixture<AltaservicioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AltaservicioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AltaservicioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
