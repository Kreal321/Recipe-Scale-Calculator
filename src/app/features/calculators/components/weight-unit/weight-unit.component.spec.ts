import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WeightUnitComponent } from './weight-unit.component';

describe('WeightUnitComponent', () => {
  let component: WeightUnitComponent;
  let fixture: ComponentFixture<WeightUnitComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WeightUnitComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WeightUnitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
