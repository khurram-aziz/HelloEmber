import Mirage, {faker} from 'ember-cli-mirage';

export default Mirage.Factory.extend({
    description() { return faker.name.lastName(); },
    price(i) { return 100 + i*10; },
    quantity: 1
});
