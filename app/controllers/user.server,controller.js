var mysql = require('mysql');
/*var con = mysql.createConnection({
    host:"192.168.1.85",
    user:"juniordev",
    password:"tbdadmin",
    database:"dev_db"
})*/
var con =mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"12345678",
    database:"nodejs"
})
exports.login = function(req,res){
    //console.log(req.body);
    //onsole.log('Yourname is  : '+req.body.yourname);
    if(req.body.remember ==='remember'){
        req.session.remember=true;
        req.session.cookie.maxAge=60000;
        req.session.yourname=req.body.yourname;
    }
    var sql = "select * from yourtext"
    con.query(sql,function(err,result,fields){
        res.render('read',{title:'Welcome :  '+req.session.yourname,data:result,Islogin:true})
    });
   
}

exports.read=function(req,res){
    var sql = "select * from yourtext"
    con.query(sql,function(err,result,fields){
        res.render('read',{title:'YourName :  '+req.session.yourname,data:result})
    })
}

exports.create=function(req,res){
    res.render('create',{title:"CREATE"})
}

exports.add=function(req,res){
    var input = JSON.parse(JSON.stringify(req.body))
    var data= {
        number:input.number,
        utext:input.utext
        
    }
    var sql = "INSERT INTO yourtext () value('"+data.number+"','"+data.utext+"')"
    con.query(sql,function(err,result){
        if(err){
            console.log('error = ',err)
        }
        res.redirect('read')
        
    })
}
exports.update=function(req,res){
    var sql = "select * from yourtext where ID="+req.params.id
    con.query(sql,function(err,result){
        if(err)
        {
            console.log('error = ',err)
        }
        res.render('update',{titel:'UPDATE',data:result})  
    })
}
exports.updatedata=function(req,res){
    var input = JSON.parse(JSON.stringify(req.body))
    var data = {
        number:input.number,
        utext:input.utext
              }
    var sql = "UPDATE yourtext SET yourtext='"+data.utext+"' where ID="+req.params.id
    con.query(sql,function(err,result){
        if(err){
            console.log('error = ',err)
        }
        res.redirect('read')
    })
}
exports.delete=function(req,res){
    var sql = "DELETE FROM yourtext where ID="+req.params.id
    con.query(sql,function(err,result){
        res.redirect('read')
    });
}
exports.logout=function(req,res){
    req.session=null;
    res.render('index',{
        titel:'See you agin',
        Islogin:false
    });
}