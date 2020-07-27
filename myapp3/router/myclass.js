const express=require('express')
const router=express.Router()//创建一个路由器

// 请求一个列表数据
router.get('/list',(req,res)=>{
    req.send("hello")
})

// 根据id查询一个对象
router.get('/:id',(req,res)=>{
    let id=req.params.id;
    res.send(`你的id信息是${id}`)
})

router.post('/add',(req,res)=>{
    let obj=req.body;
    res.send(`注册成功，信息为：${obj.id},${obj.grade},${obj.spare}`)

})

router.put('/update',(req,res)=>{
    let obj=req.body;
    res.send(`你想要更新的信息是${obj.id},${obj.grade},${obj.spare}`)
})

router.delete('/delete/:id',(req,res)=>{
    let id=req.params.id;
    res.send(`你确认删除id为：${id}`);
})

module.exports=router