
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('tasks').insert([
    {
      description: 'task1', 
      notes: 'work on project 1',
      completed: false,
      project_id: 1, 
    },
    {
      description: 'task2', 
      notes: 'work on project 1 next step',
      completed: false,
      project_id: 1, 
    },
    {
      description: 'task3', 
      notes: 'work on project 2',
      completed: false,
      project_id: 2, 
    },

  ]);

};
