
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('projects').insert([
    {
      project_name: 'project1', 
      project_description: 'this is what the project 1 is going to be about',
      completed: false,
      task_id: 1,
      resource_id: 1
    },
    {
      project_name: 'project2', 
      project_description: 'this is what the project 2 is going to be about',
      completed: false,
      task_id: 1,
      resource_id: 2

    },
    {
      project_name: 'project3', 
      project_description: 'this is what the project 3 is going to be about',
      completed: false,
      task_id: 2,
      resource_id: 1

  },
  
  ]);

};
