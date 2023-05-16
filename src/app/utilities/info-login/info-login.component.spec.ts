import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InfoLoginComponent } from './info-login.component';

describe('InfoLoginComponent', () => {
  let component: InfoLoginComponent;
  let fixture: ComponentFixture<InfoLoginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InfoLoginComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InfoLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
