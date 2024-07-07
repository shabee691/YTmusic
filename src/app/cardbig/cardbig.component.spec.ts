import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardbigComponent } from './cardbig.component';

describe('CardbigComponent', () => {
  let component: CardbigComponent;
  let fixture: ComponentFixture<CardbigComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CardbigComponent]
    });
    fixture = TestBed.createComponent(CardbigComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
