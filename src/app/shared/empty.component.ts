import { Component } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'empty-component',
  template: `
<p style="color:#ddd;background: rgba(10,10,10,0.7); padding:7px">EMPTY COMPONENT</p>
`
})
// todo - remove after fix https://github.com/angular/angular/issues/11082
export class EmptyComponent {

  constructor() {
  }
}
