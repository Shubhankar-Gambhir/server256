const express = require('express');
const crypto = require('crypto');
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.json());

app.post('/hash', function(req,res){
const hash = crypto.createHash('sha256');
    response = {
        "hash": hash.update(req.body.data).digest('hex')
    }
    res.json(response);
  
})

var server = app.listen(8787, function () {
    var host = server.address().address
    var port = server.address().port
    
    console.log("server listening at http://%s:%s", host, port)
})
