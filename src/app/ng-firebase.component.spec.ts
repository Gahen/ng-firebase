import {
  beforeEachProviders,
  describe,
  expect,
  it,
  inject
} from '@angular/core/testing';
import { NgFirebaseAppComponent } from '../app/ng-firebase.component';

beforeEachProviders(() => [NgFirebaseAppComponent]);

describe('App: NgFirebase', () => {
  it('should create the app',
      inject([NgFirebaseAppComponent], (app: NgFirebaseAppComponent) => {
    expect(app).toBeTruthy();
  }));

  it('should have as title \'ng-firebase works!\'',
      inject([NgFirebaseAppComponent], (app: NgFirebaseAppComponent) => {
    expect(app.title).toEqual('ng-firebase works!');
  }));
});
