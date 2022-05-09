import {
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
  ViewChild,
} from '@angular/core';
import { NgForm } from '@angular/forms';
import { Bubble } from '../bubble.type';
import { ThoughtsService } from '../thoughts.service';

@Component({
  selector: 'app-new-bubble',
  templateUrl: './new-bubble.component.html',
  styleUrls: ['./new-bubble.component.scss'],
})
export class NewBubbleComponent implements OnInit {
  @Input()
  public bubbleText: string = '';

  @Output()
  public atNewBubble = new EventEmitter<any>();

  @ViewChild('newBubbleForm', { static: false }) newBubbleForm:
    | NgForm
    | undefined;

  constructor(private thougthsService: ThoughtsService) {}

  ngOnInit(): void {}

  public createBubble(newBubble: any) {
    const postBubble = { ...newBubble };

    this.thougthsService
      .post(postBubble)
      .subscribe(() => this.atNewBubble.emit(null));

    this.newBubbleForm?.resetForm();
  }
}
