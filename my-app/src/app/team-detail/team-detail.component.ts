import { Component , Input} from '@angular/core';
import { Teams } from '../teams';

@Component({
  selector: 'app-team-detail',
  templateUrl: './team-detail.component.html',
  styleUrls: ['./team-detail.component.css']
})
export class TeamDetailComponent {

  @Input() team?: Teams;
}