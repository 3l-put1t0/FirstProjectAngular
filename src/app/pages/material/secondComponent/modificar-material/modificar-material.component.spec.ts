import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModificarMaterialComponent } from './modificar-material.component';

describe('ModificarMaterialComponent', () => {
  let component: ModificarMaterialComponent;
  let fixture: ComponentFixture<ModificarMaterialComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModificarMaterialComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModificarMaterialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
