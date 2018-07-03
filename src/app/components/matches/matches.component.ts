import { Component, OnInit } from '@angular/core';
import {MatchService} from '../../match.service';
import {Match} from '../../match';

@Component({
  selector: 'app-matches',
  templateUrl: './matches.component.html',
  styleUrls: ['./matches.component.css']
})
export class MatchesComponent implements OnInit {
  
  matches:Match[]
  constructor(private matchService:MatchService) { }

  ngOnInit() {
    this.getMatches();
  }
  getMatches():void {
    this.matches = this.matchService.getMatches();
  }
  
}
