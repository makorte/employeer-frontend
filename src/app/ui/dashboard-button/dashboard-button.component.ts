import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-dashboard-button[icon][label]',
  templateUrl: './dashboard-button.component.html',
  styleUrls: ['./dashboard-button.component.scss']
})
export class DashboardButtonComponent {
  @Input()
  icon: string = "";
  @Input()
  label: string = "";
}
