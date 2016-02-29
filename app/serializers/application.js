import DS from 'ember-data';

export default DS.JSONAPISerializer.extend({
    keyForAttribute: function(attr) {
        return Ember.String.camelize(attr);
    },
    keyForRelationship: function(attr) {
        return Ember.String.camelize(attr);
    }
});
