import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { MatchersComponent } from './matchers/matchers.component';
import { EstruturasComponent } from './estruturas/estruturas.component';
import { SpiesComponent } from './spies/spies.component';

@NgModule({
  declarations: [
    AppComponent,
    MatchersComponent,
    EstruturasComponent,
    SpiesComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
