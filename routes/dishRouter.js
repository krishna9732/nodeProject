const express = require('express');
const bodyParser = require('body-parser');


const dishesRouter = express.Router();
dishesRouter.use(bodyParser.json());

dishesRouter.route('/:dishId')
.get((req,res,next)=>{
    res.end('will send details of dish : '+req.params.dishId+ ' to you!');
})

.post((req,res,next)=>{
    req.statusCode = 403;
    res.end('POST operation not supported on /dishes/ '+req.params.dishId );
})

.put((req,res,next)=>{
    res.write('updating the dish '+req.params.dishId + '\n');
    res.end('will update this dishId: '+req.body.name + 'with details: ' + req.body.description)
})
.delete((req,res,next)=>{
    res.end('Deleting dish: '+ req.params.dishId);
});

module.exports = dishesRouter;