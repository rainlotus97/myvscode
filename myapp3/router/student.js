const express=require('express')
const router=express.Router()//创建一个路由器
const Student=require('../biz/Studengt')
const studentBiz=new Student()
// 请求一个列表数据
router.get('/list',(req,res)=>{
    // 调用业务层的list方法，获取全部学生信息
   studentBiz.list((data)=>{
    res.send(data)
   })
})

// 根据id查询一个对象
router.get('/:id',(req,res)=>{
    let id=req.params.id;
    studentBiz.getById(id,data=>{
        res.send(data)
    })
})

// 保存一个学生对象
router.post('/add',(req,res)=>{
    let stu=req.body;
    studentBiz.add(stu,err=>{
        if(err){
            res.send(err)
        }else{
            res.send("添加成功！")
        }
    })

})

router.put('/update',(req,res)=>{
    let obj=req.body;
    res.send(`你想要更新的信息是${obj.id},${obj.name},${obj.sex}`)
})

router.delete('/delete/:id',(req,res)=>{
    let id=req.params.id;
    studentBiz.deleteById(id,err=>{
        if(err){
            res.send("err")
        }else{
            res.send("删除成功！")
        }
    })
})


module.exports=router