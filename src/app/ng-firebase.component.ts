import { Component } from '@angular/core';
import { DashboardComponent } from './+dashboard';
import { Routes , ROUTER_DIRECTIVES, ROUTER_PROVIDERS} from '@angular/router';

@Component({
  moduleId: module.id,
  selector: 'ng-firebase-app',
  templateUrl: 'ng-firebase.component.html',
  styleUrls: ['ng-firebase.component.css'],
  directives: [ROUTER_DIRECTIVES],
  providers: [ROUTER_PROVIDERS]
})
@Routes([
  {path: '/dashboard', component: DashboardComponent}
])
export class NgFirebaseAppComponent {
  title = 'ng-firebase works!';
}
