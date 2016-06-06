var request = require('request');

var WhoAreYou = function(req,res,next){
	request('http://ip-api.com/json/'+req.headers['x-forwarded-for'], function (error, response, body) {
	  if (!error && response.statusCode == 200) {
	    console.log(body)
	  }
	})
	next();
}

module.exports = WhoAreYou;