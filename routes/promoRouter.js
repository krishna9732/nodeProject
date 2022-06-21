const express = require('express');
const bodyParser = require('body-parser');



const promosRouter = express.Router();

promosRouter.route('/:promoId')
.get((req,res,next)=>{
    res.end('will send details of dish : '+req.params.promoId+ ' to you!');
})

.post((req,res,next)=>{
    req.statusCode = 403;
    res.end('POST operation not supported on /dishes/ '+req.params.promoId );
})

.put((req,res,next)=>{
    res.write('updating the dish '+req.params.promoId + '\n');
    res.end('will update this dishId: '+req.body.name + 'with details: ' + req.body.description)
})
.delete((req,res,next)=>{
    res.end('Deleting dish: '+ req.params.promoId);
});

module.exports = promosRouter;
