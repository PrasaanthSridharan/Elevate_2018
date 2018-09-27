import {Component, Input, OnInit} from '@angular/core';
import {Router} from '@angular/router';

@Component({
    selector: 'app-station-overview',
    templateUrl: './station-overview.component.html',
    styleUrls: ['./station-overview.component.scss']
})
export class StationOverviewComponent implements OnInit {
    @Input('data') data: object;

    public colorStyle: string = "green";
    private id:string;

    constructor(public router: Router) {

    }

    ngOnInit() {
        this.id = this.data['id'];
    }

    alternateColor() {
        console.log(this.colorStyle);
        this.colorStyle = this.colorStyle == "green"? "red" : "green";
    }

    onClick() {
        this.router.navigate(['/rack']);
    }

}
