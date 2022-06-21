const express = require('express');
const bodyParser = require('body-parser');

const leaderesRouter = express.Router();
leaderesRouter.use(bodyParser.json());

leaderesRouter.route('/:leaderId')
.get((req,res,next)=>{
    res.end('will send details of leader : '+req.params.leaderId+ ' to you!');
})

.post((req,res,next)=>{
    req.statusCode = 403;
    res.end('POST operation not supported on /leaderes/ '+req.params.leaderId );
})

.put((req,res,next)=>{
    res.write('updating the leader '+req.params.leaderId + '\n');
    res.end('will update this leaderId: '+req.body.name + 'with details: ' + req.body.description)
})
.delete((req,res,next)=>{
    res.end('Deleting leader: '+ req.params.leaderId);
});

module.exports = leaderesRouter;