
exports.up = function(knex) {
    return knex.schema
    .createTable('projects', tbl => {
        tbl.increments();
        tbl.text('project_name', 128).unique().notNullable();
        tbl.text('project_description');
        tbl.boolean('completed').defaultTo(false);
        tbl.integer('task_id')
        .unsigned()
        .references('id')
        .inTable('tasks')
        .onDelete('CASCADE')
        .onUpdate('CASCADE');
        tbl.integer('resource_id')
        .unsigned()
        .references('id')
        .inTable('resources')
        .onDelete('CASCADE')
        .onUpdate('CASCADE');


    })
    .createTable('resources', tbl => {
        tbl.increments();
        tbl.text('name', 128).unique().notNullable();
        tbl.text('resource_description');
        tbl.integer('project_id')
        .unsigned()
        .references('id')
        .inTable('projects')
        .onDelete('CASCADE')
        .onUpdate('CASCADE')

    })  
    .createTable('tasks', tbl => {
        tbl.increments();
        tbl.text('description', 128).notNullable();
        tbl.text('notes');
        tbl.boolean('completed').defaultTo(false);
        tbl.integer('project_id')
            .notNullable()
            .unsigned()
            .references('id')
            .inTable('projects')
            .onDelete('CASCADE')
            .onUpdate('CASCADE')
    })  

};

exports.down = function(knex) {
    return knex.schema
    .dropTableIfExists('tasks')
    .dropTableIfExists('resources')
    .dropTableIfExists('projects')

};
