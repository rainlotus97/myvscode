## 使用express创建web项目
#### 1.创建目录
	md myapp	

#### 2.进入目录

```
cd myapp
npm init -y
```

#### 3.添加依赖

​	1.因为这是一个express项目，依赖express
	2.新建入口文件app.js，在这个文件中对express服务器进行初始化

```
	const express=require('express')

	const app =express()



	app.listen(3000,()=>{

	console.log("服务器运行中");	

```

​	3.对服务器进行一些通用配置
		1.express服务器默认拦截所有的请求，实际上静态文件不需要express处理	

```
		app.use(express.static('./public'))
```

​		2.express默认不能处理表单提交的参数以及json的参数，依赖第三方中间件的body-parser

```
		var bodyParser=require('body-parser')
 	 	app.use(bodyParser.urlencoded({extended:false}))
		app.use(bodyParser.json())	
```

#### 4.实现控制层：根据实体类型创建路由模块，路由器的作用是根据请求的路由特征（请求方式：get,post,put,delete ,指定处理器。

​	1.创建路由器类（根据这个实体业务需要的处理的请求，编写对应的路由和处理器函数）

​	2.在入口文件中注册路由器实例

#### 5.数据持久化：

​	1.在开发中，不同逻辑功能代码需要放在不同的目录结构中，处理请求的代码放在router，业务代码放在biz，数据库代码放在db中。

​	2.开发业务层

​		1.创建db目录，在目录中创建student.json中，初始化为一个数组[]

​		2.创建biz目录，在biz目录中，创建Student.js，在这个文件中创建Student类，并暴露

​		3.实现Student类功能：

		1.在构造函数中初始化student_table属性，确定student.json文件的绝对路径
		2.