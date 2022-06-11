exports.up = (knex, Promise) => (async () => {
    await knex.schema.raw(`insert into up_roles(name) values('name')`) ;
})();

exports.down = function (knex, Promise) {
};
