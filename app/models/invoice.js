import DS from 'ember-data';

export default DS.Model.extend({
  customer: DS.attr('string'),
  invoiceNumber: DS.attr('string'),
  createDate: DS.attr('date'),
  posted: DS.attr('boolean'),
  amount: DS.attr('number')
});
