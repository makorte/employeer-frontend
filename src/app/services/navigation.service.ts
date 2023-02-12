import { Injectable } from '@angular/core';
import {Router} from "@angular/router";

@Injectable({
  providedIn: 'root'
})
export class NavigationService {

  constructor(private router: Router) { }

  async toEmployees(): Promise<void> {
    await this.router.navigate(['employees'])
  }
}
