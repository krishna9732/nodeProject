const express = require('express');
const http = require('http');
const morgan = require('morgan');
const bodyParser =  require('body-parser');
const dishRouter = require('./routes/dishRouter');
const promoRouter = require('./routes/promoRouter');
const dishesRouter = require('./routes/dishRouter');
const leaderesRouter = require('./routes/leaderRouter');
const leaderRouter = require('./routes/leaderRouter');
const promosRouter = require('./routes/promoRouter');

const app = express();
const port = 3000;

app.use(morgan('dev'));
app.use(bodyParser.json());

app.use('/dishes',dishRouter);
app.use('/dishes/:dishId',dishesRouter);

app.use('/leaders',leaderRouter);
app.use('/leaders/:leaderId',leaderesRouter);

app.use('/promotions',promoRouter);
app.use('/promotions/:promoId',promosRouter);

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

