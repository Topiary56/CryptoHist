const mongoose = require('mongoose');
const mongoInstance = "mongodb://David:10didi22@ds117250.mlab.com:17250/crypto"
const MongoCollection = 'marketdata.arbmonhist-p';

const Schema = mongoose.Schema;
var db;


function outputFormattedResults(arr){
    for (let i = 0; i < arr.length; i++){
        console.log(i+1);
        for (var key in arr[i]){
            if(arr[i].hasOwnProperty(key)){
                console.log(key + "= " + arr[i][key]);
            }
        }
        console.log(" ");
    }
}

mongoose
    .connect(mongoInstance, {useNewUrlParser: true})
    .then(() => console.log('MongoDB Connected...'))
    .catch(err => console.log(err));

const schema = new Schema(
    {
        data: String
    },
    {
        collection: MongoCollection
    }
    );

const Test = mongoose.model('Test', schema);

Test.find().lean().limit(10).exec((err, docs) => {
    if(err){
        return console.log(err);
    }
    outputFormattedResults(docs);
});

