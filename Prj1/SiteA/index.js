var express=require('express');
var app=express();
var fs=require('fs');
app.set('port',process.env.port||3000);
app.get('/index',function(req,res){

	res.type('application/html');
	res.status(200);
	// res.send('Hello World');
	fs.readFile('Img/index.jpg',function(err,dt){
              if(err)
              {

              	res.send(err);
              }
              else
              {
                    res.send(dt);

              }
  
	});
});
app.use(function(req,res){
  res.type('text/plain');
  res.status(404);
  res.send('404');


});
app.use(function(req,res){
  res.type('text/html');
  res.status(500);
  res.send('500');


});
app.listen(app.get('port'),function(req,res){
console.log('app start');


});