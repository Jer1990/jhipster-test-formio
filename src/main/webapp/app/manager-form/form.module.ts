import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormioGrid } from 'angular-formio/grid';
import { FormManagerModule, FormManagerRoutes, FormManagerService, FormManagerConfig } from 'angular-formio/manager';
import { ManagerFormComponent } from './manager-form.component';

@NgModule({
  declarations: [ManagerFormComponent],
  imports: [
    CommonModule,
    FormioGrid,
    FormManagerModule,
    RouterModule.forChild(
      FormManagerRoutes({
        formIndex: ManagerFormComponent,
      })
    ),
  ],
  providers: [
    FormManagerService,
    {
      provide: FormManagerConfig,
      useValue: {
        tag: 'common',
      },
    },
  ],
})
export class FormModule {}
