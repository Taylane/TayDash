import { Component, OnInit } from '@angular/core';
import { Bubble } from '../bubble.type';
import { ThoughtsService } from '../thoughts.service';

@Component({
  selector: 'app-thoughts',
  templateUrl: './thoughts.component.html',
  styleUrls: ['./thoughts.component.scss'],
})
export class ThoughtsComponent implements OnInit {
  public isModalOpen: boolean = false;
  public bubbles: Bubble[] = new Array();

  constructor(private thougthsService: ThoughtsService) {}

  ngOnInit(): void {
    this.getBubbles();
  }

  getBubbles() {
    ('teste');

    this.thougthsService.getAll().subscribe((res) => (this.bubbles = res));
  }

  toggleModal() {
    this.isModalOpen = !this.isModalOpen;
  }
}
