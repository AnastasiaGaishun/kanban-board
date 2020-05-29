import { Component, OnInit } from '@angular/core';
import { CardListService } from './card-list.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent implements OnInit {

  constructor(private cardListService: CardListService) {}

  title = 'kanban';

  ngOnInit() {
    this.refreshData();
    this.cardListService.state.subscribe(state => {

    });
  }

  onAddCard(card) {
    this.data.push(card);
    // this.refreshData();
    this.cardListService.state.next(this.data);
  }

data = [
    {state: 'new', name: 'Устроиться в IT', date: '05.06.2020'},
    {state: 'progress', name: 'Закончить курсы JavaScript', date: '04.06.2020'},
    {state: 'progress', name: 'Сделать портфолио', date: '12.05.2020'},
    {state: 'done', name: 'Освоить верстку', date: '31.03.2020'},
    {state: 'done', name: 'Составить резюме', date: '06.05.2020'},
    {state: 'done', name: 'Откликнуться на вакансии', date: '06.05.2020'},
  ]

  _new = [];
  _progress = [];
  _done = [];

  refreshData() {
this._new = this.data.filter(x => x.state === 'new');
this._progress = this.data.filter(x => x.state === 'progress');
this._done = this.data.filter(x => x.state === 'done');
  }
}
