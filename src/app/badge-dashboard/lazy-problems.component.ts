import { Component } from '@angular/core';

@Component({
  selector: 'lazy-problems',
  template: `
    <div style="padding: 5px; margin:5px; background: rgba(100, 100, 200, 0.3); font-size: 10px; color: #333;">
      <h4 class="title">Lazy problems</h4>
      <ul>
        <li>Load children in named outlet - not works positioning (why used primary?)</li>
        <li>Load children in loaded children - not works url recognizing (case:add badge in badge-group)</li>
        <li>All lazy loaded components recreated from root on in-child navigation</li>
        <li>'Componentless' routes works incorrectly with named outlets (https://github.com/angular/angular/issues/11082)</li>
        <li>...</li>
      </ul>
    </div>
  `
})
export class LazyProblemsComponent {
}