module.exports=function(app){
    var soccer = require('../controllers/soccerApi.server.controller.js');
    app.get('/',soccer.home);
    app.get('/league/:league_slug',soccer.seasonDetails);
};



module.exports=function(app){
    var user = require('../controllers/user.server,controller.js');
    app.route('/read')
        .get(user.read)
        .post(user.login);
    app.route('/create')
        .get(user.create)
        .post(user.add);
    app.route('/update/:id')
        .get(user.update)
    app.post(user.updatedata);
    app.get('/delete/:id',user.delete);
    app.post('/logout',user.logout);
};