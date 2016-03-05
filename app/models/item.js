import DS from 'ember-data';

export default DS.Model.extend({
    invoice: DS.belongsTo('invoice'),
    description: DS.attr('string'),
    price: DS.attr('number'),
    quantity: DS.attr('number'),
    amount: function() {
        return this.get('price') * this.get('quantity');
    }.property('price', 'quantity')
});
