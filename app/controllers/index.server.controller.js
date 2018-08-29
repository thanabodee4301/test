exports.bank=(req,res)=>{
    var Islogin=false;
    if(typeof req.session.remember !=='undefined'){
        Islogin=req.session.remember;
    }
    res.render('index',{
        title:'INDEX',
        Islogin:Islogin
    });
}