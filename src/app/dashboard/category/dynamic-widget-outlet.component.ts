import { Component, OnInit, Input } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'dynamic-widget-outlet',
  template: `
    <div *componentOutlet="template; context: self; selector:'dynamic-widget'"></div>
  `,
})
export class DynamicWidgetOutletComponent implements OnInit {

  @Input() name: string;

  template: string = '';

  ngOnInit() {
    this.template = `<div><span>Widget Outlet: ${this.name}</span><router-outlet name="${this.name}"></router-outlet></div>`;
  }
}
