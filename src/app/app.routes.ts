import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';

@NgModule({
  imports: [
    RouterModule.forRoot([
      { path: 'dashboard', component: DashboardComponent },
      { path: '', component: DashboardComponent },
    ])
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
