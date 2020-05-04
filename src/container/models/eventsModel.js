const post = (database, data) => {
  const teste = database.table('events').insert(data);
  return teste;
};

exports.post = post;

const get = (database) => {
  return database.table('events');
};

exports.get = get;

const findById = (database, id) => {
  return database.table('events').where('id', id).first();
};

exports.findById = findById;
