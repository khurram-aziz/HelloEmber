import Ember from 'ember';

export default Ember.Route.extend({
    model: function(params) {
        return this.store.findRecord('item', params.id);
    },
    actions: {
        save: function(model) {
            var router = this;
            console.log('Saving...');
            console.log(model);
            model.save().then(function(){
                router.transitionTo('invoice');
            });
        }
    }
});