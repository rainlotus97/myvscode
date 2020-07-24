var express = require('express');
var router = express.Router();

router.post("/add",(req,resp)=>{
    let admin = req.body;
    resp.send(`管理员注册成功，信息为：${admin.name},${admin.sex},${admin.phone}`)
})

module.exports = router;//对外暴露