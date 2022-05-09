import { Component, Input, OnInit } from '@angular/core';
import { Bubble } from '../bubble.type';

@Component({
  selector: 'app-bubble',
  templateUrl: './bubble.component.html',
  styleUrls: ['./bubble.component.scss'],
})
export class BubbleComponent implements OnInit {
  @Input()
  public bubble: Bubble | undefined;

  public isModalOpen: boolean = false;
  constructor() {}

  ngOnInit(): void {}

  toggleModal() {
    this.isModalOpen = !this.isModalOpen;
    
  }
}
