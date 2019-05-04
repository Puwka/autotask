const Koa = require('koa');
const readDir = require('recursive-readdir-sync');
const bodyParser = require('koa-bodyparser');
const path = require('path');
const config = require('./config');
const db = require('./db');

db.connect();

const middlewares = require('./middlewares');

const controllersDir = path.join(__dirname, 'controllers');

const app = new Koa();
app
    .use(bodyParser())
    .use(middlewares.checkAuth);

const files = readDir(controllersDir)
    .filter(file => file.endsWith('.js'));
// eslint-disable-next-line
files.sort(file => file.includes('index.js') ? 1 : -1);
files.forEach(file => {
    // eslint-disable-next-line
    const controller = require(file);
    if (!controller.routes) {
        return;
    }
    app.use(controller.routes())
        .use(controller.allowedMethods());
});

app.listen(config.PORT, () => console.log(`server spinning on ${config.PORT}`));
