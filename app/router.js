import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('invoices');
  this.route('invoice', { path: '/invoice/:id' }, function() {
      this.route('edit-item', { path: 'edit/:id'});
  });
});

export default Router;
