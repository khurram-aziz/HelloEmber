import Ember from 'ember';

export default Ember.Route.extend({
    model() {
        // return [
        //     { id: 1, type: 'invoice', customer: 'CUST', invoiceNumber: 'INV01', createDate: new Date(), posted: true, amount: 100 },
        //     { id: 2, type: 'invoice', customer: 'CUST', invoiceNumber: 'INV02', createDate: new Date(), posted: true, amount: 110 }
        // ];
        return this.store.findAll('invoice');
    }
});
