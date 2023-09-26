import { Injectable } from '@angular/core';
import { Teams  } from './teams';
import {  Teams_list } from './mock-teams';
import { Observable, of } from 'rxjs';
import { MessageService } from './message.service';


@Injectable({
  providedIn: 'root'
})
export class TeamService {

  constructor(private messageService: MessageService) { }

  getTeams(): Observable<Teams[]> {
    const teams = of(Teams_list);
    this.messageService.add('TeamService: fetched Teams');
    return teams;
  }
}
