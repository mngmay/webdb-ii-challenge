exports.up = function(knex) {
  return knex.schema.createTable("cars", tbl => {
    tbl.increments();
    tbl
      .string("VIN", 17)
      .unique()
      .notNullable();

    tbl.string("make", 50).notNullable();

    tbl.string("model", 50).notNullable();

    tbl.integer("mileage").notNullable();

    tbl.string("transmission type");

    tbl.string("title status");
  });
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists("cars");
};
