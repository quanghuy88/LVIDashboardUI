import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from '../../services/authentication.service';
import { User } from '../../models/user.model';

declare var $: any

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})


export class HeaderComponent {

  public currentUser: User = new User;

  constructor(private authenticationService: AuthenticationService, private router: Router) {
    this.authenticationService.currentUser.subscribe(data => {
      this.currentUser = data;
      //console.log("Header: ", this.currentUser);
    });
  }

  logOut() {
    this.authenticationService.logout();
    this.router.navigate(['/login']);
  }

  onToggleSideBar(event: any) {
    event.preventDefault();
    if ($('.app').hasClass('sidenav-toggled')) {
      $('.app').removeClass('sidenav-toggled');
      if ((document.body.classList.contains("double-menu") || document.body.classList.contains("double-menu-tabs")) && !document.body.classList.contains('horizontal')) {
        if (document.querySelector('.slide-menu') && window.innerWidth >= 992) {
          let slidemenu = document.querySelectorAll('.slide-menu');
          slidemenu.forEach(e => {
            if (e.classList.contains('double-menu-active')) {
              e.classList.remove('double-menu-active')
            }
          })
          let sidemenuActive = document.querySelector('.side-menu__item.active');
          if (sidemenuActive?.nextElementSibling) {
            let submenu = sidemenuActive.nextElementSibling;
            submenu.classList.add('double-menu-active');
            document.body.classList.remove('sidenav-toggled');
          }
          else {
            document.body.classList.add('sidenav-toggled');
          }
        }
      }
    }
    else {
      $('.app').addClass('sidenav-toggled');
      if (innerWidth >= 992) {
        if ((document.body.classList.contains("double-menu") || document.body.classList.contains("double-menu-tabs")) && !document.body.classList.contains('horizontal')) {
          if (document.querySelector('.slide-menu')) {
            let slidemenu = document.querySelectorAll('.slide-menu');
            slidemenu.forEach(e => {
              if (e.classList.contains('double-menu-active')) {
                e.classList.remove('double-menu-active')
              }
            })
          }
        }
      }
    }
  }
}
