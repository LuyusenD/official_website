// web服务器
const express=require('express');
// mysql驱动
const mysql=require('mysql');
// 跨域
const cors=require('cors');
// session
const session=require('express-session');
var bp=require('body-parser');
// 配置连接池
var pool=mysql.createPool({
    host:'27.54.93.34',
    user:'root',
    password:'roots123',
    port:'3306',
    database:'MyEmail',
    connectionLimit:15
})


var server=express();
// 配置跨域
server.use(cors({
    origin:["http://moverexpress.com.au","http://www.moverexpress.com.au"],
    credentials:true
}))
// 配置session
server.use(session({
    secret:"128为安全字符串",
    resave:true,
    saveUninitialized:true
}))
server.use(bp.urlencoded({extended:false}));
// 监听
server.listen(5050);

// 添加邮件
server.get("/add",(req,res)=>{
    var sql='INSERT INTO ME_email (id, sName, sEmail, sPhone, sContent, sTime) VALUES (NULL,?,?,?,?,?);';
    let t = new Date()
    let sTime = `${t.getFullYear()}-${t.getMonth() + 1}-${t.getDate()} ${t.getHours()}:${t.getMinutes()}:${t.getSeconds()}`
    var sj=[req.query.sName,req.query.sEmail,req.query.sPhone,req.query.sContent,sTime];
    pool.query(sql,sj,(err,result)=>{
        if(err) throw err;
        if(result.affectedRows>0){
            res.send('1')
        }else{
            res.send('0')
        }
    })
})
server.get("/test",(req,res)=>{
    res.send({code: 200})
})

// 查看邮件
server.get("/emailList",(req,res)=>{
    var sql="SELECT * FROM ME_email order by id desc";
    // 查询数据
    pool.query(sql,(err,result)=>{
        if(err) throw err;
        res.send({code:1,msg:"查询成功",data:result})
    })
})