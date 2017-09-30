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

@NgModule({
  declarations: [
    DashboardComponent,
    BarChartComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    FlexLayoutModule,
    MdIconModule,
    MdCardModule
  ],
  providers: [DashboardService, BarChartService]
})
export class DashboardModule { }
