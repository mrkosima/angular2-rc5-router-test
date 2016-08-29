import { Component, OnInit, Input } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'dynamic-category-outlet',
  template: `
    <div *componentOutlet="template; context: self; selector:'dynamic-component'"></div>
  `,
})
export class DynamicCategoryOutletComponent implements OnInit {

  @Input() name: string;

  template: string = '';

  ngOnInit() {
    this.template = `<p><span>Outlet: ${this.name}</span><router-outlet name="${this.name}"></router-outlet></p>`;
  }
}
