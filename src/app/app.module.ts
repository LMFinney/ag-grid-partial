import { NgModule } from '@angular/core';
import { MatTabsModule } from '@angular/material';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AgGridModule } from 'ag-grid-angular';

import { AppComponent } from './app.component';
import { SimpleComponent } from './simple/simple.component';
import { GreetingComponent } from './greeting/greeting.component';
import { TransposedComponent } from './transposed/transposed.component';
import { TransposedDryComponent } from './transposed-dry/transposed-dry.component';
import { TransposedGreetingComponent } from './transposed-greeting/transposed-greeting.component';
import { TransposedGreetingDryComponent } from './transposed-greeting-dry/transposed-greeting-dry.component';

@NgModule({
  declarations: [
    AppComponent,
    SimpleComponent,
    GreetingComponent,
    TransposedComponent,
    TransposedDryComponent,
    TransposedGreetingComponent,
    TransposedGreetingDryComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AgGridModule.withComponents([]),
    MatTabsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
