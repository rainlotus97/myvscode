// 封装有关学生的业务操作，添加学生、查看学生信息、修改学生信息、、删除学生
const fs = require('fs')
const path = require('path');
const router = require('../router/student');
class Student {
    constructor() {
        this.students = [];
        this.student_table = path.join(__dirname, "../db/student.json")
        // this.student_table = path.join(__filename, "../../db/student.json")
    }
    // 获取全部学生
    list(cb) {
        // 读取db中的student.json数据，来初始化this.students
        fs.readFile(this.student_table, (err, data) => {
            if (err) {
                return console.log(err);
            }
            this.students = JSON.parse(data.toString())
            cb(this.students)
            // console.log(this.students);
        })
    }

    getById(id, cb) {
        fs.readFile(this.student_table, (err, data) => {
            if (err) {
                return console.log(err);
            }
            this.students = JSON.parse(data.toString())
            // 取出集合中的每一个学生对象，将他的id和参数id比较，如果相同，返回这个学生对象
            for (const stu of this.students) {
                if (stu.id = id) {
                    cb(stu) //查到目标学生后，执行回调函数
                    return
                }
            }
        })

    }

    // 添加学生信息
    // 实现的思路是加载全部学生信息，将新学生的信息添加到数组，然后再将这个数组写到文件
    add(stu, cb) {
        fs.readFile(this.student_table, (err, data) => {
            if (err) {
                cb(err);
                return;
            }
            // 没有错误，文件读取成功
            this.students = JSON.parse(data.toString())//读取原来的数据

            // 将新的学生添加到students
            if (this.students.length > 0) {
                // 将新的学生的id是上一个学生的id+1
                stu.id = this.students.length + 1;
            } else {
                stu.id = 1;
            }

            this.students.push(stu)
            // 将this.students这个json对象写入this.students中
            let str = JSON.stringify(this.students)
            fs.writeFile(this.student_table, str, err => cb(err))

            // for (const key of this.students) {
            //     if (key.number != stu.number) {
            //         this.students.push(stu)
            //         // 将this.students这个json对象写入this.students中
            //         let str = JSON.stringify(this.students)
            //         fs.writeFile(this.student_table, str, err => cb(err))
            //     } else {
            //         cb("err")
            //     }
            // }

        })
    }

    // 根据id来删除一个学生
    // 读取全部学生信息，找出指定id的学生，过滤出不是这个id的学生，然后就这个数组保存到文件
    deleteById(id, cb) {
        fs.readFile(this.student_table, (err, data) => {
            if (err) {
                cb(err)
                return
            }
            // 读取原数据
            this.students = JSON.parse(data.toString())
            let temp = this.students.filter(item => {
                return item.id != id
            })
            let str = JSON.stringify(temp)
            fs.writeFile(this.student_table, str, err => {
                cb(err)
            })
        })
    }

}

module.exports = Student
