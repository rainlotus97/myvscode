// 1.创建服务器
let express = require('express')
let app = express();
let bodyParser = require('body-parser');
// 2.配置中间件
// 内置处理静态资源的中间件
app.use('/public',express.static('public'))
// 处理表单
app.use(bodyParser.urlencoded({ extended: false }))
// parse application/json
app.use(bodyParser.json())

// 路由注册
let user = require('./router/user')
let admin = require('./router/admin')
app.use('/user',user);//以/user开头的请求交给user这个路由器对象处理
app.use('/admin',admin);

// 3.启动服务器
app.listen(3000,()=>{
    console.log("服务器运行中");
})