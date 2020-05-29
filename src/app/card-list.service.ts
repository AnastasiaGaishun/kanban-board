import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

class Card {
  name: string;
  state: string;
}

@Injectable()
export class CardListService {
  
state = new Subject<Card[]>();
}
