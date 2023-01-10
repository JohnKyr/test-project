import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'test-project';
  isSidenavOpen = false;

  openSideNav(): void {
    this.isSidenavOpen = true;
  }

  closeSideNav(): void {
    this.isSidenavOpen = false;
  }
}
