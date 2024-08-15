// Padrões de importação
// CommonJS => require
// ESModules => import/export
// const http = require('http');

// Rotas
// - Criar usuários
// - Listagem de usuários
// - Edição de usuários
// - Remoção de usuários

// - HTTP
//     - Métodos HTTP
//     - URL

// GET, POST, PUT, PATCH, DELETE

// GET => Buscar uma recurso do back-end
// POST => Criar uma recurso para o back-end
// PUT => Atualizar uma recurso específico do back-end >> muitas informações
// PATCH => Atualizar uma informação específica de um recurso no back-end >> informações únicas e específicas
// DELETE => Deletar uma recurso do back-end

// Stateful - Stateless
// Stateful => Mantém o estado da aplicação dependendo de informações salvas em memória
// Stateless => Não mantém o estado da aplicação

// Cabeçalhos (Requisição/resposta) => Metadados

// HTTP Status Code

import http from 'node:http';

const users = []

const server = http.createServer((req, res) => {
    const { url, method } = req;

    if (method === 'GET' && url === '/users') {
        return res
            .setHeader('Content-Type', 'application/json')
            .end(JSON.stringify(users))
    }

    if (method === 'POST' && url === '/users') {
        users.push({
            id: 2,
            nome: "Jhon Doe",
            email: 'mariadoe@gmail.com'
        })
        
        return res.writeHead(201).end()
    }

    return res.writeHead(404).end('Not Found')
})

server.listen(3000);