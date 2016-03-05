export default function(server) {
    let invoice1 = server.create('invoice');
    let invoice2 = server.create('invoice');
    let invoice3 = server.create('invoice');
    server.createList('item', 2, { invoice_id: invoice1.id });
    server.createList('item', 2, { invoice_id: invoice2.id });
    server.createList('item', 2, { invoice_id: invoice3.id });
}
