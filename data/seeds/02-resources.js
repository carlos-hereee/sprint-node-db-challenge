
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('resources').insert([
    {
      name: 'google', 
      resource_description: 'use google for everthing',
      project_id: 1
    },
    {
      name: 'bing', 
      resource_description: 'bing is okay',
      project_id: 1
    },
    {
      name: 'slack', 
      resource_description: 'for communicating is great',
      project_id: 2
    },

  ]);

};
