const express = require('express');
const helmet = require('helmet');

const server = express();
const projectRouter = require('./routes/projectRoutes.js')

server.use(helmet());
server.use(express.json());
server.use('/api/project-app', projectRouter)

server.get('/', (req, res) => {
    res.send('testing strint challenge server')
})

module.exports = server;