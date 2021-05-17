import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormManagerConfig, FormManagerIndexComponent, FormManagerService } from 'angular-formio/manager';

@Component({
  selector: 'jhi-manager-form',
  templateUrl: './manager-form.component.html',
  styleUrls: ['./manager-form.component.scss'],
})
export class ManagerFormComponent extends FormManagerIndexComponent implements OnInit {
  constructor(public route: ActivatedRoute, public router: Router, public service: FormManagerService, public config: FormManagerConfig) {
    super(service, route, router, config);
  }

  ngOnInit(): void {}
}
