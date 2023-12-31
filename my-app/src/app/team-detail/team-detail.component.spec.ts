import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TeamDetailComponent } from './team-detail.component';
import { Teams_list } from '../mock-teams';

describe('TeamDetailComponent', () => {
  let component: TeamDetailComponent;
  let fixture: ComponentFixture<TeamDetailComponent>;
  

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TeamDetailComponent]
    });
    fixture = TestBed.createComponent(TeamDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});