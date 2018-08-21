import Server from './server/server';
import router from './routes/router';

const server = Server.init(3000);
server.app.use(router);

server.start( () => {
    console.log('Servidor Corriendo en Puerto 3000');
});