import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css'],
})
export class CardComponent {
  @Input()
  cardImage: string = '';
  @Input()
  cardLabel: string = '';
  @Input()
  cardTitle: string = '';
  @Input()
  cardConsole: string = '';
  @Input()
  cardPrice: string = '';
}
