import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UnitBtnComponent } from './unit-btn.component';

describe('UnitBtnComponent', () => {
  let component: UnitBtnComponent;
  let fixture: ComponentFixture<UnitBtnComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UnitBtnComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UnitBtnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
