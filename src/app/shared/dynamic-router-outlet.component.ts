import { Component, OnInit, Input } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'dynamic-router-outlet',
  template: `
    <div *componentOutlet="template; context: self; selector:'dynamic-component'"></div>
  `,
})
export class DynamicRouterOutletComponent implements OnInit {

  @Input() name: string;

  @Input() styleClass: string;

  template: string = '';

  ngOnInit() {
    this.template = `<p class="${this.styleClass}"><span>Outlet: ${this.name}</span><router-outlet name="${this.name}"></router-outlet></p>`;
  }
}
