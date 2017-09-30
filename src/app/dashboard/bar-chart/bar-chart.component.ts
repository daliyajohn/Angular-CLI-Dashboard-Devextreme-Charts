import { NgModule, Component, ViewChild, Inject, enableProdMode } from '@angular/core';
import { BarChartService , Data} from './bar-chart.service';
import * as $ from 'jquery';

@Component({
  moduleId: module.id,
  selector: 'app-barchart',
  templateUrl: 'bar-chart.component.html',
  styleUrls: ['bar-chart.component.css']
})
export class BarChartComponent  {
  dataSource: Data[];
  constructor(service: BarChartService) {
    this.dataSource = service.getData();
  }
}

