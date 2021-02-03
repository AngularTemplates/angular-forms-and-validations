import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpModuleService } from "./http-module.service";
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
// import {
//     DxButtonGroupModule,
//     DxHtmlEditorModule
// } from 'devextreme-angular';

import "devextreme/ui/html_editor/converters/markdown";

import { HorizontalTimelineComponent } from './horizontal-timeline/horizontal-timeline.component';
// import {
//   MatButtonModule,
//   MatCheckboxModule,
//   MatInputModule,
//   MatSelectModule,
//   MatDatepickerModule,
//   MatNativeDateModule } from '@angular/material/button';

//import { FormsComponent } from './forms/forms.component';
import { FactSheetComponent } from './fact-sheet/fact-sheet.component';
import { TooltipModule } from 'ng2-tooltip-directive';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';


@NgModule({
  declarations: [
    AppComponent,
   // FormsComponent,
    FactSheetComponent,
    HorizontalTimelineComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
     ReactiveFormsModule,
    // MatButtonModule,
    // MatInputModule,
    // MatDatepickerModule,
    // MatNativeDateModule,
    // MatCheckboxModule,
    // MatSelectModule,
    HttpClientModule,// ,
    // DxHtmlEditorModule,
    // DxButtonGroupModule,
    TooltipModule, FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
