import {Component, Input, OnInit} from '@angular/core';
import {IMqttMessage, MqttService} from 'ngx-mqtt';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-rack-view',
  templateUrl: './rack-view.component.html',
  styleUrls: ['./rack-view.component.scss']
})
export class RackViewComponent implements OnInit {

    public docked: boolean = false;
    public tampering: boolean = false;
    public bikeLocked: boolean = true;

    private subscription: Subscription;
    public message: string;
    public messageBike: string;
    public messageAlarm: string;

    constructor(private _mqttService: MqttService) {
        this.subscription = this._mqttService.observe('elevate/bike').subscribe((message: IMqttMessage) => {
            this.messageBike = message.payload.toString();
            this.docked = this.messageBike === '1';
            console.log(this.docked);
            console.log(this.messageBike);
        });

        this.subscription = this._mqttService.observe('elevate/alarm').subscribe((message: IMqttMessage) => {
            this.messageAlarm = message.payload.toString();
            if (this.messageAlarm === "Tampering Detected!") {
              this.tampering = true;
            }
            console.log(this.messageAlarm);
        });


    }

    ngOnInit() {
        this.unsafePublish('elevate/list', "hello");
    }

    public unsafePublish(topic: string, message: string): void {
        this._mqttService.unsafePublish(topic, message, {qos: 1, retain: true});
    }

    public ngOnDestroy() {
        this.subscription.unsubscribe();
    }

}
