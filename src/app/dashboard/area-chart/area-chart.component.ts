import { NgModule, Component, ViewChild, Inject, enableProdMode } from '@angular/core';
import { DxChartModule, DxSelectBoxModule } from 'devextreme-angular';
import { Population, AreaChartService } from './area-chart.service';
// import * as $ from 'jquery';/

@Component({
  moduleId: module.id,
  selector: 'app-areachart',
  templateUrl: 'area-chart.component.html',
  styleUrls: ['area-chart.component.css']
})
export class AreaChartComponent  {
	populationData: Population[];
  types: string[] = ["area", "stackedarea", "fullstackedarea"];
  format = "millions";

  constructor(areachartservice: AreaChartService) {
    this.populationData = areachartservice.getPopulationData();
  }
  onValueChanged(e) {
    this.format = e.value === this.types[2] ? "percent" : "millions";
  }
}

