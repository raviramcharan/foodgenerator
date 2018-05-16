import { Injectable } from '@angular/core';

import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { MessageService } from './message.service';


import { Tips } from './tips';
import { TIPSTRICKS } from './mock-tips';

@Injectable()
export class TipsService {

  constructor(private messageService: MessageService) { }

  getTipsTricks(): Observable<Tips[]> {
    // Todo: send the message after fetching the heroes
    this.messageService.add('TipsService: fetched tipstricks');
    return of(TIPSTRICKS);
  }

    getTips(id: number): Observable<Tips> {
    // Todo: send the message after fetching the hero
    this.messageService.add(`TipsService: fetched tips id=${id}`);
    return of(TIPSTRICKS.find(tips => tips.id === id));
  }
}
