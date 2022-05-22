import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AvilableflightsComponent } from './avilableflights.component';

describe('AvilableflightsComponent', () => {
  let component: AvilableflightsComponent;
  let fixture: ComponentFixture<AvilableflightsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AvilableflightsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AvilableflightsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
