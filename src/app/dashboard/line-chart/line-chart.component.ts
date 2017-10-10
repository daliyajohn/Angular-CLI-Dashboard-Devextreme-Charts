import { NgModule, Component, ViewChild, Inject, enableProdMode } from '@angular/core';
import { LineChartService } from './line-chart.service';
// import * as $ from 'jquery';/

@Component({
  moduleId: module.id,
  selector: 'app-linechart',
  templateUrl: 'line-chart.component.html',
  styleUrls: ['line-chart.component.css']
})
export class LineChartComponent  {
  constructor() {
  }
}

