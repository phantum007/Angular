import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TeamsComponent } from './teams/teams.component';
import { FormsModule } from '@angular/forms';
import { TeamDetailComponent } from './team-detail/team-detail.component';
import { MessagesComponent } from './messages/messages.component'; // <-- NgModel lives here

@NgModule({
  declarations: [
    AppComponent,
    TeamsComponent,
    TeamDetailComponent,
    MessagesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
