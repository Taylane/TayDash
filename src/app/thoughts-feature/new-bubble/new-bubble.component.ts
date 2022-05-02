import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-new-bubble',
  templateUrl: './new-bubble.component.html',
  styleUrls: ['./new-bubble.component.scss'],
})
export class NewBubbleComponent implements OnInit {
  @Input()
  public bubbleText: string = '';
  constructor() {}

  ngOnInit(): void {}

  public createBubble(newBubble: any) {
    console.log(newBubble,  this.bubbleText);
  
  }
}
