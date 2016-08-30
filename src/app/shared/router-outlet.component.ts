import { Component } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'router-outlet-component',
  template: `
<div style="background: rgba(10,10,10,0.2); padding:7px">
<router-outlet></router-outlet>
</div>
`
})
// todo - remove after fix https://github.com/angular/angular/issues/11082
export class RouterOutletComponent {

  constructor() {
  }
}
