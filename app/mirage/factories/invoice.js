import Mirage, {faker} from 'ember-cli-mirage';

export default Mirage.Factory.extend({
    customer() { return faker.name.firstName(); },
    invoiceNumber(i) { return 'INV' + i; },
    createDate: new Date(),
    posted: true
});
