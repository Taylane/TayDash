import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BubbleModalComponent } from './bubble-modal.component';

describe('BubbleModalComponent', () => {
  let component: BubbleModalComponent;
  let fixture: ComponentFixture<BubbleModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BubbleModalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BubbleModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
