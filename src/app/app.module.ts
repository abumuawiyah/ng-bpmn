import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgBpmnEditorModule } from 'ng-bpmn'
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { TextMaskModule } from 'angular2-text-mask';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    NgBpmnEditorModule
    ],
  declarations: [AppComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
