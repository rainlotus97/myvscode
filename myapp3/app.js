const express=require("express")
const app =express()//创建一个express的web服务器

app.get("/",(req,res)=>{
    res.send("aloha")
})

app.use("/node_modules",express.static('node_modules'))

app.engine('html',require('express-art-template'))
// 静态文件处理
app.use(express.static('./public'))
// 处理表单和json格式的参数
var bodyParser=require('body-parser')
app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json())

// 按模块配置路由器
const student =require('./router/student')
const teacher =require('./router/teacher')
const myclass =require('./router/myclass')
const course =require('./router/course')

app.use('/student',student)
app.use('/teacher',teacher)
app.use('/myclass',myclass)
app.use('course',course)



app.listen(3000,()=>{
    console.log("服务器运行中");
})