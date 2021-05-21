import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormioAuth, FormioAuthRoutes } from 'angular-formio/auth';
import { LoginComponent } from './login/login.component';
import { AuthFormComponent } from './auth-form/auth-form.component';
import { FormioModule } from 'angular-formio';

export const authRoutes = FormioAuthRoutes({
  auth: AuthFormComponent,
  login: LoginComponent,
});

@NgModule({
  declarations: [LoginComponent, AuthFormComponent],
  imports: [CommonModule, FormioModule, FormioAuth, RouterModule.forChild(authRoutes)],
})
export class AuthFormioModule {}
