const get = (database) => {
  return database.table('events');
};

exports.get = get;
