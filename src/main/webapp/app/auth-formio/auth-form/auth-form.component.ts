import { Component, OnInit } from '@angular/core';
import { FormioAuthComponent, FormioAuthService } from 'angular-formio/auth';

@Component({
  selector: 'jhi-auth-form',
  templateUrl: './auth-form.component.html',
  styleUrls: ['./auth-form.component.scss'],
})
export class AuthFormComponent extends FormioAuthComponent implements OnInit {
  constructor(public service: FormioAuthService) {
    super();
  }

  ngOnInit(): void {}
}
