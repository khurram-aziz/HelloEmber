export default function() {
    this.namespace = '/api/v1';
    this.timing = 1000;

    this.get('invoices', function(db, request) {
        let data = {};
        data = db.invoices.map( (attrs) => {
            let invoices = { type: 'invoice', id: attrs.id, 
                attributes: attrs };
            return invoices;
        });
       return { data };
    });
    
    this.get('invoices/:id', function(db, request) {
        let id = request.params.id;
        let invoice = db.invoices.find(id);
        let items = db.items.where({ invoice_id: invoice.id });
        let data = {
            type: 'invoice', id: id,
            attributes: invoice,
            relationships: {
                items: {
                    data: []
                }
            }
        };
        let included = {};
        included = items.map( (attrs) => {
            data.relationships.items.data.push( { type: "item", id: attrs.id, attributes: attrs });
            let items = { type: 'item', id: attrs.id, attributes: attrs };
            return items;
        });
        return { data, included };
    });
    this.get('items/:id', function(db, request) {
        let id = request.params.id;
        let item = db.items.find(id);
        let data = { type: 'item', id: id, attributes: item };
        return { data };
    });
    this.patch('items/:id', function(db, request) {
        let id = request.params.id;
        var item = JSON.parse(request.requestBody);
        var newItem = db.items.update({ id: id, price: item.price });
        return { data: { type: 'item', id: id, attributes: newItem } };
    });
  // These comments are here to help you get started. Feel free to delete them.

  /*
    Config (with defaults).

    Note: these only affect routes defined *after* them!
  */
  // this.urlPrefix = '';    // make this `http://localhost:8080`, for example, if your API is on a different server
  // this.namespace = '';    // make this `api`, for example, if your API is namespaced
  // this.timing = 400;      // delay for each request, automatically set to 0 during testing

  /*
    Route shorthand cheatsheet
  */
  /*
    GET shorthands

    // Collections
    this.get('/contacts');
    this.get('/contacts', 'users');
    this.get('/contacts', ['contacts', 'addresses']);

    // Single objects
    this.get('/contacts/:id');
    this.get('/contacts/:id', 'user');
    this.get('/contacts/:id', ['contact', 'addresses']);
  */

  /*
    POST shorthands

    this.post('/contacts');
    this.post('/contacts', 'user'); // specify the type of resource to be created
  */

  /*
    PUT shorthands

    this.put('/contacts/:id');
    this.put('/contacts/:id', 'user'); // specify the type of resource to be updated
  */

  /*
    DELETE shorthands

    this.del('/contacts/:id');
    this.del('/contacts/:id', 'user'); // specify the type of resource to be deleted

    // Single object + related resources. Make sure parent resource is first.
    this.del('/contacts/:id', ['contact', 'addresses']);
  */

  /*
    Function fallback. Manipulate data in the db via

      - db.{collection}
      - db.{collection}.find(id)
      - db.{collection}.where(query)
      - db.{collection}.update(target, attrs)
      - db.{collection}.remove(target)

    // Example: return a single object with related models
    this.get('/contacts/:id', function(db, request) {
      var contactId = +request.params.id;

      return {
        contact: db.contacts.find(contactId),
        addresses: db.addresses.where({contact_id: contactId})
      };
    });

  */
}

/*
You can optionally export a config that is only loaded during tests
export function testConfig() {

}
*/
