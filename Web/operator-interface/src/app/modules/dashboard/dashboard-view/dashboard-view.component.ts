import {Component, OnInit} from '@angular/core';
import {Subscription} from 'rxjs';
import {IMqttMessage, MqttService} from 'ngx-mqtt';

@Component({
    selector: 'app-dashboard-view',
    templateUrl: './dashboard-view.component.html',
    styleUrls: ['./dashboard-view.component.scss']
})
export class DashboardViewComponent implements OnInit {
    public isFault = false;

    private subscription: Subscription;
    public message: string;

    constructor(private _mqttService: MqttService) {
        this.subscription = this._mqttService.observe('elevate/alarm').subscribe((message: IMqttMessage) => {
            this.message = message.payload.toString();
        });
    }

    ngOnInit() {

        let sendingMessage = {
            payload: 'Hello'
        };

        this.unsafePublish('elevate/list', sendingMessage.toString());
    }

    public unsafePublish(topic: string, message: string): void {
        this._mqttService.unsafePublish(topic, message, {qos: 1, retain: true});
    }

    public ngOnDestroy() {
        this.subscription.unsubscribe();
    }

}
