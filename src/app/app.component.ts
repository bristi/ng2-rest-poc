import { Component } from '@angular/core';
import { SequencerService } from './sequencer.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'REST POC';
  sequencers;

  constructor(private sequencerService: SequencerService) {
    this.sequencers = sequencerService.getSequencers();
  }
}
