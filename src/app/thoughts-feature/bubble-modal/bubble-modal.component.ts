import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Bubble } from '../bubble.type';

@Component({
  selector: 'app-bubble-modal',
  templateUrl: './bubble-modal.component.html',
  styleUrls: ['./bubble-modal.component.scss'],
})
export class BubbleModalComponent implements OnInit {
  @Input()
  public bubble: Bubble | undefined;
  @Output()
  public atCloseModal = new EventEmitter<any>();

  constructor() {}

  ngOnInit(): void {}

  closeModal() {
    this.atCloseModal.emit();
  }
}
