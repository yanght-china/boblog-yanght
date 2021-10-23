const Koa = require('koa');
const app = new Koa();

app.use(async ctx => {
  ctx.body = 'Hello World';
});

app.listen(8000, () => {
  console.log('Koa is listening in http://localhost:8000')
})

module.exports = app