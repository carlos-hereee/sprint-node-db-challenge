const db = require('../data/db-config.js');

module.exports = {
    getProjects,
    getRosources,
    getTasks
}

function getProjects(){
    return db('projects')
}
function getRosources(project_id){
    return db('resources').where({ project_id })
}
function getTasks(project_id){
    return db('tasks').where({ project_id})
}