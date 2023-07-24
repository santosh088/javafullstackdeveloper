import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WeightlossComponent } from './java.component';

describe('WeightlossComponent', () => {
  let component: WeightlossComponent;
  let fixture: ComponentFixture<WeightlossComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WeightlossComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WeightlossComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
