import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StationOverviewComponent } from './station-overview/station-overview.component';
import { DashboardViewComponent } from './dashboard-view/dashboard-view.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [StationOverviewComponent, DashboardViewComponent]
})
export class DashboardModule { }
