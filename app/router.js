import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('deps', function() {
    this.route('dep', { path: ':id' });
  });
  this.route('bics', function() {
    this.route('bic', { path: ':id' });
  });
  this.route('deps_edit', function() {
    this.route('dep', { path: ':id' });
  });
  this.route('bics_edit', function() {
    this.route('bic', { path: ':id' });
  });
  this.route('return', function() {
    this.route('bic', { path: ':id' });
  });
});

export default Router;
