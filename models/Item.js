const mongoose = require('mongoose');
const MongoCollection = 'marketdata.arbmonhist-p';
const Schema = mongoose.Schema;

//Create Schema
const ItemSchema = new Schema(
    {
        tradeInstructions: String,       
        timeStamp: String,       
        
     /*   key: String,
        exch1Name: String,
        exch2Name: String,
        ccyPair: String,
        exch1BuyAt: String,
        exch1SellAt: String,
        exch2BuyAt: String,
        exch2SellAt: String,
        gainLoss: String,
        urgentTrade: String,
        arbPercent: String,
        exch1BuyOrSell: String,
        time: String*/
    },
    {
        collection: MongoCollection
    }
);

module.exports = Item = mongoose.model('item', ItemSchema);