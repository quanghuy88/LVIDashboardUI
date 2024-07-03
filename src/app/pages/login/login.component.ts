import { AfterViewInit, Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { NotificationService } from '@progress/kendo-angular-notification';
import { environment } from '../../../environments/environment';
import { AuthenticationService } from '../../services/authentication.service';
import { User } from '../../models/user.model';
import { KendoNotification } from '../../commons/notification/KendoNotification';

declare var $: any

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit, AfterViewInit {

  VERSION: string = environment.VERSION;
  user: User = new User();
  errorMessage: string = "";

  constructor(private authenticationService: AuthenticationService, private router: Router, private notificationService: NotificationService) { }

  ngOnInit(): void {
    if (this.authenticationService.currentUserValue?.fullName) {
      this.router.navigate(['/dashboard']);
      return;
    }
  }

  ngAfterViewInit(): void {
    $(".app").removeClass("light-mode").addClass("login-img");
  }

  login() {
    this.authenticationService.login(this.user).subscribe(
      data => {
        //console.log("user", data);
        if (data.fullName) {
          this.router.navigate(['/dashboard']);
        } else {
          KendoNotification.showError(this.notificationService, data.token);
        }
      }, err => {
        KendoNotification.showError(this.notificationService, "Đăng nhập thất bại. Mã lỗi: " + err.status);
      }
    )
  }

  onSubmit(f: FormGroup) {
    if (f.valid) {
      this.login();
    } else {
      $("#loginForm").addClass("was-validated");
    }
  }

  passwordtoggle() {
    if ($('#password-toggle input').attr("type") == "text") {
      $('#password-toggle input').attr('type', 'password');
      $('#password-toggle i').addClass("zmdi-eye");
      $('#password-toggle i').removeClass("zmdi-eye-off");
    } else if ($('#password-toggle input').attr("type") == "password") {
      $('#password-toggle input').attr('type', 'text');
      $('#password-toggle i').removeClass("zmdi-eye");
      $('#password-toggle i').addClass("zmdi-eye-off");
    }
  }

}
