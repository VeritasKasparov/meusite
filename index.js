const express = require('express');
const path = require('path');
const app = express();

dir = __dirname + '/mirko/'


app.get('*', function(req, res){
	route = req.params[0]	
	if (route != '/'){
		res.sendFile(dir + route)}	
	else {
		res.sendFile(dir + 'index.html')
	}
	
	})
	



app.listen(3000,function(){
    console.log("Servidor ativo no porta 3000");
});


