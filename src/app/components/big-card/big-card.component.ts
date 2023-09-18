import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-big-card',
  templateUrl: './big-card.component.html',
  styleUrls: ['./big-card.component.css'],
})
export class BigCardComponent {
  @Input()
  imgSrc: string = '/assets/images/bt-1.jpg';
  @Input()
  gameType: string = 'Full Game';
  @Input()
  gameConsole: string = 'PS4';
  @Input()
  gamePrice: string = '$59.99';
}
