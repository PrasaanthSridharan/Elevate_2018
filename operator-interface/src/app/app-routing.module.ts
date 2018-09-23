import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import {DashboardViewComponent} from "./dashboard/dashboard-view/dashboard-view.component";

const routes: Routes = [
  { path: '', component: DashboardViewComponent }
  // { path: 'create', component: PostCreateComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
