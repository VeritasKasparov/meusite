const express = require('express');

const app = express();

dir = __dirname + '/mirko/'


app.use(express.static(path.join(__dirname, 'public')));

app.use((req, res, next) => {
  res.status(404).send('Arquivo não encontrado');
});



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


