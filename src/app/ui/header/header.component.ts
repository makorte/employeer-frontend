import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-header[title]',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  @Input()
  title:string = ""
}
