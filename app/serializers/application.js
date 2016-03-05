import DS from 'ember-data';
import Ember from 'ember';

export default DS.JSONAPISerializer.extend({
    keyForAttribute: function(attr) {
        return Ember.String.camelize(attr);
    },
    keyForRelationship: function(attr) {
        return Ember.String.camelize(attr);
    }
});
