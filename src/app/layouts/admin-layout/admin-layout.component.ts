import { AfterViewInit, Component, HostListener } from '@angular/core';

declare var $: any

@Component({
  selector: 'app-admin-layout',
  templateUrl: './admin-layout.component.html',
  styleUrl: './admin-layout.component.css'
})
export class AdminLayoutComponent implements AfterViewInit {
  ngAfterViewInit(): void {
    //this.getScreenSize();
  }
}
