import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard-view',
  templateUrl: './dashboard-view.component.html',
  styleUrls: ['./dashboard-view.component.scss']
})
export class DashboardViewComponent implements OnInit {
  public isFault: boolean = false;

  constructor() { }

  ngOnInit() {
    let _self = this;
    setInterval(function() {
      _self.isFault = !_self.isFault;
    }, 1000);
  }

}
