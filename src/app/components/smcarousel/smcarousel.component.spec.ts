import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SmcarouselComponent } from './smcarousel.component';

describe('SmcarouselComponent', () => {
  let component: SmcarouselComponent;
  let fixture: ComponentFixture<SmcarouselComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SmcarouselComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SmcarouselComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
