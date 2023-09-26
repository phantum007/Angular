import { Component, OnInit  } from '@angular/core';
import { Teams } from '../teams';
import { Teams_list } from '../mock-teams';
import { TeamService } from '../team.service';
import { MessageService } from '../message.service';

@Component({
  selector: 'app-teams',
  templateUrl: './teams.component.html',
  styleUrls: ['./teams.component.css']
})

export class TeamsComponent implements OnInit {
  public selectedTeams?: Teams;
  public team:Teams[] = []

  constructor(private teamsService: TeamService , private messageService: MessageService) {}

  ngOnInit(): void {
    this.getTeams();
  }



  getTeams(): void {
   this.teamsService.getTeams().subscribe(team => this.team = team);
  }

  onSelect(teams: Teams): void {
  this.selectedTeams = teams;
  this.messageService.add(`TeamsComponent: Selected team id=${teams.id}`);
}
}
