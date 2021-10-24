/**
 * @description 管理员的路由 API 接口
 * @description Administrator's routing API interface
 * @author 杨洪涛
 */

const Router = require('koa-router');

// const {  } = require('@validators/admin');

const router = new Router({
    prefix: '/api/v1/admin'
})

// 管理员登录
router.post('/login', async (ctx) => {
    console.log(1111)
    // const v = await new AdminLoginValidator().validate(ctx)
})

module.exports = router