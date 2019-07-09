// 1.引入2个模块 express mysql
const express=require("express");
const mysql=require("mysql");
// 2.创建连接池
var pool=mysql.createPool({
    host:"127.0.0.1",
    user:"root",
    password:"",
    port:"3306",
    database:"cute",
    connectionLimit:15
})
// 3.创建express对象
var server=express();
//4.指定静态资源目录
server.use(express.static("public"))
//5.处理跨域请求
const cors=require("cors");
server.use(cors({
    origin:["http://127.0.0.1:8080","http://localhost:8080"],
    credentials:true
}));
//6.添加session功能
const session=require("express-session");
server.use(session({
    secret:"128字符串",
    resave:true,
    saveUninitialized:true
}))
// 4.绑定监听端口
server.listen(3000); 
// 10:接受用户登录请求
server.get("/login",(req,res)=>{
    // 1.接受脚手架参数 uname upass
    var uname=req.query.uname;
    var upass=req.query.upass;
    // 2.sql
    var sql="SELECT id FROM c_login";
        sql+=" WHERE uname=?";
        sql+=" AND upass=md5(?)";
    // 3.返回结果
    pool.query(sql,[uname,upass],(err,result)=>{
        if(err) throw err;
        if(result.length==0){
            res.send({code:1,msg:"用户名或密码有误"});
            // console.log(result);
        }else{
            //result=[{lid:1}]
            req.session.uid=result[0].id;
            res.send({code:1,msg:"登录成功"});
        }
    })
})
server.get("/home",(req,res)=>{
    var sname=req.query.sname;
    var sql="SELECT * FROM c_list WHERE sname=?";
    pool.query(sql,[sname],(err,result)=>{
        if(err) throw err;
        // console.log(result);
        res.send({code:1,data:result})
        
    })
})
server.get("/list",(req,res)=>{
    var type=req.query.type;
    if(!type){type=1};
    var sql="SELECT id,sname,price,type,ssrc,lsrc";
    sql+=" FROM c_list";
    sql+=" WHERE type= ? ";
    pool.query(sql,[type],(err,result)=>{
        if(err) throw err;
        // console.log(result);
        res.send({code:1,msg:"查询成功",data:result});
        })   
}) 
// 
server.get("/large",(req,res)=>{
    // console.log("ada");
    var ids=req.query.ids;
    var sql=`SELECT id,sname,price,type,ssrc,lsrc FROM c_list WHERE id IN (${ids})`;
    pool.query(sql,[ids],(err,result)=>{
        if(err) throw err;
        // console.log(result);
        res.send({code:1,msg:"查询成功",data:result});

        })
    
}) 
server.get("/subtitle",(req,res)=>{
    var id=req.query.id;
    var sql="SELECT * FROM c_list WHERE id=?";
    pool.query(sql,[id],(err,result)=>{
        if(err) throw err;
        // console.log(result);
        res.send({code:1,msg:"查询成功",data:result});
    })
})
server.get("/cartlist",(req,res)=>{
    // var uid=req.session.uid;
    var uid=1;
    var sql="SELECT * FROM c_cart WHERE uid=?";
    pool.query(sql,[uid],(err,result)=>{
        if(err) throw err;
        res.send({code:1,data:result});
    })
})
server.get('/add',(req,res)=>{
    var sname=req.query.sname;
    var count=req.query.num;
    // console.log(count);
    var sql="UPDATE c_cart SET count = ? WHERE sname= ? ";
    pool.query(sql,[count,sname],(err,result)=>{
        if(err) throw err;
        res.send({code:1,data:result});
    })
})
server.get("/delall",(req,res)=>{
    //参数:6,7,9
    var sql=`DELETE FROM c_cart WHERE 1=1`;
    pool.query(sql,(err,result)=>{
        if(err)throw err;
        //insert update delete
        //result不是数组是一个对象
        if(result.affectedRows>0){
            res.send({code:1,msg:"删除成功"})
        }else{
            res.send({code:0,msg:"删除失败"})
        }
    })
})
server.get('/intoCart',(req,res)=>{

    var obj=req.query;
    console.log(obj);
    obj.uid=req.session.uid;
    sql="INSERT INTO c_cart SET ? ";
    pool.query(sql,obj,(err,result)=>{
        if(err) throw err;
        // console.log(result);
        if(result.affectedRows>0){
            res.send({code:1,msg:"插入成功",data:result});
        }else{
            res.send({code:0,msg:"插入失败",data:result});
        }
    })
})
server.get('/delone',(req,res)=>{
    var sname=req.query.sname;
    var sql="DELETE FROM c_cart WHERE sname = ?";
    pool.query(sql,[sname],(err,result)=>{
        if (err) throw err;
        if(result.affectedRows>0){
            res.send({code:1,msg:"删除成功",data:result});
        }
        else{
            res.send({code:0,msg:"删除失败"});
        }
    })
})
// server.get("/login",(req,res)=>{
//     // 1.接受脚手架参数 uname upass
//     var uname=req.query.uname;
//     var upass=req.query.upass;
//     // 2.sql
//     // SELECT id FROM t_login WHERE uname=? AND upass=md5(?)
//     var sql="SELECT id FROM t_login";
//         sql+=" WHERE uname=?";
//         sql+=" AND upass=md5(?)";
//     // 3.返回结果
//     pool.query(sql,[uname,upass],(err,result)=>{
//         if(err) throw err;
//         if(result.length==0){
//             res.send({code:1,msg:"用户名或密码有误"});
//         }else{
//             //result=[{lid:1}]
//             req.session.uid=result[0].id;
//             res.send({code:1,msg:"登录成功"});
//         }
//     })
// })
//     // {code:1,msg:"登陆成功"}
//     // {code:-1,msg:"用户名或者密码有误"}
// server.get("/product",(req,res)=>{
//     var pno=req.query.pno;
//     var ps=req.query.pageSize;
//     if(!pno){pno=1}
//     if(!ps){ps=4}
//     var sql="SELECT lid,title,price";
//     sql+=" FROM xz_laptop";
//     sql+=" LIMIT ?,?";
//     var offset=(pno-1)*ps;
//     ps=parseInt(ps);
//     pool.query(sql,[offset,ps],(err,result)=>{
//         if(err) throw err;
//         res.send({code:1,msg:"查询成功",data:result});

//         })
    
// }) 
// //功能三:查询指定用户购物车信息88~114
// server.get("/cart",(req,res)=>{
//     //参数
//     var uid = req.session.uid;
//     //sql
//     var sql = "SELECT id,img,uid,price,count FROM xz_cart WHERE uid = ?";
//     pool.query(sql,[uid],(err,result)=>{
//       if(err)throw err;
//       res.send({code:1,msg:"查询成功",data:result})
//     });
//     //json
//   })
  
  
//   //功能四:-删除指定购物车中一个商品
//   server.get("/del",(req,res)=>{
//     //参数:id
//     var id = req.query.id;
//     //sql:
//     var sql = "DELETE FROM xz_cart WHERE id = ?";
//     //json
//     pool.query(sql,[id],(err,result)=>{
//        if(err)throw err;
//        console.log(result);
//        res.send({code:1,msg:"删除成功"})
//     })
//   })
// //   功能五:清空购物车
// server.get("/delAll",(req,res)=>{
//     //参数:6,7,9
//     var ids=req.query.ids;
//     //sql:
//     console.log(ids)
//     var sql=`DELETE FROM xz_cart WHERE id IN(${ids})`
//     pool.query(sql,(err,result)=>{
//         if(err)throw err;
//         //insert update delete
//         //result不是数组是一个对象
//         if(result.affectedRows>0){
//             res.send({code:1,msg:"删除成功"})
//         }else{
//             res.send({code:0,msg:"删除失败"})
//         }
//     })
// })
  