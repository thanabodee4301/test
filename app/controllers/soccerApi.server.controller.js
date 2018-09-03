var unirest = require('unirest');
exports.home = function(req,res){
unirest.get("https://sportsop-soccer-sports-open-data-v1.p.mashape.com/v1/leagues")
.header("X-Mashape-Key", "MzaZdz6LaBmshxXxtCHsjiGDl89Dp1qPKkwjsn60GFXVharyV1")
.header("Accept", "application/json")
.end(function (result) {
  res.render('home',{title:'HOME : ',data:result.body.data.leagues})
});
};

exports.seasonDetails=function(req,res){
  var league_slug=req.params.league_slug;
  unirest.get(`https://sportsop-soccer-sports-open-data-v1.p.mashape.com/v1/leagues/${league_slug}`)
  .header("X-Mashape-Key", "MzaZdz6LaBmshxXxtCHsjiGDl89Dp1qPKkwjsn60GFXVharyV1")
  .header("Accept", "application/json")
  .end(function(result){
    res.render('detail',{title:'detail',data:result.body.data.leagues})
  })
}





