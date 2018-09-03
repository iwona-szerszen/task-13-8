const fs = require('fs');
const http = require('http');
const server = http.createServer();

server.on('request', (request, response) => {
	if (request.method === 'GET') {
		switch (request.url) {
			case '/home':
				response.writeHead(200, {'Content-Type': 'text/html'});
				fs.readFile('./index.html', 'utf-8', (err, data) => {
					if (err) throw err;
					response.write(data);
				});
				break;
			case '/style.css':
				response.writeHead(200, {'Content-Type': 'text/css'});
				fs.readFile('./style.css', 'utf-8', (err, data) => {
					if (err) throw err;
					response.write(data);
					response.end();
				});
				break;
			default: 
				response.writeHead(404, {'Content-Type': 'text/html'});
				response.write('<img src=\"https://as2.ftcdn.net/jpg/01/37/50/91/500_F_137509141_ZYznWKEh0sYbQlyCnUrYxBEHDqnoHnXg.jpg\" alt=\"error-404\" style=\"height: 97vh; display: block; margin: 0 auto;\">');
				response.end();
		}
	}
});

server.listen(8080);

console.log('\nTo display homepage, enter http://localhost:8080/home in your browser address bar');