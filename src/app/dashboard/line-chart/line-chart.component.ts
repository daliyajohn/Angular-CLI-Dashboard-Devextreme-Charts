import { NgModule, Component, ViewChild, Inject, enableProdMode } from '@angular/core';
import { LineChartService , CountryInfo, EnergyDescription } from './line-chart.service';
import { DxChartModule, DxSelectBoxModule } from 'devextreme-angular';

@Component({
  moduleId: module.id,
  selector: 'app-linechart',
  templateUrl: 'line-chart.component.html',
  styleUrls: ['line-chart.component.css']
})
export class LineChartComponent  {
  types: string[] = ['line', 'stackedline', 'fullstackedline'];
  countriesInfo: CountryInfo[];
  energySources: EnergyDescription[];

  constructor(service: LineChartService) {
      this.countriesInfo = service.getCountriesInfo();
      this.energySources = service.getEnergySources();
  }

  customizeTooltip(arg) {
      return {
          text: arg.valueText
      }
  }
}

