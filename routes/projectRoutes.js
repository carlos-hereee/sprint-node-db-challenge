const express = require('express');
const User = require('./projectModel.js')

const router = express.Router();

router.get('/', (req, res) => {
    User.getProjects()
        .then(projects => {
            res.status(200).json(projects);
        })
        .catch(err=>{
            console.log(err);
            res.status(500).json({error: 'error 500 getting projectsn'})
        })
})

module.exports = router;