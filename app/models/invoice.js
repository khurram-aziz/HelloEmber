import DS from 'ember-data';

export default DS.Model.extend({
    customer: DS.attr('string'),
    invoiceNumber: DS.attr('string'),
    createDate: DS.attr('date'),
    posted: DS.attr('boolean'),
    amount: function() {
        var amount = 0;
        this.get('items').forEach(function(item) {
            amount += parseInt(item.get('amount'));
        });
        return amount;
    }.property('items.@each.amount'),
    items: DS.hasMany('item')
});
