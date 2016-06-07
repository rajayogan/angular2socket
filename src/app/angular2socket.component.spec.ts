import {
  beforeEachProviders,
  describe,
  expect,
  it,
  inject
} from '@angular/core/testing';
import { Angular2socketAppComponent } from '../app/angular2socket.component';

beforeEachProviders(() => [Angular2socketAppComponent]);

describe('App: Angular2socket', () => {
  it('should create the app',
      inject([Angular2socketAppComponent], (app: Angular2socketAppComponent) => {
    expect(app).toBeTruthy();
  }));

  it('should have as title \'angular2socket works!\'',
      inject([Angular2socketAppComponent], (app: Angular2socketAppComponent) => {
    expect(app.title).toEqual('angular2socket works!');
  }));
});
