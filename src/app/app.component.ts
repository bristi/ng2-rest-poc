import {Component, OnInit} from '@angular/core';
import { SequencerService } from './sequencer.service';
import { RunService } from './run.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'REST POC';
  sequencers;
  obsRun;
  run;

  constructor(private sequencerService: SequencerService,
              private runService: RunService) {
    this.sequencers = sequencerService.getSequencers();
  }

  ngOnInit(): void {
    this.obsRun = this.runService.getRun();
    this.obsRun.subscribe(run => this.run = run);
  }
}
