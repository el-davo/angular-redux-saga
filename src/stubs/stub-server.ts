import * as jsonServer from 'json-server';
import { info } from 'winston';
import { db } from './db';

const server = jsonServer.create();
const middleWares = jsonServer.defaults();

server.use(middleWares);
server.use(jsonServer.bodyParser);

// Microservices
Object.keys(db).map(key => {
    server.use(key, jsonServer.router(db[key]));
});
server.use(middleWares);
server.listen(3001);