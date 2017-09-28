import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { SequencerService } from './sequencer.service';
import { RunService } from './run.service';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpModule
  ],
  providers: [SequencerService, RunService],
  bootstrap: [AppComponent]
})
export class AppModule { }
