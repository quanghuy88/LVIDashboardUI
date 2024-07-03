import { AfterViewInit, Component } from '@angular/core';
import { environment } from '../../../environments/environment';

declare var $: any

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})

export class FooterComponent implements AfterViewInit {

  VERSION: string = environment.VERSION;

  ngAfterViewInit(): void {
    if (!document.querySelector('.login-img')) {
      $("#year").html(new Date().getFullYear());
    }
  }

}