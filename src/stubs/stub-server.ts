import { create, defaults, bodyParser, router } from 'json-server';
import { db } from './db';

const server = create();
const middleWares = defaults();

server.use(middleWares);
server.use(bodyParser);

// Microservices
Object.keys(db).map(key => {
    server.use(key, router(db[key]));
});

server.listen(3001);