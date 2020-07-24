// 就是要开启一个web服务器
// 1.创建服务器
let express = require('express');//加载依赖
let bodyParser = require('body-parser');
let app = express();//使用express创建一个app服务器

// html,css,js,img等静态资源访问public目录
app.use('/public',express.static('/public'));
// 处理表单
app.use(bodyParser.urlencoded({ extended: false }))
// parse application/json
app.use(bodyParser.json())


// apache,nginx
// 2.告诉服务器如何对外服务
app.get("/",function(req,resp){
    resp.send(`
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>express</title>
        </head>
        <body>
            首页
        </body>
        </html>
    `)
});
app.get("/user1",function(req,resp){
    resp.send(`
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>express</title>
        </head>
        <body>
            express用户你好
        </body>
        </html>
    `)
})
// 表示这是一个get请求，/user/2,2表示参数id的值是2
app.get("/user/:id",function(req,resp){
    let id = req.params['id'];
    resp.send("你当前提交的参数是："+id)
})
//路由：是服务器识别客户端请求的，包括请求的方法，请求的路径，参数，请求头
app.get("/user/:username/:pwd",function(req,resp){
    let name = req.params["username"];
    let password = req.params["pwd"];
    resp.send(`你的名字是${name},你的密码是${password}`)
});
// 使用?来传递参数，此时使用request.query来获取参数
// /user?id=12
app.get("/user",function(req,resp){
    let id = req.query.x1;
    resp.send("你当前提交的参数是："+id)
})
app.post("/user",function(req,resp){
    resp.send("post request")
})
app.put("/user",function(req,resp){
    resp.send("put request")
})
app.delete("/user",function(req,resp){
    resp.send("delete request")
})
// 一个请求可以被多个处理函数处理
app.get("/user2/m",(req,resp,next)=>{
    console.log("step1")
    next();
},(req,resp,next)=>{
    console.log("step2")
    next();
},(req,resp,next)=>{
    console.log("step3")
    resp.send("step3");
})

// 处理注册表单请求，以表单的方式提交数据
app.post("/user/regist",(req,resp)=>{
    let user = req.body;
    resp.send(`注册成功:${user.userName}:${user .pwd}:${user.birth}`);
});
// 处理注册表单请求,提交的数据是json格式
app.post("/user/regist2",(req,resp)=>{
    let user = req.body;
    resp.send(`注册成功:${user.userName}:${user .pwd}:${user.birth}`);
});


app.use(function (err, req, res, next) {
    console.error(err.stack)
    res.status(500).send('Something broke!')
})
// 3.启动服务器
app.listen(3000,function(){
    console.log("服务器已经启动成功")
})