import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StationOverviewComponent } from './station-overview/station-overview.component';
import { DashboardViewComponent } from './dashboard-view/dashboard-view.component';
import {
    IMqttMessage,
    MqttModule,
    IMqttServiceOptions
} from 'ngx-mqtt';
import { RackViewComponent } from './rack-view/rack-view.component';
import { RackOverviewComponent } from './rack-overview/rack-overview.component';

export const MQTT_SERVICE_OPTIONS: IMqttServiceOptions = {
    hostname: '104.238.164.118',
    port: 8083,
    path: '/mqtt'
};



@NgModule({
  imports: [
    CommonModule,
      MqttModule.forRoot(MQTT_SERVICE_OPTIONS)
  ],
  declarations: [StationOverviewComponent, DashboardViewComponent, RackViewComponent, RackOverviewComponent]
})
export class DashboardModule { }
