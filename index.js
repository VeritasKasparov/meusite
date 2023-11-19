const express = require('express');
const app = express();
const fs = require('fs');

diretorio = __dirname + '/trator/'



app.get('*', function(req, res){
	rota = diretorio + req.params[0]	
	
	fs.access(rota, fs.constants.F_OK, (err) => {
  	if (err) {

    		res.status(404).send('Not Found');} 

  	else if (rota != '/') {

	    	res.sendFile(rota);}
	
	else {

		res.sendFile(diretorio + "index.html")

	}
	
	});})



app.listen(3000,function(){
    console.log("Servidor ativo no porta 3000");
});

