import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss'],
})
export class SidenavComponent {
  @Input() isOpen!: boolean;
  @Output() closeSideNav = new EventEmitter<void>();

  onCloseSideNav() {
    this.closeSideNav.emit();
  }
}
