const testimonials = 'testimonials';

exports.up = knex =>
    knex.schema.createTable(testimonials, table => {
        table.increments();
        table.string('name');
        table.string('role');
        table.string('text');

    });

exports.down = knex => knex.schema.dropTableIfExists(testimonials);