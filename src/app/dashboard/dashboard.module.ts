import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { FlexLayoutModule } from '@angular/flex-layout';
import { DashboardComponent } from './dashboard.component';
import { DashboardService } from './dashboard.service';
import { MdIconModule } from '@angular/material';
import { MdCardModule } from '@angular/material';
import { BarChartComponent } from './bar-chart/bar-chart.component';
import { BarChartService } from './bar-chart/bar-chart.service';

import { Bar1ChartComponent } from './bar-chart1/bar-chart1.component';
import { Bar1ChartService } from './bar-chart1/bar-chart1.service';
import { Bar2ChartComponent } from './bar-chart2/bar-chart2.component';
import { Bar2ChartService } from './bar-chart2/bar-chart2.service';
import { DxChartModule } from 'devextreme-angular';
import { Bar3ChartComponent } from './bar-chart3/bar-chart3.component';
import { Bar3ChartService } from './bar-chart3/bar-chart3.service';

import { AreaChartComponent } from './area-chart/area-chart.component';
import { AreaChartService } from './area-chart/area-chart.service';
import { LineChartComponent } from './line-chart/line-chart.component';
import { LineChartService } from './line-chart/line-chart.service';
import { DxSelectBoxModule } from 'devextreme-angular';

@NgModule({
  declarations: [
    DashboardComponent,
    BarChartComponent,
    Bar1ChartComponent,
    Bar2ChartComponent,
    Bar3ChartComponent,
    AreaChartComponent,
    LineChartComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    FlexLayoutModule,
    MdIconModule,
    MdCardModule,
    DxChartModule,
    DxSelectBoxModule
  ],
  providers: [
    DashboardService,
    BarChartService,
    Bar1ChartService,
    Bar2ChartService,
    Bar3ChartService,
    AreaChartService,
    LineChartService
  ]
})
export class DashboardModule { }
