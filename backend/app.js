const Koa = require('koa');
const readDir = require('recursive-readdir-sync');
const path = require('path')
const config = require('./config');
const db = require('./db');

const controllersDir = path.join(__dirname, 'controllers');

db.connect();

const app = new Koa();

const files = readDir(controllersDir)
    .filter(file => file.endsWith('.js'));
files.sort(file => file.includes('index.js') ? 1 : -1);
files.forEach(file => {
    // eslint-disable-next-line
    const controller = require(file);
    if (!controller.routes) {
        return;
    }
    app.use(controller.routes());
});

app.listen(config.PORT, () => console.log(`server spinning on ${config.PORT}`));
