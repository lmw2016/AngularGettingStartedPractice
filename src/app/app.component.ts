import {Component} from '@angular/core'

@Component({
  selector:'pm-root',
  template:`
    <div><h2>{{pageTitle}}</h2>
    <div>my first component == andrew </div>
    </div>
  `
})
export class AppComponent{
  pageTitle:string='Acme product Management';
}
