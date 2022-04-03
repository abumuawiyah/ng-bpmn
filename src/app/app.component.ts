import { Component, OnInit, ViewChild } from '@angular/core';
import { Validators, FormBuilder } from '@angular/forms';
import { BpmnEditorComponent } from 'ng-bpmn';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html'
})
export class AppComponent implements OnInit {
  @ViewChild('ucBpmn') ucBpmn: BpmnEditorComponent;
  public data: any;

  constructor(public fb: FormBuilder,
  private http: HttpClient) {
  }

  ngOnInit() {
    const url = '/assets/default.bpmn';
    this.http.get(url, {
      headers: {observe: 'response'}, responseType: 'text'
    }).subscribe(
      (x: any) => {
        this.ucBpmn.loadXml(x);
      },
      console.log
    );
  }


}