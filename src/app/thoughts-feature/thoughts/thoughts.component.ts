import { Component, OnInit } from '@angular/core';
import { Bubble } from '../bubble.type';
import { ThoughtsService } from '../thoughts.service';

@Component({
  selector: 'app-thoughts',
  templateUrl: './thoughts.component.html',
  styleUrls: ['./thoughts.component.scss'],
})
export class ThoughtsComponent implements OnInit {
  constructor(private thougthsService: ThoughtsService) {}

  public bubbles: Bubble[] = new Array();

  ngOnInit(): void {
    this.thougthsService.getAll().subscribe((res) => (this.bubbles = res));
  }
}
