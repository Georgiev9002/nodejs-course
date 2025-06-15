import http from 'http';
import requestHandler from './requestHandlers/requestHandler.js';

const server = http.createServer(requestHandler)

server.listen(3000)
