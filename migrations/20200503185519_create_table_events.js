const up = async (knex) => {
  await knex.schema.createTable('events', (table) => {
    table.bigIncrements('id').unsigned();
    table.string('name', 255).notNullable();
    table.timestamp('presentation_date').defaultTo(knex.fn.now());
  });
};

const down = async (knex) => {
  await knex.schema.dropTable('events');
};

module.exports = { up, down };
