Experiments with **Angular2(rc.5)** and **Router(3.0.0-rc.1)**
 --
Based on Angular2 Router example:
https://angular.io/resources/live-examples/router/ts/plnkr.html
and router guide:
https://angular.io/docs/ts/latest/guide/router.html

**Dashboard**
example of dynamically adding router outlets and registering routes

**Lazy Badges**
experiments with lazy loaded modules.
framework issues:

1. Load children in named outlet - not works positioning (why used primary?)
1. Load children in loaded children - not works url recognizing (case:add badge in badge-group)
1. All lazy loaded components recreated from root on in-child navigation
1. 'Componentless' routes works incorrectly with named outlets (https://github.com/angular/angular/issues/11082)
