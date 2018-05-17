const http = require('http')

http.createServer((req, res) => {
    res.write('new server');
    res.end();
}).listen(8080)

console.log('Escuchando en puesto 8080');