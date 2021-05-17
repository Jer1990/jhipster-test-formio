import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'jhi-builder',
  templateUrl: './builder.component.html',
  styleUrls: ['./builder.component.scss'],
})
export class BuilderComponent implements OnInit {
  @ViewChild('json') jsonElement?: ElementRef;
  public form: any = { components: [] };

  constructor() {}

  ngOnInit(): void {}

  onChange(event) {
    console.log(event.form);
    this.jsonElement.nativeElement.innerHTML = '';
    this.jsonElement.nativeElement.appendChild(document.createTextNode(JSON.stringify(event.form, null, 4)));
  }
}
