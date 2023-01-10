import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  @Output() openSideNav = new EventEmitter<void>();

  onOpenSideNav(): void {
    console.log('Open sideNav');
    this.openSideNav.emit();
  }
}
