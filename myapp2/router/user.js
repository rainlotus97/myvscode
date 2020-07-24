// 定义和user相关的路由的：增删改查
var express = require('express');
var router = express.Router();

router.post("/add",(req,resp)=>{
    let user = req.body;
    resp.send(`注册成功，信息为：${user.name},${user.sex}`)
})
// 根据id来删除信息
router.delete("/delete/:id",(req,resp)=>{
    // req.params,req.query,req.body
    let id = req.params.id;
    resp.send(`你确认删除id为：${id}`)
})
// 更新，数据必须有id
router.post('/update',(req,resp)=>{
    let user = req.body;
    resp.send(`你想要更新的信息是${user.id},${user.name}${user.sex}`)
})

module.exports = router;