import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShoesWomanComponent } from './shoes-woman.component';

describe('ShoesWomanComponent', () => {
  let component: ShoesWomanComponent;
  let fixture: ComponentFixture<ShoesWomanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShoesWomanComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShoesWomanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
