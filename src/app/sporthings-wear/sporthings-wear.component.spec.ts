import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SporthingsWearComponent } from './sporthings-wear.component';

describe('SporthingsWearComponent', () => {
  let component: SporthingsWearComponent;
  let fixture: ComponentFixture<SporthingsWearComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SporthingsWearComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SporthingsWearComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
