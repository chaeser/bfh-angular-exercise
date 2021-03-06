import {NgModule} from '@angular/core';

import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatTabsModule} from '@angular/material/tabs';

import {AppComponent} from './app.component';
import {FormComponent} from './form/form.component';
import {Task2Component} from './task2/task2.component';
import {ValidationPipe} from './pipes/validation.pipe';

import {ErrorStateMatcher, ShowOnDirtyErrorStateMatcher} from '@angular/material/core';

@NgModule({
  declarations: [
    AppComponent,
    FormComponent,
    Task2Component,
    ValidationPipe,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatToolbarModule,
    MatIconModule,
    MatTabsModule,
  ],
  providers: [
    // validate input fields as soon as the user starts typing
    {provide: ErrorStateMatcher, useClass: ShowOnDirtyErrorStateMatcher},
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
