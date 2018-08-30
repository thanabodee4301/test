var unirest = require('unirest');
unirest.get("https://sportsop-soccer-sports-open-data-v1.p.mashape.com/v1/leagues/serie-a/seasons/18-19")
.header("X-Mashape-Key", "MzaZdz6LaBmshxXxtCHsjiGDl89Dp1qPKkwjsn60GFXVharyV1")
.header("Accept", "application/json")
.end(function (result) {
  console.log(result.body.data.standings);
});