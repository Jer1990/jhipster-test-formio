import { Component } from '@angular/core';
import { FormioAuthLoginComponent, FormioAuthService } from 'angular-formio/auth';

@Component({
  selector: 'jhi-app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent extends FormioAuthLoginComponent {
  constructor(public service: FormioAuthService) {
    super(service);
    console.log(service.loginForm);
  }
}
