const up = async (knex) => {
  await knex.schema.createTable('events', (table) => {
    table.bigIncrements('id').unsigned();
    table.string('name', 255).notNullable();
  });
};

const down = async (knex) => {
  await knex.schema.dropTable('events');
};

module.exports = { up, down };
