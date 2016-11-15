var express = require('express');
var bodyParser = require('body-parser');
var itemRouter = express.Router();

var item = require('../models/item');


itemRouter.route('/')

.get(function(req,res,next)
{
    item.getAll(res);
})

.post(function(req, res, next)
{
    //TODO : convert json to other json
    item.create(req.body, res);
});

itemRouter.route('/:id')

.get(function(req,res,next)
{
    //TODO : get element by req.params.itemId
    item.get(req.params.id, res);
})

.put(function(req, res, next)
{
  //TODO : get element by req.params.itemId
    item.update(req.params.id, req.body, res);
})

.delete(function(req, res, next)
{
    //TODO : get element by req.params.itemId
    item.delete(req.params.id, res);
});
 
module.exports = itemRouter;
