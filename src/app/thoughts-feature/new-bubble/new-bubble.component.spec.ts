import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewBubbleComponent } from './new-bubble.component';

describe('NewBubbleComponent', () => {
  let component: NewBubbleComponent;
  let fixture: ComponentFixture<NewBubbleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewBubbleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NewBubbleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
