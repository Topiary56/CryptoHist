const express = require('express');
const router = express.Router();
var fs = require('fs');
const header = ('_id,key,exch1Name,exch2Name,timeStamp,ccyPair,exch1BuyAt,exch1SellAt,exch2BuyAt,exch2SellAt,gainLoss,urgentTrade,arbPercent,exch1BuyOrSell,tradeInstructions,time')

// Item Model
const Item = require('../../models/Item');

// @route  GET api.Items
// @desc   Get All Items
// @access Public
router.get('/', (req,res) =>{
    Item.find()
        .sort({time: -1 })
        .lean()
        .limit(100)
        .exec((err, docs) => {
            if(err){
                return console.log(err);
            }
            var temp = outputFormattedResults(docs);
            fs.writeFileSync('./cryptohist.csv', header + '\n' + temp , 'utf8');            
            res.send(docs);
        });
});
function outputFormattedResults(arr){
    var result = "";
    for (let i = 0; i < arr.length; i++){
        result += i+1;
        //console.log(i+1);
        for (var key in arr[i]){
            if(arr[i].hasOwnProperty(key)){
                result += (arr[i][key] + ',');

                //console.log(key + "= " + arr[i][key]);
            }
        }
        result += ('\n');
        //console.log(" ");
    }
    return result;
}

module.exports = router;