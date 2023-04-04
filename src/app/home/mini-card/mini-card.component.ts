import {Component, OnInit, Input} from '@angular/core';
import {MiniCard} from '../../models/mini-card.model';

@Component({
  selector: 'app-mini-card',
  templateUrl: './mini-card.component.html',
  styleUrls: ['./mini-card.component.css']
})
export class MiniCardComponent {
@Input() miniCards!: MiniCard;
}
