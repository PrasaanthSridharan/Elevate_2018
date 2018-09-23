import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-rack-overview',
  templateUrl: './rack-overview.component.html',
  styleUrls: ['./rack-overview.component.scss']
})
export class RackOverviewComponent implements OnInit {
  @Input('data') data: object;
  constructor() { }

  ngOnInit() {
  }

}
