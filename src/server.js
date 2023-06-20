import http from 'node:http'
// CommonJS => Padrão de Importação

const server = http.createServer((req, res) => {
    const {method, url} = req

    if(method === 'GET' && url === '/users') {
        return res.end('Listagem de usuarios')
    }

    if(method === 'POST' && url === '/users') {
        return res.end('Criação de usuario')
    }

    return res.end('Ola')
})

// Experimental node --watch + filename

server.listen(3333)