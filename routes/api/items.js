const express = require('express');
const router = express.Router();

// Item Model
const Item = require('../../models/Item');

// @route  GET api.Items
// @desc   Get All Items
// @access Public
router.get('/', (req,res) =>{
    Item.find()
        .sort({time: -1 })
        .lean()
        .limit(20)
        .exec((err, docs) => {
            if(err){
                return console.log(err);
            }
            
            res.send(docs);
            
            //console.log(docs);
        });
        //.then(items=>res.json(items));
});

/* @route  POST api.Items
// @desc   CREATE an Item
// @access Public
router.post('/', (req,res) =>{
    const newItem = new Item({
        name: req.body.name
    });

    newItem.save().then(item => res.json(item));
});*/

/* @route  DELETE api/Items/:id
// @desc   Deleta an Item
// @access Public
router.delete('/:id', (req,res) =>{
    Item.findById(req.params.id)
        .then(item => item.remove().then(() => res.json({success: true})))
        .catch(err => res.status(404).json({success: false}))
});*/

module.exports = router;