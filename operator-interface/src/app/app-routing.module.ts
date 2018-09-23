import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import {DashboardViewComponent} from "./modules/dashboard/dashboard-view/dashboard-view.component";
import {RackViewComponent} from './modules/dashboard/rack-view/rack-view.component';

const routes: Routes = [
  { path: '', component: DashboardViewComponent},
  { path: 'rack', component: RackViewComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
