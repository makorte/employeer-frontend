import {Component} from '@angular/core';
import {NavigationService} from "../../services/navigation.service";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {

  constructor(private navigationService: NavigationService) {
  }

  async onClickEmployees(): Promise<void> {
    await this.navigationService.toEmployees();
  }
}
