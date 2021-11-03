import { NgModule } from '@angular/core';

import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { SampleComponent } from './sample/sample.component';
import { ServerComponent } from './sample/server/server.component';
import { SssComponent } from './sss/sss.component';
import { TrialComponent } from './trial/trial.component';
import { EventComponent } from './event/event.component';
import { FormsModule } from '@angular/forms';
import { Test1Component } from './test1/test1.component';
import { Test2Component } from './test1/test2/test2.component';




@NgModule({
  declarations: [
    AppComponent,
    SampleComponent,
    TrialComponent,
    ServerComponent,
    SssComponent,
    EventComponent,
    Test1Component,
    Test2Component
    

  ],
  imports: [
    BrowserModule,
    FormsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
