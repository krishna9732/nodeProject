const express = require('express');
const http = require('http');
const morgan = require('morgan');
const bodyParser =  require('body-parser')
const app = express();
const port = 3000;

app.use(morgan('dev'));
app.use(bodyParser.json());

app.all('/dishes',(req,res,next)=>{
    res.statusCode = 200;
    res.setHeader('Content-Type','test/plain');
    next();
});

app.get('/dishes',(req,res,next)=>{
    res.end('will send all dishes to you ');
});

app.post('/dishes',(req,res,next)=>{
    res.end('will add the dish'+req.body.name + 'will details' + req.body.description);
});

app.put('/dishes',(req,res,next)=>{
    req.statusCode = 403;
    res.end('PUT operation not supported');
});
app.delete('/dishes',(req,res,next)=>{
    res.end('Deleting all the dishes');
});


app.get('/dishes/:dishId',(req,res,next)=>{
    res.end('will send details of dish : '+req.params.dishId+ 'to you!');
});

app.post('/dishes/:dishId',(req,res,next)=>{
    req.statusCode = 403;
    res.end('POST operation not supported on /dishes/'+req.params.dishId );
});

app.put('/dishes/:dishId',(req,res,next)=>{
    res.write('updating the dish '+req.params.dishId + '\n');
    res.end('will update this dishId: '+req.body.name + 'with details: ' + req.body.description)
});
app.delete('/dishes/:dishId',(req,res,next)=>{
    res.end('Deleting all the dishes');
});


app.use(express.static(__dirname+'/public'));

app.get('/',(req,res)=>{
    res.statusCode =200;
    res.setHeader('Content-Type','text/html');
    res.end('<html><body><h1>This is example of express</h1></body></html>')
})
const server = http.createServer(app);
server.listen(port,()=>{
    console.log(`Example app listening at http://localhost:${port}`);   
})