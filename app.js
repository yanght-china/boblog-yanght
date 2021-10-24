const Koa = require('koa');
const InitManager = require('./core/init');
const parser = require('koa-bodyparser');
const cors = require('@koa/cors');
const ratelimit = require('koa-ratelimit');
const { use } = require('./app/api/v1/admin');

require('module-alias/register');

app.use(cors())
// app.use(catchError)
app.use(parser())

const app = new Koa();



InitManager.initCore(app)

app.listen(8000, () => {
  console.log('Koa is listening in http://localhost:8000')
})

module.exports = app