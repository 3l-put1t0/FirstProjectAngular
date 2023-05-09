import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InscripcionesComponentComponent } from './inscripciones-component.component';

describe('InscripcionesComponentComponent', () => {
  let component: InscripcionesComponentComponent;
  let fixture: ComponentFixture<InscripcionesComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InscripcionesComponentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InscripcionesComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
