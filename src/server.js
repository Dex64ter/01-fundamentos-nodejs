// Padrões de importação
// CommonJS => require
// ESModules => import/export
// const http = require('http');

import http from 'node:http';

const server = http.createServer((req, res) => {
    return res.end("Hello World")
})

server.listen(3000);