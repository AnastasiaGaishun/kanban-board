import { Component, OnInit, Input } from '@angular/core';
import { CardListService } from '../card-list.service';

@Component({
  selector: 'app-colomn',
  templateUrl: './colomn.component.html',
  styleUrls: ['./colomn.component.less']
})
export class ColomnComponent implements OnInit {

  constructor(private cardListService: CardListService) { }

  ngOnInit(): void {
    this.cardListService.state.subscribe(state => {

    })
  }

  @Input() data;
}
